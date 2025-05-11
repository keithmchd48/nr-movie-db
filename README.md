[Live!](https://flixwatcher.netlify.app/)


This project uses vite
  
  # Features
  - Built using React 18 & Typescript
  - UI/UX inspired by [Netflix](https://www.netflix.com/)
  - Authentication using [Firebase Authentication](https://firebase.google.com/docs/auth)
  - Movie and TV Shows DM from [The Movie Database (TMDB)](https://www.themoviedb.org/)
  - Background trailer video is implemented via [YouTube Player API Reference for iframe Embeds](https://developers.google.com/youtube/iframe_api_reference)
  - Styled using [TailwindCSS](https://tailwindcss.com/)
  - App is available in the following languages:
    - English (EN)
    - Dansk (DK)
    - Español (ES)
  - Deployed through [Netlify](https://app.netlify.com/)
  - [Icons](https://react-icons.github.io/react-icons/) library
  - [Redux Toolkit](https://redux-toolkit.js.org/) for global state management

## Setup

```bash
# install dependencies
npm install

# Start the development server on `http://localhost:3000`
npm start

# Build the application for production
npm run build
```

## Testing
```bash
# Testing framework
npm i -D vitest

# React testing library - to render our react components and to interact with them
npm i -D @testing-library/react

# JSDom - to run tests in a browser env instead of a node env
npm i -D jsdom

# setup vitest.config.ts file to set the environemnt
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom"
  }
});

# jest-dom - gives us methods to make assertions and other matchers
npm i -D @testing-library/jest-dom

# for paths in vitest.config.ts
npm i -D @types/node

# for vitest --ui command
npm i -D @vitest/ui

# for firing user events - simulates the browser's dispatchEvent
npm i -D @testing-library/user-event
```

Find all matchers [here](https://github.com/testing-library/jest-dom)