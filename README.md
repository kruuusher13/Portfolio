# Romir Malik - Data Science Portfolio

A minimalist, terminal-themed portfolio website featuring interactive D3.js visualizations and React.

## 🚀 Deployment Instructions for GitHub Pages

Since this project is built with React (Vite/CRA), you will need to build the project and deploy the static files to the `gh-pages` branch.

### Prerequisites
- Node.js installed
- A GitHub account and repository created
- Git installed on your machine

### Step 1: Initialize Git and Push Code

```bash
# Initialize git in your project folder
git init

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/kruuusher13/your-repo-name.git

# Stage and commit all files
git add .
git commit -m "Initial commit"

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Configure `package.json`

Open your `package.json` file and add the `homepage` field at the top level. Replace `kruuusher13` and `repo-name` with your details.

```json
{
  "name": "portfolio",
  "homepage": "https://kruuusher13.github.io/repo-name",
  "version": "1.0.0",
  ...
}
```

Then, add the deployment scripts to the `scripts` section:

```json
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"  // Use 'build' instead of 'dist' if using Create React App
}
```

### Step 3: Install `gh-pages`

Install the helper package that handles deployment:

```bash
npm install gh-pages --save-dev
```

### Step 4: Deploy

Run the deploy command. This will build your application and push the `dist` (or `build`) folder to a `gh-pages` branch on your repository.

```bash
npm run deploy
```

### Step 5: GitHub Settings

1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages**.
3. Under **Source**, ensure it is set to **Deploy from a branch**.
4. Select the `gh-pages` branch and `/ (root)` folder.
5. Click **Save**.

Your site should now be live at the link you configured in `homepage`!

## 🛠 Tech Stack
- **React**: UI Framework
- **Tailwind CSS**: Styling
- **D3.js**: Force-directed graph visualization
- **Lucide React**: Icons

## 🎨 Theme
The "Terminal Green" aesthetic is defined in `tailwind.config` inside `index.html`. 
- **Primary**: `#22c55e` (Terminal Green)
- **Background**: `#050a05` (Space Black)
- **Font**: Fira Code (Monospace)
