#!/bin/bash

# Create necessary directories
mkdir -p public/images/posts

# Function to decode URL
urldecode() {
  printf '%b' "${1//%/\\x}"
}

# Function to get clean filename from URL
get_filename() {
  local url=$1
  # Extract the last part of the URL (the ID_dimensions.png part)
  local filename=$(echo "$url" | grep -o '[^/]*_[0-9x]*\.[a-zA-Z]*$' || echo "image.png")
  echo "$filename"
}

# Function to process a markdown file
process_file() {
  local md_file=$1
  local post_slug=$(basename "$md_file" .md)
  local images_dir="public/images/posts/$post_slug"
  
  # Create directory for this post's images
  mkdir -p "$images_dir"
  
  # Find all Substack CDN URLs in the file
  grep -o 'https://substackcdn.com/image/fetch/[^)]*' "$md_file" | while read -r url; do
    # Get the high-quality version URL (remove width limit if present)
    clean_url=$(echo "$url" | sed 's/w_1456,c_limit,//')
    
    # Get the decoded URL
    decoded_url=$(urldecode "$clean_url")
    
    # Get a clean filename
    filename=$(get_filename "$decoded_url")
    
    # Download the image if it doesn't exist
    if [ ! -f "$images_dir/$filename" ]; then
      echo "Downloading $filename..."
      curl -L "$decoded_url" -o "$images_dir/$filename"
    fi
    
    # Replace both empty links and image links in the markdown
    # First, replace the empty links
    sed -i '' "s|\[\](${url})|![](/images/posts/${post_slug}/${filename})|g" "$md_file"
    # Then, replace the image links
    sed -i '' "s|!\[\](${url})|![](/images/posts/${post_slug}/${filename})|g" "$md_file"
    # Finally, handle cases with alt text
    sed -i '' "s|!\[\([^]]*\)\](${url})|![\1](/images/posts/${post_slug}/${filename})|g" "$md_file"
  done
}

# Process all markdown files in the content/post directory
for file in content/post/*.md; do
  echo "Processing $file..."
  process_file "$file"
done

echo "Done! All images have been downloaded and markdown files updated." 