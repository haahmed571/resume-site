import { execSync } from 'child_process';

try {
  console.log('Deploying resume-site...');
  
  // Stage all changes
  execSync('git add -A', { stdio: 'inherit' });
  
  // Commit changes
  try {
    execSync('git commit -m "Update: Reorganize resume into multi-page structure"', { stdio: 'inherit' });
  } catch {
    console.log('No changes to commit');
  }
  
  // Push to the current branch
  execSync('git push origin HEAD', { stdio: 'inherit' });
  
  console.log('✓ Changes pushed to GitHub!');
  console.log('✓ Vercel deployment triggered automatically');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}
