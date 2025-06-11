#!/bin/bash

# Unified IOD Lab Deployment Script
# Creates a single comprehensive page displaying all exercises/labs together
# Usage: ./deploy-unified.sh <lab-name>
# Example: ./deploy-unified.sh Module1Lab

set -e  # Exit on any error

# Check if lab name is provided
if [ $# -eq 0 ]; then
    echo "❌ Error: Please provide a lab name"
    echo "Usage: ./deploy-unified.sh <lab-name>"
    echo "Example: ./deploy-unified.sh Module1Lab"
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

echo "🔍 Creating unified page for $LAB_NAME..."

cd "$LAB_DIR"

# Create unified build directory
mkdir -p unified_build
BUILD_DIR="$(pwd)/unified_build"

# Copy all assets first
cp -r . unified_build/ 2>/dev/null || true
rm -rf unified_build/unified_build 2>/dev/null || true  # Remove recursive copy

# Create the unified HTML page
cat > "$BUILD_DIR/index.html" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PLACEHOLDER_LAB_NAME - Unified Lab View</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .main-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            color: white;
        }
        
        .header h1 {
            font-size: 3rem;
            margin-bottom: 15px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .nav-tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-bottom: 30px;
        }
        
        .nav-tab {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .nav-tab:hover, .nav-tab.active {
            background: rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-2px);
        }
        
        .exercise-container {
            display: none;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            margin-bottom: 30px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        .exercise-container.active {
            display: block;
            animation: fadeIn 0.5s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .exercise-header {
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .exercise-title {
            font-size: 1.5rem;
            font-weight: 600;
        }
        
        .exercise-type {
            background: rgba(255, 255, 255, 0.2);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .exercise-content {
            padding: 0;
        }
        
        .code-section {
            background: #2d3748;
            color: #e2e8f0;
            padding: 20px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.4;
            overflow-x: auto;
            margin: 20px;
            border-radius: 8px;
        }
        
        .html-preview {
            border: none;
            width: 100%;
            min-height: 400px;
            background: white;
        }
        
        .js-console {
            background: #1a202c;
            color: #68d391;
            padding: 20px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            margin: 20px;
            border-radius: 8px;
            min-height: 100px;
        }
        
        .run-button {
            background: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            margin: 20px;
            transition: all 0.3s ease;
        }
        
        .run-button:hover {
            background: #45a049;
            transform: translateY(-2px);
        }
        
        .overview-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .overview-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 25px;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .overview-card:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .overview-card h3 {
            margin-bottom: 15px;
            color: #ffd700;
            font-size: 1.3rem;
        }
        
        .overview-card p {
            opacity: 0.9;
            line-height: 1.5;
        }
        
        .footer {
            text-align: center;
            margin-top: 60px;
            padding: 30px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            color: white;
        }
        
        .footer a {
            color: #ffd700;
            text-decoration: none;
            font-weight: 600;
        }
        
        .footer a:hover {
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .nav-tabs {
                flex-direction: column;
                align-items: center;
            }
            
            .exercise-header {
                flex-direction: column;
                gap: 10px;
                text-align: center;
            }
            
            .main-container {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="main-container">
        <div class="header">
            <h1>🎓 PLACEHOLDER_LAB_NAME</h1>
            <p>Comprehensive Learning Lab - All Exercises in One View</p>
        </div>
        
        <div class="overview-grid" id="overview">
            <!-- Overview cards will be populated by JavaScript -->
        </div>
        
        <div class="nav-tabs" id="nav-tabs">
            <button class="nav-tab active" onclick="showOverview()">📊 Overview</button>
            <!-- Navigation tabs will be populated by JavaScript -->
        </div>
        
        <div id="exercise-content">
            <!-- Exercise content will be populated by JavaScript -->
        </div>
        
        <div class="footer">
            <p>🚀 Built with modern web technologies</p>
            <p><a href="https://github.com/tatoslover/IOD/tree/main/PLACEHOLDER_LAB_NAME">📂 View Source Code</a> | <a href="https://github.com/tatoslover/IOD">🏠 Back to All Labs</a></p>
        </div>
    </div>

    <script>
        // Lab content configuration
        const labContent = {
            // This will be populated dynamically based on detected files
        };
        
        let currentExercise = 'overview';
        
        function showOverview() {
            document.getElementById('overview').style.display = 'grid';
            document.querySelectorAll('.exercise-container').forEach(container => {
                container.classList.remove('active');
            });
            
            // Update active tab
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            document.querySelector('.nav-tab').classList.add('active');
            currentExercise = 'overview';
        }
        
        function showExercise(exerciseKey) {
            document.getElementById('overview').style.display = 'none';
            document.querySelectorAll('.exercise-container').forEach(container => {
                container.classList.remove('active');
            });
            
            const targetContainer = document.getElementById(exerciseKey);
            if (targetContainer) {
                targetContainer.classList.add('active');
            }
            
            // Update active tab
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');
            currentExercise = exerciseKey;
        }
        
        function runJavaScript(code, outputId) {
            const outputElement = document.getElementById(outputId);
            const originalLog = console.log;
            let output = [];
            
            // Capture console.log output
            console.log = function(...args) {
                output.push(args.map(arg => 
                    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                ).join(' '));
                originalLog.apply(console, args);
            };
            
            try {
                // Clear previous output
                output = [];
                
                // Execute the code
                eval(code);
                
                // Display output
                if (output.length > 0) {
                    outputElement.innerHTML = output.join('<br>');
                } else {
                    outputElement.innerHTML = '✅ Code executed successfully (no console output)';
                }
            } catch (error) {
                outputElement.innerHTML = `❌ Error: ${error.message}`;
            } finally {
                // Restore original console.log
                console.log = originalLog;
            }
        }
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // This will be populated with actual exercise detection
            initializeExercises();
        });
        
        function initializeExercises() {
            // Dynamic initialization will be added based on detected files
            console.log('Lab interface initialized');
        }
    </script>
    
    <!-- Dynamic content injection point -->
    PLACEHOLDER_DYNAMIC_CONTENT
</body>
</html>
EOF

# Now scan for different types of exercises and build content
echo "📋 Scanning for exercises..."

DYNAMIC_CONTENT=""
OVERVIEW_CARDS=""
NAV_TABS=""
EXERCISE_CONTAINERS=""

# Find HTML exercises
for html_file in *.html; do
    if [ -f "$html_file" ] && [ "$html_file" != "index.html" ]; then
        exercise_name=$(basename "$html_file" .html)
        echo "  📄 Found HTML exercise: $exercise_name"
        
        # Add to overview
        OVERVIEW_CARDS="$OVERVIEW_CARDS
            <div class=\"overview-card\" onclick=\"showExercise('$exercise_name')\">
                <h3>📄 $exercise_name</h3>
                <p>Interactive HTML exercise with styling and JavaScript functionality</p>
            </div>"
        
        # Add navigation tab
        NAV_TABS="$NAV_TABS
            <button class=\"nav-tab\" onclick=\"showExercise('$exercise_name')\">📄 $exercise_name</button>"
        
        # Create iframe for HTML content
        EXERCISE_CONTAINERS="$EXERCISE_CONTAINERS
        <div id=\"$exercise_name\" class=\"exercise-container\">
            <div class=\"exercise-header\">
                <div class=\"exercise-title\">📄 $exercise_name</div>
                <div class=\"exercise-type\">HTML/CSS/JS</div>
            </div>
            <div class=\"exercise-content\">
                <iframe src=\"$html_file\" class=\"html-preview\" title=\"$exercise_name Preview\"></iframe>
            </div>
        </div>"
    fi
done

# Find JavaScript exercises
for js_file in *.js; do
    if [ -f "$js_file" ]; then
        exercise_name=$(basename "$js_file" .js)
        echo "  💻 Found JavaScript exercise: $exercise_name"
        
        # Read the JavaScript content
        js_content=$(cat "$js_file")
        
        # Add to overview
        OVERVIEW_CARDS="$OVERVIEW_CARDS
            <div class=\"overview-card\" onclick=\"showExercise('$exercise_name')\">
                <h3>💻 $exercise_name</h3>
                <p>JavaScript programming exercise with functions and logic</p>
            </div>"
        
        # Add navigation tab
        NAV_TABS="$NAV_TABS
            <button class=\"nav-tab\" onclick=\"showExercise('$exercise_name')\">💻 $exercise_name</button>"
        
        # Create interactive JavaScript section
        EXERCISE_CONTAINERS="$EXERCISE_CONTAINERS
        <div id=\"$exercise_name\" class=\"exercise-container\">
            <div class=\"exercise-header\">
                <div class=\"exercise-title\">💻 $exercise_name</div>
                <div class=\"exercise-type\">JavaScript</div>
            </div>
            <div class=\"exercise-content\">
                <div class=\"code-section\">${js_content//</>\&lt;}</div>
                <button class=\"run-button\" onclick=\"runJavaScript(\`${js_content//\`/\\\`}\`, '${exercise_name}-output')\">▶️ Run Code</button>
                <div id=\"${exercise_name}-output\" class=\"js-console\">Click 'Run Code' to execute this JavaScript</div>
            </div>
        </div>"
    fi
done

# Find subdirectory exercises (like Exercise8)
for subdir in */; do
    if [ -d "$subdir" ] && [ "$subdir" != "unified_build/" ]; then
        subdir_name=${subdir%/}
        echo "  📁 Found subdirectory exercise: $subdir_name"
        
        # Check if it has an index.html
        if [ -f "$subdir/index.html" ]; then
            # Copy the subdirectory content
            cp -r "$subdir" "$BUILD_DIR/"
            
            # Add to overview
            OVERVIEW_CARDS="$OVERVIEW_CARDS
                <div class=\"overview-card\" onclick=\"showExercise('$subdir_name')\">
                    <h3>📁 $subdir_name</h3>
                    <p>Complete project with multiple files and advanced functionality</p>
                </div>"
            
            # Add navigation tab
            NAV_TABS="$NAV_TABS
                <button class=\"nav-tab\" onclick=\"showExercise('$subdir_name')\">📁 $subdir_name</button>"
            
            # Create iframe for subdirectory content
            EXERCISE_CONTAINERS="$EXERCISE_CONTAINERS
            <div id=\"$subdir_name\" class=\"exercise-container\">
                <div class=\"exercise-header\">
                    <div class=\"exercise-title\">📁 $subdir_name</div>
                    <div class=\"exercise-type\">Complete Project</div>
                </div>
                <div class=\"exercise-content\">
                    <iframe src=\"$subdir_name/index.html\" class=\"html-preview\" title=\"$subdir_name Preview\"></iframe>
                </div>
            </div>"
        fi
    fi
done

# Replace placeholders in the HTML
sed -i.bak "s/PLACEHOLDER_LAB_NAME/$LAB_NAME/g" "$BUILD_DIR/index.html"
rm "$BUILD_DIR/index.html.bak" 2>/dev/null || true

# Create dynamic content files
cat > "$BUILD_DIR/dynamic_content.js" << EOF
document.addEventListener('DOMContentLoaded', function() {
    // Add navigation tabs
    const navContainer = document.getElementById('nav-tabs');
    navContainer.innerHTML += \`$NAV_TABS\`;
    
    // Add overview cards
    const overviewContainer = document.getElementById('overview');
    overviewContainer.innerHTML = \`$OVERVIEW_CARDS\`;
    
    // Add exercise containers
    const contentContainer = document.getElementById('exercise-content');
    contentContainer.innerHTML = \`$EXERCISE_CONTAINERS\`;
});
EOF

# Replace the placeholder with a script tag
sed -i.bak 's|PLACEHOLDER_DYNAMIC_CONTENT|<script src="dynamic_content.js"></script>|g' "$BUILD_DIR/index.html"
rm "$BUILD_DIR/index.html.bak" 2>/dev/null || true

echo "✅ Unified page created successfully!"

cd "$OLDPWD"

# Deploy to GitHub Pages
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

# Create lab subdirectory and copy unified build
echo "📋 Creating $LAB_NAME unified subdirectory..."
rm -rf "$LAB_NAME"
mkdir -p "$LAB_NAME"
cp -r "$BUILD_DIR/"* "$LAB_NAME"/

# Create or update index.html for root directory
echo "📝 Creating/updating root index.html..."
TEMPLATE_FILE=""
if [ -f "$OLDPWD/Deployment/lab-directory-template.html" ]; then
    TEMPLATE_FILE="$OLDPWD/Deployment/lab-directory-template.html"
elif [ -f "$OLDPWD/lab-directory-template.html" ]; then
    TEMPLATE_FILE="$OLDPWD/lab-directory-template.html"
fi

if [ -n "$TEMPLATE_FILE" ]; then
    cp "$TEMPLATE_FILE" index.html
    echo "✅ Used template from $TEMPLATE_FILE"
else
    echo "⚠️  Creating basic lab directory"
    cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IOD Labs Collection</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 50px; 
               background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
               color: white; min-height: 100vh; }
        .container { max-width: 800px; margin: 0 auto; padding: 40px; 
                    background: rgba(255, 255, 255, 0.1); border-radius: 20px; 
                    backdrop-filter: blur(10px); }
        h1 { font-size: 2.5rem; margin-bottom: 30px; }
        .lab-link { display: block; margin: 15px 0; padding: 15px; 
                   background: rgba(255, 255, 255, 0.2); border-radius: 10px; 
                   text-decoration: none; color: white; }
        .lab-link:hover { background: rgba(255, 255, 255, 0.3); }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎓 IOD Labs Collection</h1>
        <p>Unified deployment - all exercises in comprehensive single-page views</p>
        <p><a href="https://github.com/tatoslover/IOD" style="color: white;">View Repository</a></p>
    </div>
</body>
</html>
EOF
fi

# Add all changes
echo "📤 Committing changes..."
git add .
git commit -m "Deploy $LAB_NAME (unified view) - $(date)" || echo "No changes to commit"

# Push to gh-pages branch
echo "🚀 Pushing to GitHub Pages..."
git push -f origin gh-pages

# Cleanup
cd "$OLDPWD"
rm -rf "$LAB_DIR/unified_build"
rm -rf "$TEMP_DIR"

echo "✅ Unified deployment complete!"
echo "🌐 $LAB_NAME: https://tatoslover.github.io/IOD/$LAB_NAME"
echo "🏠 All Labs: https://tatoslover.github.io/IOD"
echo ""
echo "⏱️  GitHub Pages may take 1-2 minutes to update."
echo ""
echo "🎯 Features created:"
echo "   📊 Overview page with all exercises"
echo "   🎨 Tabbed navigation between exercises"
echo "   🖥️ Live HTML preview iframes"
echo "   💻 Interactive JavaScript execution"
echo "   📱 Responsive design for all devices"