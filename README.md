Therapist Discovery App

## Setup instructions

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load new font family for Vercel.

## Architecture / Design Decisions

- Built using React.js with Next.js, Tailwind CSS, Context API
- Filters use React Context to manage global state
- Therapist availability dynamically controls calendar date selection
- Use of loading wireframe "skeletons" as placeholder/fallback and loading spinners to indicate to users that the content is loading

## Known Issues or Limitations

- Time zone selection not yet supported
- No real backend: form data is not stored
- Dark mode theme not functional
