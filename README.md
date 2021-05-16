# Depop Coding Challenge

## Goals

The goal was to build a simple listing page and match it closely to the wireframe file provided. I aimed to do this 3 hours max. The goal was to build something that could go in production after being polished up a bit.

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

The project is alo available on this [link](https://depop-plp.vercel.app/search)

## Timeline

This project took me about 3.5 hrs to complete

_First hour: Setting up the skeleton with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), then creating the main search page route and the ProductList and Navigation components._

_Second hour: Creating the Product Card and Filters component and it's dependent components_

_Third hour: Adding Liking and Unliking functionality, Adding SEO component, running lighthouse tests and optimizing missing things_

_Last half hour: Documentation and fine tuning_

## Improvements

- More test coverage for events like clicking
- Pixel perfect design, styling the popup better
- Get images with the correct size for each breakpoint (change aspect ratio on the image url)
- Add a popup for the likes items
- Fall back image to render without the broken look

## Perfomance

### Lighthouse Score

The Best practices score is a bit low because the api returns some http url for the images

<img width="553" alt="Screenshot 2021-05-14 at 10 00 00" src="https://user-images.githubusercontent.com/1080977/118247564-3b22d080-b49b-11eb-8f7c-16e233c3d0c5.png">

### Web Page Test

![video (1)](https://user-images.githubusercontent.com/1080977/118248501-45919a00-b49c-11eb-839d-e4dca1c4f106.gif)


