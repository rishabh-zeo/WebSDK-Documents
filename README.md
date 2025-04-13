# SDK Example Guide

A React-based example application demonstrating the usage of the Zeotap SDK. This example showcases how to use the following SDK methods:

- `init()` - Initialize the SDK with a write key
- `setUserIdentities()` - Set user identification information
- `setPageProperties()` - Set properties for the current page
- `setEventProperties()` - Set properties for specific events

## Repository Structure

```
.
├── public/
│   └── index.html          # HTML template with SDK script
├── src/
│   ├── App.tsx            # Main application component
│   ├── App.css            # Application styles
│   ├── index.tsx          # Application entry point
│   ├── index.css          # Global styles
│   └── react-app-env.d.ts # TypeScript declarations
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add the SDK script to `public/index.html` in the head section:
   ```html
   <script src="path-to-your-sdk.js"></script>
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- Initialize SDK with write key
- Set user identities (ID and name)
- Set page properties (title and URL)
- Set event properties with JSON data
- Type-safe implementation with TypeScript

## Dependencies

- React 19
- TypeScript
- React DOM
- React Scripts

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Hosting on GitHub Pages

1. Push this repository to GitHub
2. Go to repository settings
3. Navigate to the "Pages" section
4. Select the branch you want to deploy (usually `main` or `master`)
5. Click "Save"

Your example will be available at `https://<your-username>.github.io/<repository-name>/`