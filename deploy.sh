#!/bin/bash
# Simple script to deploy to Netlify

echo "Preparing files for Netlify deployment..."

# Create build directory
mkdir -p dist

# Copy HTML, CSS, and JavaScript files
cp index.html dist/
cp -r css dist/
cp -r js dist/
cp -r presets dist/
cp custom_mappings.json dist/
cp netlify.toml dist/
cp _redirects dist/

# Copy README and license if they exist
[ -f README.md ] && cp README.md dist/
[ -f LICENSE ] && cp LICENSE dist/

echo "Files prepared for deployment!"
echo "To deploy, you can use the Netlify CLI or drag the dist folder to Netlify's web interface."
