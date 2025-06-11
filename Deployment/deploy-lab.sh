#!/bin/bash

# Deploy any IOD Lab to GitHub Pages subdirectory
# This script creates a proper subdirectory structure for multiple labs
# Usage: ../Deployment/deploy-lab.sh <lab-name> (from IOD root) OR ./deploy-lab.sh <lab-name> (from Deployment folder)
# Example: ../Deployment/deploy-lab.sh Module6Lab

set -e  # Exit on any error

# Check if lab name is provided
if [ $# -eq 0 ]; then
    echo "❌ Error: Please provide a lab name"
    echo "Usage: ./deploy-lab.sh <lab-name>"
    echo "Example: ./deploy-lab.sh Module6Lab"
    exit 1
fi

LAB_NAME="$1"
# Check if we're in the Deployment folder or IOD root
if [ -d "../$LAB_NAME" ]; then
    LAB_DIR="../$LAB_NAME"
elif [ -d "./$LAB_NAME" ]; then
    LAB_DIR="./$LAB_NAME"
else
    LAB_DIR=""
fi

# Check if lab directory exists
if [ -z "$LAB_DIR" ] || [ ! -d "$LAB_DIR" ]; then
    echo "❌ Error: Directory '$LAB_NAME' does not exist"
    echo "Available labs:"
    if [ -d "../Module1Lab" ]; then
        ls -d ../Module*Lab 2>/dev/null || echo "No Module*Lab directories found"
    else
        ls -d Module*Lab 2>/dev/null || echo "No Module*Lab directories found"
    fi
    exit 1
fi

echo "🚀 Deploying $LAB_NAME to subdirectory..."

# Navigate to lab directory and build
echo "📦 Building React app..."
cd "$LAB_DIR"
npm run build
BUILD_DIR="$(pwd)/build"
cd ..

# Create temporary directory for GitHub Pages structure
TEMP_DIR=$(mktemp -d)
echo "📁 Created temporary directory: $TEMP_DIR"

# Clone the existing gh-pages branch (if it exists)
echo "📥 Fetching existing gh-pages content..."
git clone --single-branch --branch gh-pages https://github.com/tatoslover/IOD.git "$TEMP_DIR" 2>/dev/null || {
    echo "📝 No existing gh-pages branch found, creating new structure..."
    cd "$TEMP_DIR"
    git init
    git remote add origin https://github.com/tatoslover/IOD.git
    git checkout -b gh-pages
}

# Navigate to temp directory
cd "$TEMP_DIR"

# Create lab subdirectory and copy build files
echo "📋 Creating $LAB_NAME subdirectory..."
rm -rf "$LAB_NAME"
mkdir -p "$LAB_NAME"
cp -r "$BUILD_DIR/"* "$LAB_NAME"/

# Create or update index.html for root directory (lab directory listing)
echo "📝 Creating/updating root index.html..."
# Try to find the template file in different locations
TEMPLATE_FILE=""
if [ -f "$OLDPWD/Deployment/lab-directory-template.html" ]; then
    TEMPLATE_FILE="$OLDPWD/Deployment/lab-directory-template.html"
elif [ -f "$OLDPWD/lab-directory-template.html" ]; then
    TEMPLATE_FILE="$OLDPWD/lab-directory-template.html"
elif [ -f "lab-directory-template.html" ]; then
    TEMPLATE_FILE="lab-directory-template.html"
fi

if [ -n "$TEMPLATE_FILE" ]; then
    cp "$TEMPLATE_FILE" index.html
    echo "✅ Used template from $TEMPLATE_FILE"
else
    echo "⚠️  Template file not found, using embedded HTML"
    cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IOD Labs Collection - GitHub Pages</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }
        h1 { font-size: 2.5rem; margin-bottom: 30px; }
        .lab-link { 
            display: block; 
            margin: 15px 0; 
            padding: 15px; 
            background: rgba(255, 255, 255, 0.2); 
            border-radius: 10px; 
            text-decoration: none; 
            color: white; 
        }
        .lab-link:hover { background: rgba(255, 255, 255, 0.3); }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎓 IOD Labs Collection</h1>
        <p>Edit lab-directory-template.html to customize this page</p>
        <a href="./Module6Lab/" class="lab-link">Module 6 Lab - React Applications ✅</a>
        <p><a href="https://github.com/tatoslover/IOD" style="color: white;">View Repository</a></p>
    </div>
</body>
</html>
EOF
fi

# Add all changes
echo "📤 Committing changes..."
git add .
git commit -m "Deploy Module6Lab to subdirectory - $(date)" || echo "No changes to commit"

# Push to gh-pages branch
echo "🚀 Pushing to GitHub Pages..."
git push -f origin gh-pages

# Cleanup
cd "$OLDPWD"
rm -rf "$TEMP_DIR"

echo "✅ Deployment complete!"
echo "🌐 $LAB_NAME: https://tatoslover.github.io/IOD/$LAB_NAME"
echo "🏠 All Labs: https://tatoslover.github.io/IOD"
echo ""
echo "⏱️  GitHub Pages may take 1-2 minutes to update."
echo ""
echo "📝 To update the lab directory listing, edit the template file:"
echo "   nano Deployment/lab-directory-template.html"
echo "   Then redeploy any lab to update the main page"