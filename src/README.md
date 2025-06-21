# The Token Epoch - Interactive Website

An interactive visualization website for Xuchen Yao's article "The Token Epoch: Rethinking Economics of AI Labor from Man-Days to Mega-Token-Hours".

## 🌟 Features

- **Interactive Timeline**: Evolution from Horsepower → Man-Days → MTH with animated transitions
- **Cost Calculator**: Real-time comparison of traditional services vs AI equivalents
- **Token Economy Dashboard**: Live metrics for token capacity, speed, and pricing
- **Network Evolution Comparison**: 2G→5G vs 2T→5T progression visualization
- **Infrastructure Scale Visualization**: Massive requirements for 1 TT/s processing
- **Energy Flow Infographic**: Electricity → Intelligence conversion with environmental impact
- **Usage Planning Tool**: Interactive token budget planner for individuals and enterprises
- **Future Scenarios Explorer**: Societal implications of 1 TT/s world
- **Full Article Content**: Complete markdown rendering with properly formatted tables

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **pnpm** (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/xuchen/xuchen.github.io.git
cd xuchen.github.io

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev

# The website will be available at http://localhost:5173
```

### Build for Production

```bash
# Build the project
npm run build
# or
pnpm build

# Preview the production build locally
npm run preview
# or
pnpm preview
```

## 📦 Deployment

### GitHub Pages Deployment

This website is optimized for GitHub Pages deployment. Follow these steps:

#### Method 1: Manual Deployment

1. **Build the project**:
   ```bash
   cd src
   npm run build
   ```

2. **Copy dist contents**:
   ```bash
   # Copy everything from dist/ to your GitHub Pages repository root
   /bin/cp -rf dist/*  /path/to/xuchen.github.io/
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Deploy Token Epoch website"
   git push origin main
   ```

#### Method 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Method 3: Direct File Upload

1. Build the project locally
2. Upload all files from `dist/` folder to your GitHub repository
3. Enable GitHub Pages in repository settings
4. Set source to "Deploy from a branch" and select the main branch

### Custom Domain Setup

If deploying to a custom domain:

1. **Add CNAME file** to `public/` directory:
   ```bash
   echo "your-domain.com" > public/CNAME
   ```

2. **Update base URL** in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/', // for custom domain
     // base: '/repository-name/', // for GitHub Pages subdirectory
   })
   ```

## 🛠️ Development Guide

### Project Structure

```
token-epoch/
├── public/
│   ├── data/
│   │   ├── article_content.md      # Full article in markdown
│   │   ├── visualization_data.json # Data for visualizations
│   │   └── visualization_concepts.json
│   └── images/                     # Website images
├── src/
│   ├── components/
│   │   ├── ArticleContent.tsx      # Article rendering with tables
│   │   ├── CostCalculator.tsx      # Interactive cost calculator
│   │   ├── TokenDashboard.tsx      # Token metrics dashboard
│   │   ├── InteractiveTimeline.tsx # Evolution timeline
│   │   └── ...                     # Other components
│   ├── App.tsx                     # Main application
│   └── main.tsx                    # Entry point
├── dist/                           # Production build output
├── package.json
├── vite.config.ts
└── README.md
```

### Key Technologies

- **React 18.3** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animations
- **React Markdown** - Markdown rendering with table support
- **Remark GFM** - GitHub Flavored Markdown (tables, etc.)
- **Recharts** - Data visualization charts

### Adding New Visualizations

1. Create a new component in `src/components/`
2. Import and add to `App.tsx`
3. Update navigation in `Navigation.tsx`
4. Add data to `public/data/visualization_data.json` if needed

### Updating Article Content

1. Edit `public/data/article_content.md`
2. The ArticleContent component will automatically render:
   - Proper markdown tables
   - Syntax highlighting
   - Responsive layout
   - Expandable sections

### Customizing Styling

- **Global styles**: `src/index.css`
- **Component styles**: Tailwind classes in components
- **Table styling**: Customized in ArticleContent.tsx
- **Color scheme**: Modify Tailwind config in `tailwind.config.js`

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
VITE_BASE_URL=http://localhost:5173
VITE_ANALYTICS_ID=your-analytics-id
```

### Vite Configuration

Key settings in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/xuchen.github.io/', // Adjust for your deployment
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 5173,
    host: true,
  }
})
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚨 Troubleshooting

### Common Issues

1. **Build fails**: Ensure Node.js 18+ and clean `node_modules`:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Images not loading**: Check image paths in `public/images/`

3. **Tables not rendering**: Verify markdown syntax in article_content.md

4. **GitHub Pages 404**: Check base URL in vite.config.ts

5. **Styling issues**: Clear browser cache and rebuild

### Performance Optimization

- Images are optimized for web
- Code splitting enabled
- Lazy loading for heavy components
- Responsive images with proper sizes

## 📄 License

This project is open source. The article content is authored by Xuchen Yao.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical issues or questions:

- Create an issue in the GitHub repository
- Check the troubleshooting section above
- Review the configuration settings

---

**Built with ❤️ for the Token Epoch**

Last updated: 2025-06-22
