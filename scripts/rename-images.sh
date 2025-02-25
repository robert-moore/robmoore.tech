#!/bin/bash

# Function to convert string to kebab case
to_kebab_case() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-zA-Z0-9]+/-/g' | sed -E 's/^-+|-+$//g'
}

# Function to get the extension from a filename
get_extension() {
  echo "$1" | awk -F. '{print $NF}'
}

# Function to get nearest heading above a line
get_nearest_heading() {
  local file=$1
  local target_line=$2
  local current_heading=""
  local line_count=0
  
  while IFS= read -r line; do
    if [[ $line =~ ^##*[[:space:]](.+)$ ]]; then
      current_heading="${BASH_REMATCH[1]}"
    fi
    ((line_count++))
    if [ $line_count -ge $target_line ]; then
      echo "$current_heading"
      break
    fi
  done < "$file"
}

# Function to process a markdown file
process_file() {
  local md_file=$1
  local post_slug=$(basename "$md_file" .md)
  local images_dir="public/images/posts/$post_slug"
  
  # Skip if directory doesn't exist
  if [ ! -d "$images_dir" ]; then
    return
  fi
  
  echo "Processing $md_file..."
  
  # Get post title
  title=$(grep '^title: ' "$md_file" | sed 's/^title: *"*\([^"]*\)"*/\1/')
  
  # Create a temporary file for the new content
  temp_file=$(mktemp)
  
  # Process the file line by line
  line_count=0
  image_counter=1
  while IFS= read -r line; do
    if echo "$line" | grep -q '!\[.*\](/images/posts/'; then
      # Extract alt text and filename
      alt_text=$(echo "$line" | sed -n 's/.*!\[\([^]]*\)\](.*/\1/p')
      old_filename=$(echo "$line" | sed -n "s/.*\/images\/posts\/$post_slug\/\([^)]*\).*/\1/p")
      
      if [ -n "$old_filename" ]; then
        # Get the nearest heading
        heading=$(get_nearest_heading "$md_file" "$line_count")
        
        # Generate new filename based on heading, alt text, or title
        if [ -n "$heading" ] && [ ${#heading} -gt 3 ]; then
          new_name=$(to_kebab_case "$heading")
        elif [ -n "$alt_text" ] && [ ${#alt_text} -gt 3 ]; then
          new_name=$(to_kebab_case "$alt_text")
        else
          new_name="$(to_kebab_case "$title")-figure-$image_counter"
          ((image_counter++))
        fi
        
        # Add extension
        extension=$(get_extension "$old_filename")
        new_filename="${new_name}.${extension}"
        
        # Ensure filename is unique
        counter=1
        while [ -f "$images_dir/$new_filename" ] && [ "$images_dir/$old_filename" != "$images_dir/$new_filename" ]; do
          new_filename="${new_name}-${counter}.${extension}"
          ((counter++))
        done
        
        # Rename the file if it exists and needs to be renamed
        if [ -f "$images_dir/$old_filename" ] && [ "$old_filename" != "$new_filename" ]; then
          echo "Renaming $old_filename to $new_filename"
          mv "$images_dir/$old_filename" "$images_dir/$new_filename"
        fi
        
        # Update the line with the new filename
        line=$(echo "$line" | sed "s|$old_filename|$new_filename|g")
      fi
    fi
    echo "$line" >> "$temp_file"
    ((line_count++))
  done < "$md_file"
  
  # Replace the original file with the updated content
  mv "$temp_file" "$md_file"
}

# Process all markdown files in the content/post directory
for file in content/post/*.md; do
  process_file "$file"
done

echo "Done! All images have been renamed and markdown files updated." 