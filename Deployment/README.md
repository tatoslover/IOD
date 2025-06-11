# Deployment Folder

This folder contains all the files needed to deploy your IOD labs to GitHub Pages.

## 📁 Files Overview

### Core Files

- **`deploy-flexible.sh`** - **RECOMMENDED**: Auto-detects project types (React, HTML, JS)
- **`deploy-lab.sh`** - React-only deployment script
- **`lab-directory-template.html`** - HTML template for the main lab directory page
- **`DEPLOYMENT-GUIDE.md`** - Complete React deployment documentation
- **`FLEXIBLE-DEPLOYMENT.md`** - Guide for flexible deployment of all project types
- **`QUICK-REFERENCE.md`** - Quick reference guide for common deployment tasks

## 🚀 Quick Start

### Deploy a Lab

```bash
# Flexible deployment (auto-detects project type) - RECOMMENDED
./Deployment/deploy-flexible.sh Module1Lab

# React-only deployment (Module 6+)
./Deployment/deploy-lab.sh Module6Lab

# OR from this Deployment folder
./deploy-flexible.sh Module3Lab
./deploy-lab.sh Module6Lab
```

### Edit Lab Directory

```bash
# Edit the main lab directory page
nano lab-directory-template.html

# Then redeploy any lab to update the directory
./deploy-flexible.sh Module1Lab
```

## 📋 What Each File Does

### `deploy-flexible.sh` ⭐ RECOMMENDED
- **Auto-detects project types**: React, Static HTML, Pure JavaScript
- **React apps**: Handles both Create React App and Vite
- **Static HTML**: Copies files and creates navigation
- **Pure JavaScript**: Creates interactive browser interface
- **Backend projects**: Shows helpful skip message
- **Preserves learning objectives**: Each lab keeps its original technology

### `deploy-lab.sh`
- **React-only**: Builds React applications (`npm run build`)
- Manages GitHub Pages branch structure
- Preserves existing labs when deploying new ones
- Updates the main lab directory automatically
- Handles all git operations for deployment

### `lab-directory-template.html`
- Template for the main landing page at https://tatoslover.github.io/IOD
- Contains styled cards for each lab with status indicators
- Links to GitHub repos, READMEs, and live demos
- Responsive design with modern styling

### `DEPLOYMENT-GUIDE.md`
- Complete setup instructions for React deployment
- Detailed explanation of the React deployment process
- Troubleshooting guide for React build issues
- Examples of how to add new React labs

### `FLEXIBLE-DEPLOYMENT.md` ⭐ NEW
- **Complete guide for all project types**
- Auto-detection explanation and examples
- How each lab type gets deployed
- Preserves original learning objectives

### `QUICK-REFERENCE.md`
- Condensed commands for experienced users
- Quick workflows for common tasks
- Status badge and link management
- Template for adding new lab cards

## 🎯 Common Workflows

### First-Time Setup
1. Read `FLEXIBLE-DEPLOYMENT.md` (for all labs) or `DEPLOYMENT-GUIDE.md` (React only)
2. Install GitHub CLI and authenticate
3. Make scripts executable: `chmod +x deploy-flexible.sh deploy-lab.sh`
4. Deploy your first lab

### Regular Development
1. Code changes in any lab → test locally
2. Deploy: `./deploy-flexible.sh ModuleXLab` (recommended for all)
3. Update lab directory as needed by editing `lab-directory-template.html`

### Deployment Options
**For any lab type (recommended):**
```bash
./deploy-flexible.sh Module1Lab  # Static HTML
./deploy-flexible.sh Module3Lab  # Pure JavaScript  
./deploy-flexible.sh Module6Lab  # React
```

**For React labs only:**
```bash  
./deploy-lab.sh Module6Lab      # React with CRA
./deploy-lab.sh Module7Lab      # React with Vite
```

## 🌐 Result

All labs are deployed to: https://tatoslover.github.io/IOD

Individual labs at: https://tatoslover.github.io/IOD/ModuleXLab

## 💡 Tips

- **Use `deploy-flexible.sh`** - it handles all project types automatically
- The deployment scripts automatically handle the gh-pages branch
- You can deploy multiple labs - each gets its own subdirectory
- The main directory page updates automatically with each deployment
- All source code stays in the main branch, deployments go to gh-pages
- **Each lab preserves its original learning objectives and technology stack**

---

**Happy Deploying! 🚀**