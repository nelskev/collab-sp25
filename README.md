## SWDV280 Collaborative Development Spring 25 ##   
---   
**Tentative Project Structure - using Jest for testing**
```sh
project-root/
│── backend/                  # Node.js w/ ES6 modules + Express API
│   ├── src/
│   │   ├── models/           # Mongoose schemas
│   │   ├── routes/           # API routes (ratings/employees/estimates/etc)
│   │   ├── controllers/      # Route logic
│   │   ├── config/           # MongoDB & env config
│   │   ├── server.js         # Express server entry
|
├── tests/                    # Test folder
│   ├── controllers/          # Tests for controller functions
│   │   └── userController.test.js
│   ├── routes/               # Tests for API routes/endpoints
│   │   └── userRoutes.test.js
│   ├── models/               # Tests for data models
│   │   └── userModel.test.js
│   ├── setup.js              # Global setup for tests (aka- fixtures)
|
│   ├── .env                  # Environment variables
│   ├── package.json          # Dependencies
│   ├── jest.config.js        # Jest config  
│
│── frontend-web/             # React Web App
│   ├── src/
|   |   ├── assets            # Images/Fonts/Styles/Scripts
│   │   ├── components/       # Reusable UI components
|   |   |   ├── Appointments.jsx
|   |   |   ├── MissionStatement.jsx
|   |   |   ├── Navbar.jsx
|   |   |   ├── Services.jsx
|   |   |   ├── Footer.jsx
│   │   ├── pages/            # Page components
|   |   |   ├── HomePage.jsx
|   |   |   ├── AppointmentsPage.jsx
│   │   ├── admin/            # Admin Section
|   │   │   ├── components/   # Admin Components
|   |   |   │   ├── AdminNavbar.jsx 
|   |   |   │   ├── EmployeeCard.jsx  # EXAMPLE PURPOSE ONLY
|   |   |   │   ├── EmployeeForm.jsx  # EXAMPLE PURPOSE ONLY
|   |   |   ├── pages/        # Admin Pages
|   |   |   |   ├── AdminHomePage.jsx
│   │   ├── context/          # Global state (React Context API)
│   │   ├── App.js            # Main entry point
│   ├── tests/                # Frontend tests
│   │   ├── components/       # Unit tests for UI components
│   │   ├── pages/            # Page rendering tests
│   │   ├── setupTests.js     # Jest & RTL setup
│   ├── package.json          # Dependencies
│   ├── jest.config.js        # Jest config  
│
│── .github/                  # GitHub Actions for CI/CD
│   ├── workflows/
│       ├── ci-cd.yml         # Automates testing & deployment
│
│── .gitignore                # NEVER COMMIT .env file 
│
│── README.md                 # Project documentation
```

**For frontend React, from the root of collab-sp25:**

```sh
cd frontend
npm install      # installs node modules as we don't upload those to Github
npm run dev
```
**React is @: `http://localhost:5173/`**



**For backend Express, from the root of collab-sp25:**

```sh
cd backend
npm install
npm start
```

**nodemon package listens to changes on server.js via: `http://localhost:8000/`**

##### `http://localhost:8000/employees` will access MongoDB entity employees