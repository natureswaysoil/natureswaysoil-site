# Nature's Way Soil Website

A modern Next.js e-commerce website for Nature's Way Soil, featuring organic soil & lawn products.

![Website Preview](https://github.com/user-attachments/assets/1cdc82cb-b9e2-47bd-b83f-4a49ff2c5ad1)

## Features

- Modern React/Next.js application with App Router
- Responsive design with clean, professional styling
- Navigation for Products, Cart, and Chat functionality
- Optimized for Vercel deployment
- TypeScript support
- ESLint configuration for code quality

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/natureswaysoil/natureswaysoil-site.git
cd natureswaysoil-site
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

```bash
npm run build
```

## Deployment to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/). 

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/natureswaysoil/natureswaysoil-site)

### Manual Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Vercel Configuration

The project includes:
- `vercel.json` - Vercel deployment configuration
- `next.config.js` - Next.js optimization settings
- Proper build scripts for Vercel's deployment process

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout component
│   └── page.tsx           # Homepage component
├── next.config.js         # Next.js configuration
├── vercel.json           # Vercel deployment settings
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Framework**: Next.js 14.2.28 with App Router
- **Language**: TypeScript
- **Styling**: Inline styles (can be extended with Tailwind CSS)
- **Deployment**: Vercel
- **Development**: ESLint, Prettier

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## License

This project is private and proprietary to Nature's Way Soil.