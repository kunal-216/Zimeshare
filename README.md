# Zimeshare Internship Program

## Project Description

The Zimeshare Internship Program project is a dynamic single-page application for an e-commerce platform. The home page features a search bar that automatically displays relevant clothing items as the user types. The search results are shown in real-time without the need to press an "Enter" button, once the character count exceeds three letters.

## Features

- **Single-Page Application**: The entire functionality is contained within a single home page.
![Home Page](../frontend/assets/HomePage.jpeg)
- **Dynamic Search Bar**: As the user types in the search bar, relevant products such as Airdopes, Earphones, Mobile, TV, Refrigerator, Mouse, Camera, and Speakers are displayed dynamically.
- **Real-Time Search Results**: The search results are updated in real-time once the user inputs at least three characters.

## Tech Stack

- **Backend**: Node.js
- **Database Management**: MongoDB
- **Frontend**: Tailwind CSS, Vanilla JavaScript, HTML

## Installation Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**: 
   ```bash
   git clone [repository-url]
   ```

2. **Navigate to the Project Directory**: 
   ```bash
   cd Zimeshare-Internship-Program
   ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     ```
   - Build the CSS files using:
     ```bash
     npm run build:css
     ```

4. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Start the backend server using:
     ```bash
     nodemon server.js
     ```

5. **Launch the Frontend**:
   - Open `index.html` using Live Server to view the home page in your browser.

## Usage

- Open the home page in your browser.
- Use the search bar to type at least three letters related to the products.
- Observe the dynamic search results appearing as you type.
