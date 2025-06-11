# Flexible IOD Lab Deployment Guide

This guide explains how to deploy any type of IOD lab using the flexible deployment script that auto-detects project types.

## 🚀 Quick Start

```bash
# From IOD root directory
./Deployment/deploy-flexible.sh Module1Lab

# OR from Deployment directory
cd Deployment
./deploy-flexible.sh Module2Lab
```

## 🎯 Supported Project Types

The flexible deployment script automatically detects and handles:

### ⚛️ React Applications
- **Create React App**: Uses `npm run build` → `build/` folder
- **Vite React**: Uses `npm run build` → `dist/` folder
- **Auto-detected by**: `package.json` with `react-scripts` or `vite.config.js`

### 📄 Static HTML/CSS/JS Projects
- **Pure static files**: HTML, CSS, JavaScript, images
- **Organized folders**: Copies Lab1/, Lab2/, src/, assets/, etc.
- **Auto-navigation**: Creates index.html if none exists
- **Auto-detected by**: Presence of `.html` files

### 💻 Pure JavaScript Files
- **Node.js style scripts**: JSFundamentals.js, etc.
- **Interactive wrapper**: Creates HTML interface to run scripts
- **Browser console**: Scripts execute in browser environment
- **Auto-detected by**: `.js` files without `package.json`

### 📦 Static Projects with NPM
- **Testing/tooling**: Projects with package.json but static output
- **Example**: Dice simulator with Jest tests
- **Auto-detected by**: `package.json` + `index.html` present

### 🖥️ Backend Projects (Not Deployed)
- **Node.js/Express**: Server-side applications
- **Graceful skip**: Shows helpful message instead of failing
- **Auto-detected by**: `package.json` with "express" or "server"

## 📋 What Each Deployment Does

### React Apps
```bash
✅ Runs npm run build
✅ Copies build/dist folder to GitHub Pages
✅ Preserves React routing and assets
```

### Static HTML Projects
```bash
✅ Copies all HTML, CSS, JS, image files
✅ Preserves folder structure (Lab1/, Lab2/, etc.)
✅ Creates navigation index.html if missing
✅ Links to GitHub source code
```

### Pure JavaScript Files
```bash
✅ Creates interactive HTML wrapper
✅ Buttons to run each script in browser
✅ View source code functionality
✅ Browser console integration
```

## 🌐 Deployment Results

After deployment, your labs will be available at:
- **All Labs**: https://tatoslover.github.io/IOD
- **Individual Lab**: https://tatoslover.github.io/IOD/ModuleXLab

### Example Outputs

**Module 1Lab** (Static HTML):
- Navigation page with links to Exercise1.html, Exercise2.html
- Preserved folder structure for Lab1/, Lab2/, etc.
- Direct access to dice simulator

**Module 3Lab** (Pure JavaScript):
- Interactive interface with "Run Script" buttons
- JSFundamentals.js, JSIntermediate.js, JSAdvanced.js
- Browser console integration for output

**Module 6Lab** (React):
- Full React application with routing
- Rainbow-themed components and calculator

## 🔧 Usage Examples

### Deploy Different Lab Types
```bash
# Static HTML labs
./deploy-flexible.sh Module1Lab
./deploy-flexible.sh Module2Lab
./deploy-flexible.sh Module4Lab

# Pure JavaScript
./deploy-flexible.sh Module3Lab

# Backend (will show helpful message)
./deploy-flexible.sh Module5Lab  # ❌ Not deployable

# React apps
./deploy-flexible.sh Module6Lab
./deploy-flexible.sh Module7Lab
```

### Check What Will Be Deployed
The script shows detection results:
```bash
🔍 Analyzing Module3Lab project type...
💻 Detected: Pure JavaScript files
💻 Creating HTML wrapper for JavaScript files...
```

## 📁 File Structure Created

