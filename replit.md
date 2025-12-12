# Portfolio Project

## Overview
This is a Next.js 14 portfolio website featuring 3D graphics, animations, and modern UI components. The project was migrated from Vercel to Replit on November 13, 2025.

## Purpose
A personal portfolio website showcasing projects, skills, and experience with interactive 3D elements and smooth animations.

## Tech Stack
- **Framework**: Next.js 14.1.4
- **UI Library**: React 18
- **Styling**: Tailwind CSS with animations
- **3D Graphics**: Three.js with React Three Fiber and Drei
- **Animations**: Framer Motion, React Lottie
- **Icons**: Tabler Icons, React Icons, Lucide React
- **Monitoring**: Sentry
- **Language**: TypeScript

## Project Structure
- `/app` - Next.js app directory with pages and API routes
- `/components` - Reusable React components
- `/data` - Static data files
- `/lib` - Utility functions and helpers
- `/public` - Static assets (images, SVGs)

## Recent Changes (November 13, 2025)
- **Vercel to Replit Migration**: Adapted project for Replit environment
- **Port Configuration**: Updated dev and start scripts to bind to 0.0.0.0:5000
- **Security Enhancement**: Moved hardcoded Sentry DSN to environment variables
- **Deployment Config**: Set up autoscale deployment for production
- **Removed Vercel Deploy Script**: Cleaned up package.json

## Environment Variables
Required environment variables for production:
- `SENTRY_DSN` - Server-side Sentry DSN (optional, for error monitoring)
- `NEXT_PUBLIC_SENTRY_DSN` - Client-side Sentry DSN (optional, for error monitoring)

## Development
To run the development server:
```bash
npm run dev
```
The app will be available at port 5000.

## Production Deployment
The project is configured for Replit's autoscale deployment:
- **Build**: `npm run build`
- **Start**: `npm run start` (production server on port 5000)

## User Preferences
None specified yet.

## Architecture Decisions
- Uses Next.js App Router (app directory)
- Sentry integration for error monitoring and performance tracking
- Client/server separation for Sentry configuration
- Environment-based configuration for secrets
