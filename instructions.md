# Tailwind Setup

## commands

```commands
npm init -y
npm i -D tailwindcss
npx tailwindcss init
```

## Add configuration in config.js files

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Add the Tailwind directives to your CSS

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Changing package.json file's scripts

```json
{
  "name": "banking-app-with-tailwind",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tailwindcss -i ./input.css -o ./main/output.css",
    "watch": "tailwindcss -i ./input.css -o ./main/output.css --watch"
  },
  "keywords": [],
  "author": "Moid Alam",
  "license": "ISC",
  "devDependencies": {
    "tailwindcss": "^3.3.4"
  }
}
```

## After changing package.json file's scripts commands and running commands

```commands
npm run build
npm run watch
```

## Clip path svg

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,229.3C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
```
