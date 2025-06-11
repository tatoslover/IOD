#!/bin/bash

# Flexible IOD Lab Deployment Script
# Auto-detects project types and deploys accordingly to GitHub Pages
# Usage: ./deploy-flexible.sh <lab-name>
# Example: ./deploy-flexible.sh Module1Lab

set -e  # Exit on any error

# Check if lab name is provided
if [ $# -eq 0 ]; then
    echo "❌ Error: Please provide a lab name"
    echo "Usage: ./deploy-flexible.sh <lab-name>"
    echo "Example: ./deploy-flexible.sh Module1Lab"
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

echo "🔍 Analyzing $LAB_NAME project type..."

# Auto-detect project type
PROJECT_TYPE=""
BUILD_DIR=""

cd "$LAB_DIR"

# Check for React with Create React App
if [ -f "package.json" ] && grep -q "react-scripts" package.json 2>/dev/null; then
    PROJECT_TYPE="react-cra"
    echo "📦 Detected: React app (Create React App)"
    
# Check for React with Vite
elif [ -f "package.json" ] && [ -f "vite.config.js" ]; then
    PROJECT_TYPE="react-vite"
    echo "📦 Detected: React app (Vite)"

# Check for Node.js backend project
elif [ -f "package.json" ] && grep -q "express\|server\|backend" package.json 2>/dev/null; then
    PROJECT_TYPE="backend"
    echo "🖥️ Detected: Backend Node.js project"

# Check for static project with package.json (like dice simulator)
elif [ -f "package.json" ] && [ -f "index.html" ]; then
    PROJECT_TYPE="static-with-npm"
    echo "📄 Detected: Static project with npm (testing/tooling)"

# Check for pure static HTML project
elif find . -name "*.html" -type f | head -1 | grep -q "."; then
    PROJECT_TYPE="static-html"
    echo "📄 Detected: Static HTML/CSS/JS project"

# Check for pure JavaScript files
elif find . -name "*.js" -type f | head -1 | grep -q "." && [ ! -f "package.json" ]; then
    PROJECT_TYPE="pure-js"
    echo "💻 Detected: Pure JavaScript files"

else
    echo "❓ Unknown project type, treating as static files"
    PROJECT_TYPE="static-html"
fi

# Handle different project types
case $PROJECT_TYPE in
    "react-cra")
        echo "🏗️ Building React app (Create React App)..."
        npm run build
        BUILD_DIR="$(pwd)/build"
        ;;
        
    "react-vite")
        echo "🏗️ Building React app (Vite)..."
        npm run build
        BUILD_DIR="$(pwd)/dist"
        ;;
        
    "backend")
        echo "❌ Backend projects cannot be deployed to GitHub Pages"
        echo "💡 Consider creating a separate documentation page or README for this project"
        exit 1
        ;;
        
    "static-with-npm")
        echo "📦 Preparing static project with npm dependencies..."
        # Create a temporary build directory and copy static files
        mkdir -p temp_build
        cp *.html temp_build/ 2>/dev/null || true
        cp *.css temp_build/ 2>/dev/null || true
        cp *.js temp_build/ 2>/dev/null || true
        cp -r assets temp_build/ 2>/dev/null || true
        cp -r images temp_build/ 2>/dev/null || true
        cp -r css temp_build/ 2>/dev/null || true
        cp -r js temp_build/ 2>/dev/null || true
        BUILD_DIR="$(pwd)/temp_build"
        ;;
        
    "static-html")
        echo "📁 Preparing static HTML project..."
        # Create a temporary build directory with all static files
        mkdir -p temp_build
        
        # Copy all HTML, CSS, JS files and common asset directories
        find . -name "*.html" -exec cp {} temp_build/ \; 2>/dev/null || true
        find . -name "*.css" -exec cp {} temp_build/ \; 2>/dev/null || true
        find . -name "*.js" -exec cp {} temp_build/ \; 2>/dev/null || true
        find . -name "*.png" -exec cp {} temp_build/ \; 2>/dev/null || true
        find . -name "*.jpg" -exec cp {} temp_build/ \; 2>/dev/null || true
        find . -name "*.jpeg" -exec cp {} temp_build/ \; 2>/dev/null || true
        find . -name "*.gif" -exec cp {} temp_build/ \; 2>/dev/null || true
        find . -name "*.svg" -exec cp {} temp_build/ \; 2>/dev/null || true
        
        # Copy entire subdirectories that might contain organized content
        for dir in Lab1 Lab2 Lab3 Lab4 Lab5 src assets images css js; do
            if [ -d "$dir" ]; then
                cp -r "$dir" temp_build/ 2>/dev/null || true
            fi
        done
        
        # Create an index.html if none exists
        if [ ! -f "temp_build/index.html" ]; then
            echo "📝 Creating index.html for lab navigation..."
            cat > temp_build/index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$LAB_NAME</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: white;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }
        h1 { text-align: center; margin-bottom: 30px; }
        .lab-links { display: grid; gap: 15px; margin-top: 30px; }
        .lab-link {
            display: block;
            padding: 15px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            text-decoration: none;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: all 0.2s ease;
        }
        .lab-link:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }
        .description {
            text-align: center;
            opacity: 0.9;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎓 $LAB_NAME</h1>
        <p class="description">Learning exercises and lab work</p>
        <div class="lab-links">
EOF
            
            # Add links to any HTML files found
            find temp_build -name "*.html" -not -name "index.html" | while read -r file; do
                filename=$(basename "$file")
                echo "            <a href=\"$filename\" class=\"lab-link\">📄 $filename</a>" >> temp_build/index.html
            done
            
            # Add links to subdirectories
            for dir in temp_build/Lab*; do
                if [ -d "$dir" ]; then
                    dirname=$(basename "$dir")
                    echo "            <a href=\"$dirname/\" class=\"lab-link\">📁 $dirname</a>" >> temp_build/index.html
                fi
            done
            
            cat >> temp_build/index.html << EOF
        </div>
        <div style="text-align: center; margin-top: 40px; opacity: 0.8;">
            <a href="https://github.com/tatoslover/IOD/tree/main/$LAB_NAME" style="color: white;">📂 View Source Code</a>
        </div>
    </div>
</body>
</html>
EOF
        fi
        
        BUILD_DIR="$(pwd)/temp_build"
        ;;
        
    "pure-js")
        echo "💻 Creating HTML wrapper for JavaScript files..."
        mkdir -p temp_build
        
        # Copy all JS files
        cp *.js temp_build/ 2>/dev/null || true
        
        # Create an HTML page that can run the JS files
        cat > temp_build/index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$LAB_NAME - JavaScript Exercises</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: white;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
        }
        h1 { text-align: center; margin-bottom: 30px; }
        .js-files { display: grid; gap: 20px; margin-top: 30px; }
        .js-file {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .file-name {
            font-size: 1.2em;
            font-weight: 600;
            margin-bottom: 15px;
            color: #ffd700;
        }
        .run-button {
            background: rgba(40, 167, 69, 0.8);
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            cursor: pointer;
            margin-right: 10px;
        }
        .run-button:hover {
            background: rgba(40, 167, 69, 1);
        }
        .view-button {
            background: rgba(23, 162, 184, 0.8);
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            cursor: pointer;
        }
        .view-button:hover {
            background: rgba(23, 162, 184, 1);
        }
        .output {
            background: rgba(0, 0, 0, 0.3);
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
            font-family: 'Courier New', monospace;
            min-height: 50px;
            display: none;
        }
        .description {
            text-align: center;
            opacity: 0.9;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>💻 $LAB_NAME</h1>
        <p class="description">JavaScript exercises and programming fundamentals</p>
        <div class="js-files">
EOF

        # Add sections for each JavaScript file
        for jsfile in temp_build/*.js; do
            if [ -f "$jsfile" ]; then
                filename=$(basename "$jsfile")
                cat >> temp_build/index.html << EOF
            <div class="js-file">
                <div class="file-name">📄 $filename</div>
                <button class="run-button" onclick="runScript('$filename')">▶️ Run in Console</button>
                <button class="view-button" onclick="viewSource('$filename')">👀 View Source</button>
                <div id="output-$filename" class="output"></div>
            </div>
EOF
            fi
        done

        cat >> temp_build/index.html << EOF
        </div>
        <div style="text-align: center; margin-top: 40px; opacity: 0.8;">
            <p>💡 Open browser console (F12) to see script outputs</p>
            <a href="https://github.com/tatoslover/IOD/tree/main/$LAB_NAME" style="color: white;">📂 View Source Code</a>
        </div>
    </div>

    <script>
        function runScript(filename) {
            const output = document.getElementById('output-' + filename);
            output.style.display = 'block';
            output.innerHTML = 'Running ' + filename + '... Check browser console for output.';
            
            // Load and execute the script
            const script = document.createElement('script');
            script.src = filename;
            script.onload = () => {
                output.innerHTML += '<br>✅ Script loaded successfully. Check console for results.';
            };
            script.onerror = () => {
                output.innerHTML += '<br>❌ Error loading script.';
            };
            document.head.appendChild(script);
        }
        
        function viewSource(filename) {
            fetch(filename)
                .then(response => response.text())
                .then(code => {
                    const output = document.getElementById('output-' + filename);
                    output.style.display = 'block';
                    output.innerHTML = '<pre>' + code.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>';
                })
                .catch(err => {
                    const output = document.getElementById('output-' + filename);
                    output.style.display = 'block';
                    output.innerHTML = '❌ Could not load source code.';
                });
        }
    </script>
</body>
</html>
EOF
        
        BUILD_DIR="$(pwd)/temp_build"
        ;;
esac

cd "$OLDPWD"

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
        <p>Flexible deployment - supports React, Static HTML, and JavaScript projects</p>
        <p><a href="https://github.com/tatoslover/IOD" style="color: white;">View Repository</a></p>
    </div>
</body>
</html>
EOF
fi

# Add all changes
echo "📤 Committing changes..."
git add .
git commit -m "Deploy $LAB_NAME ($PROJECT_TYPE) - $(date)" || echo "No changes to commit"

# Push to gh-pages branch
echo "🚀 Pushing to GitHub Pages..."
git push -f origin gh-pages

# Cleanup temporary build directory if we created one
cd "$OLDPWD"
if [[ "$BUILD_DIR" == *temp_build ]]; then
    rm -rf "$LAB_DIR/temp_build"
fi
rm -rf "$TEMP_DIR"

echo "✅ Deployment complete!"
echo "🌐 $LAB_NAME: https://tatoslover.github.io/IOD/$LAB_NAME"
echo "🏠 All Labs: https://tatoslover.github.io/IOD"
echo ""
echo "⏱️  GitHub Pages may take 1-2 minutes to update."
echo ""
echo "📝 Project type detected: $PROJECT_TYPE"
case $PROJECT_TYPE in
    "backend")
        echo "💡 Backend projects are not deployed. Consider adding documentation."
        ;;
    "static-html")
        echo "💡 Static files deployed with auto-generated navigation."
        ;;
    "pure-js")
        echo "💡 JavaScript files wrapped in interactive HTML interface."
        ;;
    *)
        echo "💡 Build completed successfully."
        ;;
esac