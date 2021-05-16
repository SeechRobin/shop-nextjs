The goal was to build a simple but optimized skeleton listing page in 2 hours and deploy it using the tech listed below.

## Tech choices

[Next.js](https://nextjs.org/) - Makes it easy to build blazingly fast perfomant websites, with accesibility and SEO in mind.

[Chakra UI](https://chakra-ui.com/) - Simple Accesible component library that enabled to get started quickly and achive the goal.

[Vercel Platform](https://vercel.com/) - For quick deployments, previews and get some analytics.

## How to run the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/search](http://localhost:3000/search) with your browser to see the result.

The project is alo available on this [link](https://shop-nextjs-psi.vercel.app/search)

## Improvements

- More test coverage for events like clicking
- Pixel perfect design, add a popup for adding to bag, liking peroducts
- Get images with the correct size for each breakpoint (change aspect ratio on the image url)
- Fall back image to render without the broken look

## Perfomance 
Nice lighthouse score

<img width="567" alt="Screenshot 2021-05-16 at 14 32 32" src="https://user-images.githubusercontent.com/1080977/118399140-9a2b4580-b653-11eb-9fc6-8e6e420cfc0e.png">
