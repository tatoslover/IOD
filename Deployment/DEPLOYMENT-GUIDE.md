# IOD Labs Deployment Guide

This guide explains how to deploy your IOD labs to GitHub Pages using the automated deployment script.

## 📁 Script Location

The deployment script is located at: `IOD/Deployment/deploy-lab.sh`

## 🚀 Quick Start

### Deploy a Lab

```bash
# From the IOD root directory
./Deployment/deploy-lab.sh Module6Lab

# OR from the Deployment directory
cd Deployment
./deploy-lab.sh Module6Lab
```

### First Time Setup

1. **Install GitHub CLI** (if not already installed):
   ```bash
   brew install gh
   ```

2. **Authenticate with GitHub**:
   ```bash
   gh auth login
   gh config set git_protocol https
   gh auth setup-git
   ```

3. **Make script executable** (if needed):
   ```bash
   chmod +x Deployment/deploy-lab.sh
   ```

## 📋 Usage Examples

```bash
# Deploy Module 6 Lab (from IOD root)
./Deployment/deploy-lab.sh Module6Lab

# Deploy Module 7 Lab (when ready)
./Deployment/deploy-lab.sh Module7Lab

# Deploy any lab
./Deployment/deploy-lab.sh <lab-directory-name>

# OR from Deployment directory
cd Deployment
./deploy-lab.sh Module6Lab
```

## 🏗️ What the Script Does

1. **Validates** the lab directory exists
2. **Builds** the React app (`npm run build`)
3. **Clones** existing gh-pages branch (preserves other labs)
4. **Creates** subdirectory structure for the lab
5. **Updates** the main lab directory listing
6. **Deploys** to GitHub Pages

## 🌐 Resulting URLs

After deployment, your labs will be available at:

- **All Labs Directory**: https://tatoslover.github.io/IOD
- **Individual Lab**: https://tatoslover.github.io/IOD/ModuleXLab

## 📝 Updating the Lab Directory

To add or modify labs in the main directory listing:

1. **Edit the template file**:
   ```bash
   nano Deployment/lab-directory-template.html
   ```

2. **Update lab information in the template**:
   - Change descriptions
   - Update status (Coming Soon → Live)
   - Enable/disable links
   - Add new labs

3. **Redeploy** any lab to update the directory

## 🔧 Lab Directory Structure

The script creates this structure on the `gh-pages` branch:

```
gh-pages branch:
├── index.html                    # Main lab directory
├── Module6Lab/                   # React app subdirectory
│   ├── index.html
│   ├── static/
│   │   ├── css/
│   │   └── js/
│   └── asset-manifest.json
├── Module7Lab/                   # Future lab
└── Module8Lab/                   # Future lab
```

## 📊 Lab Status Types

In the main directory, labs can have different statuses:

- **✅ Live** - Fully deployed React app
- **📁 Static Files** - HTML/CSS/JS without build process
- **🖥️ Backend Only** - Server-side code (no frontend)
- **🚧 Coming Soon** - Not yet implemented

## 🔗 Link Types

Each lab card includes three types of links:

1. **📂 GitHub** - Source code repository
2. **📖 README** - Documentation
3. **🌐 Live Demo** - Deployed application

## 🛠️ Troubleshooting

### Authentication Issues
```bash
# Refresh GitHub CLI authentication
gh auth refresh
gh auth setup-git
```

### Build Failures
```bash
# Check if package.json exists
ls Module6Lab/package.json

# Verify npm is working
cd Module6Lab && npm install
```

### Permission Errors
```bash
# Make script executable
chmod +x Deployment/deploy-lab.sh

# Check GitHub repository permissions
gh repo view tatoslover/IOD
```

### Lab Directory Not Found
```bash
# List available labs
ls -d Module*Lab

# Create new lab directory (example)
mkdir Module7Lab
```

## 🎯 Requirements for Deployable Labs

For a lab to be deployable with this script:

1. **Directory Structure**:
   ```
   ModuleXLab/
   ├── package.json          # With "homepage" field
   ├── src/
   ├── public/
   └── build/ (generated)
   ```

2. **Package.json Requirements**:
   ```json
   {
     "homepage": "https://tatoslover.github.io/IOD/ModuleXLab",
     "scripts": {
       "build": "react-scripts build"
     }
   }
   ```

3. **Working Build Process**:
   ```bash
   cd ModuleXLab
   npm install
   npm run build  # Should succeed
   ```

## 📝 Adding a New Lab

### 1. Create Lab Structure
```bash
# Create new lab directory
mkdir Module7Lab
cd Module7Lab

# Initialize React app or copy structure
# ... (develop your lab)
```

### 2. Configure Package.json
```json
{
  "homepage": "https://tatoslover.github.io/IOD/Module7Lab"
}
```

### 3. Update Lab Directory Template
Edit `Deployment/lab-directory-template.html` to:
- Change status from "Coming Soon" to "Live"
- Enable GitHub and README links
- Add specific lab description

### 4. Deploy
```bash
# From IOD root directory
./Deployment/deploy-lab.sh Module7Lab
```

## 🔄 Maintenance

### Regular Tasks
- Update lab descriptions as you complete exercises
- Enable links when labs are ready
- Keep the main directory current with course progress

### Backup Strategy
- All source code is in the `main` branch
- Deployed sites are in the `gh-pages` branch
- GitHub maintains full history of both

## 💡 Tips

- **Test locally** before deploying: `npm start`
- **Check builds** work: `npm run build`
- **Update READMEs** for better documentation
- **Use meaningful commit messages** in your labs
- **Keep the main directory updated** by editing `Deployment/lab-directory-template.html`
- **All deployment files** are now organized in the `Deployment/` folder

---

**Happy Deploying! 🚀**

For questions or issues, check the main IOD repository or GitHub Pages documentation.