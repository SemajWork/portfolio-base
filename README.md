# Portfolio Base

A modern, professional portfolio website showcasing your work, experience, and skills. Built with React and modern web technologies.

## Tech Stack

- **React** with TypeScript
- **Vite** for fast development and optimized builds
- **CSS** for responsive styling
- **ESLint** for code quality

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

### 1. Clone the Repository
```bash
git clone <your-repo-url>
```

### 2. Install Dependencies
```bash
npm install
```

## Running the App

### Start Development Server
```bash
npm run dev
```

Server runs on `http://localhost:5173`

Then open your browser and navigate to the local URL displayed in your terminal.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## Project Structure

```
portfolio-base/                # Frontend (React + TypeScript)
├── components/               # Reusable components
│   ├── Header.tsx           # Navigation header
│   ├── AboutMe.tsx          # About section
│   ├── Experiences.tsx      # Professional experience
│   ├── Skills.tsx           # Technical skills
│   ├── Projects.tsx         # Portfolio projects
│   └── *.css                # Component styles
├── src/                      # Source files
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React entry point
│   ├── index.css            # Global styles
│   └── assets/              # Images and media
├── public/                   # Static files
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## Usage

1. **Edit Content** - Update component files in `components/` to add your information
2. **Customize Styling** - Modify `.css` files to match your design preferences
3. **Add Assets** - Place images in `src/assets/`
4. **Deploy** - Build and deploy to your preferred hosting platform

## Customization

### Update Component Content

Edit each component to include your own information:

- **Header.tsx** - Update navigation and branding
- **AboutMe.tsx** - Add your bio and introduction
- **Experiences.tsx** - List your professional background
- **Skills.tsx** - Showcase your technical skills
- **Projects.tsx** - Display your portfolio projects

### Styling

Each component has an associated `.css` file. Modify these to customize:
- Colors and typography
- Layout and spacing
- Responsive breakpoints
- Animations and effects

## Development

### Frontend Development
```bash
npm start
```

### Build with Type Checking
```bash
npm run build
```

This runs TypeScript compilation followed by Vite build.

## Troubleshooting

**Issue: "Port 5173 is already in use"**
- Kill the process using that port or specify a different port in vite.config.ts

**Issue: "TypeScript errors during build"**
- Check `tsconfig.json` and fix any type errors reported

**Issue: "Styles not loading"**
- Ensure CSS files are imported in their respective component files

## Deployment

The built application can be deployed to:
- **GitHub Pages** - Free hosting for static sites
- **Vercel** - Optimized for React applications
- **Netlify** - Simple drag-and-drop deployment
- **AWS** - Scalable cloud hosting
- **Any static web server** - Traditional web hosting

Build output is generated in the `dist/` directory.

To Deploy on AWS:

frontend build command: cd portfolio-base && npm install && npm run build 
output directory: portfolio-base/dist/