### Static HTML Labs
```
ModuleXLab/
├── index.html          # Auto-generated navigation
├── Exercise1.html      # Your original files
├── Exercise2.html
├── Lab1/              # Preserved folders
│   └── ...
└── assets/            # Images, CSS, etc.
```

### Pure JavaScript Labs
```
ModuleXLab/
├── index.html          # Interactive wrapper
├── JSFundamentals.js   # Your original files
├── JSIntermediate.js
└── JSAdvanced.js
```

### React Labs
```
ModuleXLab/
├── index.html          # React build output
├── static/
│   ├── css/
│   └── js/
└── asset-manifest.json
```

## 🎨 Generated Navigation Features

### Static HTML Navigation
- **Auto-discovery**: Finds all HTML files and folders
- **Styled interface**: Modern gradient background
- **GitHub links**: Direct links to source code
- **Responsive design**: Works on mobile and desktop

### JavaScript Interface
- **Run buttons**: Execute scripts in browser console
- **View source**: Display code in readable format
- **Output areas**: Show execution status
- **Console integration**: F12 to see detailed output

## 🛠️ Troubleshooting

### Script Not Running
```bash
# Make executable
chmod +x Deployment/deploy-flexible.sh

# Check if in correct directory
pwd  # Should be IOD/ or IOD/Deployment/
```

### Wrong Project Type Detected
The script uses this detection logic:
1. `package.json` + `react-scripts` → React CRA
2. `package.json` + `vite.config.js` → React Vite  
3. `package.json` + `express` → Backend (skip)
4. `package.json` + `index.html` → Static with NPM
5. `.html` files present → Static HTML
6. `.js` files only → Pure JavaScript

### Build Failures
```bash
# For React apps - check dependencies
cd ModuleXLab
npm install
npm run build

# For static projects - check file permissions
ls -la ModuleXLab/
```

### Missing Files in Deployment
The script copies these file types:
- **HTML**: `*.html`
- **Styles**: `*.css`  
- **Scripts**: `*.js`
- **Images**: `*.png`, `*.jpg`, `*.jpeg`, `*.gif`, `*.svg`
- **Folders**: Lab1/, Lab2/, src/, assets/, images/, css/, js/

## 💡 Best Practices

### For Static HTML Labs
- Use meaningful filenames: `Exercise1.html`, not `ex1.html`
- Organize in folders: `Lab1/`, `Lab2/` for better navigation
- Include a main `index.html` if you want custom navigation

### For JavaScript Labs  
- Use descriptive names: `JSFundamentals.js`
- Add console.log() statements for visible output
- Consider adding comments explaining what each script does

### For React Labs
- Set correct `homepage` in package.json:
  ```json
  "homepage": "https://tatoslover.github.io/IOD/ModuleXLab"
  ```
- Test builds locally: `npm run build`

## 🔄 Updating Labs

After making changes to any lab:

1. **Test locally** (if applicable):
   ```bash
   # For React apps
   cd ModuleXLab && npm start
   
   # For static files
   open ModuleXLab/index.html
   ```

2. **Redeploy**:
   ```bash
   ./Deployment/deploy-flexible.sh ModuleXLab
   ```

3. **Verify deployment**:
   - Check https://tatoslover.github.io/IOD/ModuleXLab
   - GitHub Pages updates in 1-2 minutes

## 🎯 Learning Objectives Preserved

This flexible approach preserves your original learning journey:

- **Module 1**: HTML/CSS fundamentals → Static deployment
- **Module 2**: Responsive design → Static with navigation  
- **Module 3**: JavaScript basics → Interactive browser interface
- **Module 4**: DOM manipulation → Static HTML preserved
- **Module 5**: Backend/Express → Documented (not deployed)
- **Module 6**: React fundamentals → Full React app
- **Module 7**: Advanced React → Vite-built React app

Each lab maintains its original technology stack and educational value while becoming web-accessible.

---

**Happy Deploying! 🚀**

*This flexible script honors your learning progression while making everything deployable.*