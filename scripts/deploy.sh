#!/bin/bash

# Deploy script for resume-site
# Commits changes and pushes to GitHub for Vercel deployment

set -e

echo "Deploying resume-site..."

# Stage all changes
git add -A

# Commit changes
git commit -m "Update: Reorganize resume into multi-page structure" || echo "No changes to commit"

# Push to the current branch
git push origin HEAD

echo "✓ Changes pushed to GitHub!"
echo "✓ Vercel deployment triggered automatically"
