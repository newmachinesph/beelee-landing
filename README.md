# BeeLee Landing

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg) ![Next.js 16](https://img.shields.io/badge/Next.js-16-black) ![React 19](https://img.shields.io/badge/React-19-61dafb) ![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4-38bdf8) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)

Marketing website for BeeLee, a platform concept for Filipino sari-sari stores (inventory, POS, digital utang ledger and community features). It is a static-content Next.js site with pages for products, brands, stores, blog, careers, contact and download.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
npm run lint
```

## Structure

- `app/` - App Router pages (`about`, `blog`, `careers`, `contact`, `download`, `for-brands`, `for-stores`, `products`) and shared components
- `app/lib/products.ts` - product data
- `public/` - logo and images

## License

MIT - see [LICENSE](LICENSE). Image assets in `public/images` are included for demonstration; check their provenance before reuse.
