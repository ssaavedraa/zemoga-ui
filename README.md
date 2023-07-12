About this project
==============

Hello there!

I'm excited to share some information about this project with you. Get ready to dive into the amazing world of Next.js and Server-Side Rendering (SSR).

Firstly, let's talk about the purpose of this project. While it may not be a complete website, it implements SSR to enhance performance and optimize page load times. Instead, it serves as a micro frontend component that can be easily embedded into your webpages or websites using an iframe tag.

Here's a simple snippet that demonstrates how to embed the micro frontend into your webpage:

```html
  <iframe src="YOUR_MICROFRONTED_URL" frameborder="0"></iframe>
```

Feel free to customize the styling of the iframe using the class property and explore various other options available.

Getting Started
======================

First, install all the node dependencies:

```bash
npm install
```

Create a .env file with the following environment variable

```
NEXT_PUBLIC_BACKEND_URL = <yourBackendUrl>
```

Run the development environment

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
