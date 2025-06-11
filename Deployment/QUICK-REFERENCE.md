# IOD Labs Quick Reference Guide

## 🚀 Deployment Commands

```bash
# Deploy any lab (from IOD root directory)
./Deployment/deploy-lab.sh Module6Lab
./Deployment/deploy-lab.sh Module7Lab

# OR from Deployment directory
cd Deployment
./deploy-lab.sh Module6Lab

# Make script executable (if needed)
chmod +x Deployment/deploy-lab.sh
```

## 📝 Editing the Lab Directory

### Easy Way: Edit Template File
```bash
# Edit the main lab directory page
nano Deployment/lab-directory-template.html

# Then redeploy any lab to update
./Deployment/deploy-lab.sh Module6Lab
```

### What to Update in Template:
- **Lab descriptions** - Update text content in `Deployment/lab-directory-template.html`
- **Status badges** - Change classes: `coming-soon`, `deployed`, `static-files`, `backend-only`
- **Enable/disable links** - Add/remove `disabled` class
- **Add new labs** - Copy existing lab card and modify

## 🌐 Live URLs

- **All Labs**: https://tatoslover.github.io/IOD
- **Module6Lab**: https://tatoslover.github.io/IOD/Module6Lab

## 📋 Status Badge Classes

```html
<span class="status deployed">✅ Live</span>
<span class="status coming-soon">🚧 Coming Soon</span>
<span class="status static-files">📁 Static Files</span>
<span class="status backend-only">🖥️ Backend Only</span>
```

## 🔗 Link States

```html
<!-- Active link -->
<a href="./Module6Lab/" class="lab-link">🌐 Live Demo</a>

<!-- Disabled link -->
<a href="#" class="lab-link disabled">🌐 Website</a>
```

## 🛠️ When to Redeploy

✅ **Need to redeploy:**
- Code changes in any lab
- Updates to lab directory (template file)
- New labs added
- Status changes (Coming Soon → Live)

❌ **Don't need to redeploy:**
- README changes (they link directly to GitHub)
- Source code comments
- Local development changes

## 📁 File Locations

- **Deployment Script**: `IOD/Deployment/deploy-lab.sh`
- **Lab Directory Template**: `IOD/Deployment/lab-directory-template.html`
- **Deployment Guide**: `IOD/Deployment/DEPLOYMENT-GUIDE.md`
- **This Reference**: `IOD/Deployment/QUICK-REFERENCE.md`

## ⚡ Quick Workflow

1. **Code changes** → Test locally with `npm start`
2. **Edit lab directory** → Update `Deployment/lab-directory-template.html`
3. **Deploy** → Run `./Deployment/deploy-lab.sh ModuleXLab` (from IOD root)
4. **Verify** → Check live site in 1-2 minutes

## 🆘 Troubleshooting

```bash
# Authentication issues
gh auth refresh
gh auth setup-git

# Script permission issues
chmod +x deploy-lab.sh

# Build issues
cd ModuleXLab
npm install
npm run build

# Check available labs
ls -d Module*Lab
```

## 📝 Adding New Lab Example

1. **Create lab directory** with React app
2. **Set homepage** in package.json:
   ```json
   "homepage": "https://tatoslover.github.io/IOD/Module7Lab"
   ```
2. **Copy lab card** in `Deployment/lab-directory-template.html`
4. **Update links and status**
5. **Deploy**: `./Deployment/deploy-lab.sh Module7Lab`

## 🎯 Lab Card Template

```html
<!-- Module X Lab -->
<div class="lab-card">
    <div class="lab-header">
        <div class="lab-title">Module X Lab</div>
        <div class="lab-number">Lab X</div>
    </div>
    <div class="lab-description">
        Description of what this lab covers...
    </div>
    <div class="lab-links">
        <a href="https://github.com/tatoslover/IOD/tree/main/ModuleXLab" class="lab-link">
            📂 GitHub
        </a>
        <a href="https://github.com/tatoslover/IOD/blob/main/ModuleXLab/README.md" class="lab-link">
            📖 README
        </a>
        <a href="./ModuleXLab/" class="lab-link">
            🌐 Live Demo
        </a>
    </div>
    <span class="status deployed">✅ Live</span>
</div>
```

---

**Happy Coding! 🚀**