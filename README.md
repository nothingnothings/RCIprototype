![logo](/src/assets/images/HostCorps.png)

# HostCorps

Website of a fictional hosting provider company. Built with HTML5, CSS3 and vanilla JavaScript.

This version of the app made use of a Webpack workflow to bundle its content. The webApp can be acessed [here](https://nothingnothings.github.io/HostCorpsWebpackVersion).

## Technologies

Some of the Languages, Libraries and packages employed:

- Node Package Manager (for Webpack and webpack-related packages)
- HTML5
- CSS3 (animations, Flexbox, media queries)
- Vanilla JavaScript (no JavaScript frameworks; usage of `var`, normal functions and common eventListeners)
- Form validation logic (basic input validation, logic for adding and removing "focus" and "invalid" styles, etc)
- Responsive mobile design (sidebar, Flexbox, media queries)

## Project Directory Structure

The development environment (with the use of a Webpack workflow), as seen in the `master` branch:

```
.
│
├── assets\
│   │
│   ├── css\
│   │   ├── common.css
│   │   ├── customers.css
│   │   ├── index.css
│   │   ├── packages.css
│   │   └── start-hosting.css
│   │
│   ├── fonts\
│   │   ├── UniSansHeavyCAPS.woff
│   │   ├── UniSansHeavyCAPS.woff2
│   │   ├── anonymousPro-Bold.ttf
│   │   └── anonymousPro-Regular.ttf
│   │
│   └── images\
│       ├── HostCorps.png
│       ├── HostCorps.svg
│       ├── customer-1.jpg
│       ├── customer-2.jpg
│       ├── customer-3.jpg
│       ├── freedom.jpg
│       └── plan.jpg
│
│
├── js\
│   ├── index.js
│   └── start-hosting.js
│
├── customers.html
├── index.html
├── packages.html
└── start-hosting.html
```

The Webpack workflow's production output, as shown in the `gh-pages` branch (tasked with the deployment of the app):

```
.
│
├── assets\
│   │
│   ├── fonts\
│   │   ├── UniSansHeavyCAPS.woff
│   │   ├── UniSansHeavyCAPS.woff2
│   │   ├── anonymousPro-Bold.ttf
│   │   └── anonymousPro-Regular.ttf
│   │
│   └── images\
│       ├── HostCorps.png
│       ├── customer-1.jpg
│       ├── customer-2.jpg
│       ├── customer-3.jpg
│       ├── freedom.jpg
│       └── plan.jpg
│
│
├── bundle.js
├── customers.html
├── index.html
├── packages.html
└── start-hosting.html
```

## Webpack and package.json Configuration Files

The webpack.config.js file used in the project:

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/js/index.js', './src/js/start-hosting.js'],

  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: (pathData) => {
      const filePath = path
        .dirname(pathData.filename)
        .split('/')
        .slice(1)
        .join('/');
      return `${filePath}/[name][ext]`;
    },
  },
  resolve: {
    extensions: ['.js'],
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'customers.html',
      template: 'src/customers.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'packages.html',
      template: 'src/packages.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'start-hosting.html',
      template: 'src/start-hosting.html',
    }),

    new CleanWebpackPlugin(),
  ],

  performance: {
    hints: false,
  },
};

```

## Setup

To use this project, clone it using Git:

1. Run `git clone` to clone the project into your local Git repository
2. Serve the files with the help of a hosting provider (frontend-only)

## Features

- Multiple pages (different HTML pages, normal page serving)
- Form validation logic in the "Start Hosting" page
- Responsive design (mobile and desktop) created with Flexbox and media queries
- Addition/removal of CSS classes ("slide-in" animation) implemented with JavaScript

## Inspiration

Inspired by the "JavaScript - The Complete Guide" course by Maximilian Schwarzmüller.
