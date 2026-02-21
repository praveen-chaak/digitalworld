# UIKIT Ecommerce Clone (Vite + React)

Multi-page ecommerce SPA inspired by:
https://chekromul.github.io/uikit-ecommerce-template/

## Stack

- Vite + React (JSX)
- Tailwind CSS v4 via `@tailwindcss/vite`
- React Router DOM v6
- Radix UI primitives:
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-tabs`
- `lucide-react`, `clsx`, `tailwind-merge`

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Routes

- `/` Home
- `/catalog` Catalog / Search
- `/category/:slug` Category details
- `/product/:id` Product details
- `/cart` Cart
- `/checkout` Checkout
- `/blog` Blog list
- `/blog/:slug` Blog post
- `/about` About
- `/contacts` Contacts
- `*` Not Found

## Project Structure

- `src/App.jsx` app shell + routes
- `src/context/CartContext.jsx` cart reducer/context with localStorage persistence
- `src/data/*` local dummy data for products/categories/brands/posts
- `src/components/layout/*` topbar, header, footer, mobile nav, cart drawer
- `src/components/ui/*` reusable design system primitives
- `src/components/product/*` product-specific components
- `src/pages/*` all route pages

## Navigation Guide

1. Open Home (`/`) to see hero slider, categories, trending/featured products, brands, blog, about, latest news, newsletter.
2. Open Catalog (`/catalog`) for filtering, sorting, mobile filter dialog, and pagination.
3. Open any product card for Product Details with gallery and tabs.
4. Use header cart icon to open the Radix cart drawer; cart state persists in localStorage.
5. Continue to `/cart` and `/checkout` for full cart and checkout flows.
# Digital-World
