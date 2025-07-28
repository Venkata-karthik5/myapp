# My Website

A beautiful Express.js website built with Bootstrap and following the MVC pattern.

## Features

- **Home Page**: Blue background with navigation cards
- **About Page**: Company information and story
- **Contact Page**: Contact form and information
- **Location Page**: Map placeholder and location details
- **Review Page**: Customer reviews and review form
- **Responsive Design**: Mobile-friendly Bootstrap layout
- **MVC Architecture**: Clean separation of concerns

## Project Structure

```
my/
├── app.js                 # Main Express application
├── bin/
│   └── www              # Server startup file
├── controllers/
│   └── main.js          # Controller functions
├── routes/
│   └── index.js         # Route definitions
├── views/               # EJS template files
│   ├── index.ejs        # Home page
│   ├── about.ejs        # About page
│   ├── contact.ejs      # Contact page
│   ├── location.ejs     # Location page
│   └── review.ejs       # Review page
├── public/
│   └── stylesheets/
│       └── style.css    # Custom CSS with Bootstrap
└── package.json
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Available Routes

- `/` - Home page (blue background)
- `/about` - About page
- `/contact` - Contact page with form
- `/location` - Location page with map placeholder
- `/review` - Review page with customer reviews

## Technologies Used

- **Express.js** - Web framework
- **EJS** - Template engine
- **Bootstrap 5** - CSS framework
- **Node.js** - Runtime environment

## Development

To run in development mode with auto-restart:
```bash
npm install -g nodemon
npm run dev
```

## Customization

- Edit `public/stylesheets/style.css` to modify styles
- Update view files in `views/` directory
- Modify controller functions in `controllers/main.js`
- Add new routes in `routes/index.js` 