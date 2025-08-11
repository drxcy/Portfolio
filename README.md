# Web Sync - React Application

A modern React application built with Vite, TypeScript, and shadcn/ui components.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_REPOSITORY_URL>
cd web-sync
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

This project is built with:

- **React 19** - Latest React with new features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **shadcn/ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Static assets
```

## Development

The project uses:
- **ESLint** for code linting
- **TypeScript** for type checking
- **Vite** for fast development and building

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.
