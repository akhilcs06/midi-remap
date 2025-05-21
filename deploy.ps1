# PowerShell script to prepare files for Netlify deployment

Write-Host "Preparing files for Netlify deployment..." -ForegroundColor Green

# Create build directory
if (!(Test-Path -Path "dist")) {
    New-Item -ItemType Directory -Path "dist" | Out-Null
}

# Copy HTML, CSS, and JavaScript files
Copy-Item -Path "index.html" -Destination "dist/" -Force
Copy-Item -Path "css" -Destination "dist/" -Recurse -Force
Copy-Item -Path "js" -Destination "dist/" -Recurse -Force
Copy-Item -Path "presets" -Destination "dist/" -Recurse -Force
Copy-Item -Path "custom_mappings.json" -Destination "dist/" -Force
Copy-Item -Path "netlify.toml" -Destination "dist/" -Force
Copy-Item -Path "_redirects" -Destination "dist/" -Force

# Copy README and license if they exist
if (Test-Path -Path "README.md") {
    Copy-Item -Path "README.md" -Destination "dist/" -Force
}
if (Test-Path -Path "LICENSE") {
    Copy-Item -Path "LICENSE" -Destination "dist/" -Force
}

Write-Host "Files prepared for deployment!" -ForegroundColor Green
Write-Host "To deploy, you can use the Netlify CLI or drag the dist folder to Netlify's web interface." -ForegroundColor Cyan
