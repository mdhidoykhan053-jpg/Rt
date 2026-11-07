# RT - Next.js Application with Vercel Analytics

A Next.js application with Vercel Web Analytics integration.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Vercel Web Analytics integrated
- ✅ API Routes (Engine API at `/api/engine`)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Vercel Analytics

This project includes Vercel Web Analytics for tracking page views and performance metrics.

### How it works

The `@vercel/analytics` package is installed and the `<Analytics />` component is added to the root layout (`app/layout.tsx`). This enables automatic tracking of:

- Page views
- Web vitals
- User interactions

### Viewing Analytics

To view analytics data:

1. Deploy your application to Vercel
2. Navigate to your project's Analytics section in the Vercel dashboard
3. Enable Web Analytics if not already enabled

Analytics will automatically start collecting data once the application is deployed to Vercel.

## API Routes

### Engine API

- **Endpoint:** `/api/engine`
- **Method:** `GET`
- **Response:** `{ status: 'running' }`

The API includes CORS headers configured for cross-origin requests.

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── engine/
│   │       └── route.ts      # Engine API route
│   ├── layout.tsx            # Root layout with Analytics
│   └── page.tsx              # Home page
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## License

MIT
