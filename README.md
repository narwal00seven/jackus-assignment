# Employee Directory App

## Overview
A responsive and interactive Employee Directory web interface built with HTML, CSS, JavaScript, and Freemarker templates. This app allows you to view, add, edit, delete, filter, search, and paginate employee records using only local data (no backend required).

## Features
- Employee dashboard with list/grid view
- Add/Edit employee form with validation
- Filter, sort, and search employees
- Pagination controls
- Responsive design for desktop, tablet, and mobile
- Modular CSS and JS

## Setup & Run Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system (for running a local static server)

### Steps
1. **Clone or download this repository to your local machine.**
2. **Open a terminal and navigate to the project root folder.**
3. **Install the static server (if not already installed):**
   ```bash
   npm install -g serve
   ```
4. **Start the local server:**
   ```bash
   npx serve public --listen 3000
   ```
5. **Open your browser and go to:**
   [http://localhost:3000](http://localhost:3000)

You should see the Employee Directory dashboard. You can add, edit, delete, filter, and search employees. All data is stored in your browser's localStorage (no backend required).

## Project Structure
```
as moh/
│
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   ├── form.js
│   │   └── utils.js
│   ├── index.html
│   └── employeeForm.html
│
├── data/
│   └── employees.json (mock data)
│
├── templates/
│   ├── dashboard.ftl
│   └── employeeForm.ftl
│
└── README.md
```

- `public/` - Static assets (CSS, JS, HTML)
- `data/` - Mock employee data (JSON, used for initial load)
- `templates/` - Freemarker templates (for server-side rendering, optional)

## Screenshots
<!-- Add screenshots of your UI here -->

## Reflection
**Challenges faced:**
- Achieving pixel-perfect alignment and spacing to match the provided UI screenshots.
- Ensuring the filter sidebar overlays correctly and is fully responsive.
- Making the search, filter, and pagination logic work smoothly with only local data and no backend.
- Handling all UI/UX requirements with only vanilla JS and CSS.

**What I’d improve with more time:**
- Add animations for sidebar transitions and card actions.
- Implement edit functionality for employees.
- Add unit tests for JS logic.
- Improve accessibility (ARIA labels, keyboard navigation).
- Add more robust form validation and error handling.
- Polish the UI further for edge cases and mobile devices. 