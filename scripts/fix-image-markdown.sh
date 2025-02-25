#!/bin/bash

# Fix double exclamation marks in all markdown files
for file in content/post/*.md; do
  echo "Fixing $file..."
  sed -i '' 's/!!\[/![/g' "$file"
done

echo "Done! Fixed all double exclamation marks in markdown files." 