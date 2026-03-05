# Cancer Landing Page

A responsive landing page project focused on providing information and resources related to cancer. This project is built using modern web development practices, including a build system and Hot Module Replacement (HMR).

## Features

- **Responsive Design**: Includes pre-configured breakpoints for mobile, tablet, and desktop views.
- **Build System**: Powered by [Parcel](https://parceljs.org/) for fast builds and a seamless development experience.
- **Hot Module Replacement (HMR)**: Instant updates in the browser during development.
- **Material UI Icons**: Integrated via CDN for easy access to a vast library of icons.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (or navigate to the project folder).
2. Install the dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with HMR:
```bash
npm start
```
By default, the application will be available at `http://localhost:1234`.

### Production Build

To create a production-ready build in the `dist` folder:
```bash
npm run build
```

## Project Structure

- `src/index.html`: The main HTML entry point.
- `src/index.js`: The JavaScript entry point, importing styles and logic.
- `src/style.css`: The main stylesheet containing base styles and responsive media queries.
- `package.json`: Project configuration and scripts.

## Breakpoints

The design follows a mobile-first approach with the following breakpoints:
- **Mobile**: Default styles
- **Tablet**: `min-width: 768px`
- **Desktop**: `min-width: 1024px`

## UI Components

This project uses [Material Icons](https://fonts.google.com/icons) for iconography. You can use them by adding a span with the `material-icons` class:
```html
<span class="material-icons">favorite</span>
```
