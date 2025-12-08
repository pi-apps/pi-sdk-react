# pi-sdk-react

A React component library for easily integrating the Pi Network SDK into your React apps.

## Overview

`pi-sdk-react` provides drop-in React components and utilities for connecting with the [Pi Network SDK](https://pi.app/) and implementing Pi payment, authentication, and session flows. Includes both extensible base classes and ready-to-use UI components.

## Features

- React component base for Pi Network connectivity and payments
- Ready-to-use `PiButton` for initiating demo/test payments
- **Plop.js generator** to create or update the canonical `PiButton.jsx` example any time (see below)
- Easily extensible for custom payment/auth flows

## Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```
2. **Ensure `pi-sdk-js` is available locally as a sibling directory.**
3. **Install React and ReactDOM if your app doesn't already have them:**
   ```bash
   npm install react react-dom
   ```

## Usage

### Using PiButton

1. **Import and use in your React app:**
   ```jsx
   import PiButton from './PiButton';

   export default function MyPage() {
     return (
       <div>
         <PiButton />
       </div>
     );
   }
   ```
2. **How it works:**
   - Renders a button, enables when connected to Pi Network.
   - On click, runs a demo payment (see code in `PiButton.jsx`).

### Regenerating PiButton.jsx with Plop

To always have an up-to-date working PiNetwork button example:

```bash
npm run pretest
```
or manually:
```bash
npx plop pi-network-install
```
- This will automatically create (or overwrite) `PiButton.jsx` from the project template, providing a working example for your app or to customize.

If tests fail or you want to clean up, use:
```bash
npm run clean:generated
```

### Testing

- Always run tests with:
  ```bash
  npm test
  ```
- This will generate `PiButton.jsx`, run the tests, and then remove `PiButton.jsx`.
- Tests are located in the `tests/` directory and ensure the generated button actually works as intended.

---

## Folder Structure

```
pi-sdk-react/
  ├── PiSdkComponent.jsx
  ├── plopfile.js
  ├── plop-templates/
  │   └── PiSdkComponentWithBuy.jsx.hbs
  ├── scripts/
  │   └── test-and-cleanup.js
  ├── tests/
  │   └── PiButton.test.jsx
  └── ...
```

## Contributing

Contributions and pull requests are welcome. Please file issues or suggestions.

## License

SEE LICENCE IN LICENSE

---

**Author:** John Kolen
