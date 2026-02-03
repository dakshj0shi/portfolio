#!/bin/bash

# Script to push portfolio changes to GitHub
# Repository: https://github.com/dakshj0shi/portfolio

echo "=== Portfolio GitHub Push Script ==="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git remote add origin https://github.com/dakshj0shi/portfolio.git
else
    echo "Git repository already initialized."
    # Make sure remote is set correctly
    git remote set-url origin https://github.com/dakshj0shi/portfolio.git 2>/dev/null || \
    git remote add origin https://github.com/dakshj0shi/portfolio.git 2>/dev/null
fi

echo ""
echo "Checking git configuration..."
if [ -z "$(git config user.name)" ]; then
    echo "Setting git user name..."
    git config user.name "Daksh Joshi"
fi

if [ -z "$(git config user.email)" ]; then
    echo "Setting git user email..."
    git config user.email "dakshj0shi@users.noreply.github.com"
fi

echo ""
echo "Current git status:"
git status --short

echo ""
echo "Adding all changes..."
git add .

echo ""
echo "Creating commit..."
git commit -m "Fix PixelBlast prop name and update portfolio changes" || echo "Nothing to commit or commit failed"

echo ""
echo "Current branch:"
git branch --show-current || echo "No branch yet"

echo ""
echo "Setting branch to main..."
git branch -M main

echo ""
echo "=== Ready to push to GitHub ==="
echo "Repository: https://github.com/dakshj0shi/portfolio"
echo ""
echo "To push your changes, you'll need to authenticate with GitHub."
echo "You have several options:"
echo ""
echo "1. GitHub CLI (recommended):"
echo "   gh auth login"
echo "   Then run: git push -u origin main"
echo ""
echo "2. Personal Access Token:"
echo "   - Go to: https://github.com/settings/tokens"
echo "   - Generate a new token with 'repo' permissions"
echo "   - When prompted for password, use the token"
echo "   Then run: git push -u origin main"
echo ""
echo "3. SSH Key:"
echo "   - Set up SSH key: https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
echo "   - Change remote to SSH: git remote set-url origin git@github.com:dakshj0shi/portfolio.git"
echo "   Then run: git push -u origin main"
echo ""
echo "Would you like to try pushing now? (You may be prompted for credentials)"
read -p "Press Enter to attempt push, or Ctrl+C to cancel..."

echo ""
echo "Attempting to push to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "View your repository at: https://github.com/dakshj0shi/portfolio"
else
    echo ""
    echo "❌ Push failed. Please set up authentication using one of the methods above."
    echo "After setting up authentication, run: git push -u origin main"
fi
