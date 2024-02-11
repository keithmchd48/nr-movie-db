/** @type {import('tailwindcss').Config} */
module.exports = {
  // This line in the tailwind.config.js file specifies the content that Tailwind CSS should scan for classes to generate styles for. In this case, it tells Tailwind CSS to look for JavaScript, JSX, TypeScript, and TypeScript JSX files within the src directory and its subdirectories.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}