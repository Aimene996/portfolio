# Deployment Script for Portfolio
# This script helps you push to GitHub and deploy on Vercel

Write-Host "🚀 Portfolio Deployment Helper" -ForegroundColor Cyan
Write-Host ""

# Check if remote exists
$remote = git remote -v
if ([string]::IsNullOrEmpty($remote)) {
    Write-Host "⚠️  No GitHub remote found!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📝 Steps to deploy:" -ForegroundColor Green
    Write-Host ""
    Write-Host "1. Create a new repository on GitHub:" -ForegroundColor White
    Write-Host "   - Go to: https://github.com/new" -ForegroundColor Gray
    Write-Host "   - Repository name: my-portfolio (or your choice)" -ForegroundColor Gray
    Write-Host "   - Make it PUBLIC (required for free Vercel)" -ForegroundColor Gray
    Write-Host "   - DON'T initialize with README" -ForegroundColor Gray
    Write-Host ""
    Write-Host "2. After creating the repo, run these commands:" -ForegroundColor White
    Write-Host ""
    Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git" -ForegroundColor Cyan
    Write-Host "   git branch -M main" -ForegroundColor Cyan
    Write-Host "   git push -u origin main" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "3. Then deploy on Vercel:" -ForegroundColor White
    Write-Host "   - Go to: https://vercel.com" -ForegroundColor Gray
    Write-Host "   - Sign up with GitHub" -ForegroundColor Gray
    Write-Host "   - Click 'New Project'" -ForegroundColor Gray
    Write-Host "   - Import your repository" -ForegroundColor Gray
    Write-Host "   - Click 'Deploy' (auto-detects Next.js)" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host "✅ Remote found!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Current branch: $(git branch --show-current)" -ForegroundColor White
    Write-Host ""
    Write-Host "To push to GitHub, run:" -ForegroundColor Yellow
    Write-Host "  git push -u origin main" -ForegroundColor Cyan
    Write-Host ""
}

Write-Host "✨ Your portfolio is ready to deploy!" -ForegroundColor Green

