# MERN Assignment: Login Page and React Components

## Overview

This MERN (MongoDB, Express.js, React, Node.js) assignment combines the previous Node.js assignment with the addition of a login page and four React components/pages (Home, About Us, Jobs, Contact). The goal is to integrate user authentication with existing usernames and passwords from the previous assignment, implement a login page, and create a React application with multiple pages.

## Project Structure

### Backend (Node.js)

- **`app.js`**: Entry point for the Node.js server.
- **`router.js`**: Handles routing for the application.
- **`userController.js`**: Manages the logic for handling requests and responses.
- **`userservice.js`**: Contains business logic related to user authentication.
- **`usermodel.js`**: Defines the data model, particularly for user information.

### Frontend (React)

The frontend follows a component-based structure for each page:

- **`src/components/HomePage.js`**: React component for the Home page.
- **`src/components/AboutPage.js`**: React component for the About Us page.
- **`src/components/JobsPage.js`**: React component for the Jobs page.
- **`src/components/ContactPage.js`**: React component for the Contact page.
- **`src/components/LoginPage.js`**: React component for the login page.

### Additional Components

- **`src/components/PageCard.js`**: Reusable React component for displaying information cards.


## Functionality

- **Login Page**:
  - Utilizes usernames and passwords from the previous assignment.
  - Manually enters data on the backend for verification with the frontend.

- **React Pages**:
  - Four pages (Home, About Us, Jobs, Contact) implemented using React components.
  - Each page includes a card component with details about the respective page.
  - Dynamic component creation using `map()` demonstrated Job page and home page.

- **Styling**:
  - CSS utilized for styling to enhance the visual appeal of the pages.


