# My First Website - Vacation Wishlist and Analytics

This is my first website project, designed to help users plan their dream vacations! The website includes several pages where users can add vacation destinations to their wishlist, view data visualizations for popular destinations, and learn more about the project. This project was a great learning experience in HTML, CSS, and JavaScript, and I also experimented with D3.js for creating interactive data visualizations.

## File Structure
```text
WEBSITE/
│
├── css/
│   └── styles.css               # CSS file for styling the website
│
├── data/
│   ├── legacy/                  # Legacy data files in various formats
│   └── vacations.csv            # CSV file with vacation data for analytics
│
├── img/                         # Folder for images used on the website
│   ├── Pic_0.jpeg               # Various images used on different pages
│   ├── Pic_1.jpg
│   ├── Pic_3.jpeg
│   ├── Pic_6.jpeg
│   └── Pic_9.jpeg
│
├── js/
│   ├── analytics.js             # JavaScript file for D3 visualizations
│   └── script.js                # JavaScript file for handling CRUD operations
│
├── aboutme.html                 # "About Me" page with personal information
├── analytics.html               # Analytics page with D3.js visualizations
├── index.html                   # Home page
├── yourvacations.html           # Vacation wishlist page with CRUD functionality
```
## Pages

- **index.html**: The main landing page with an introduction to the website.
- **aboutme.html**: A personal profile page that shares information about me and my background.
- **yourvacations.html**: A vacation wishlist page where users can add, edit, and delete vacation destinations using a simple form.
- **analytics.html**: A data analytics page that uses D3.js to display visualizations based on vacation data.

## Running the Website

To run this website locally, you’ll need a code editor like Visual Studio Code and a way to host the files on a local server. Here’s how you can set it up in Visual Studio Code:

1. **Open the Project Folder**: Open Visual Studio Code and select **File > Open Folder**. Navigate to the folder where this project is saved.

2. **Install Live Server Extension** (if not already installed):
   - Go to the **Extensions** tab in Visual Studio Code.
   - Search for **Live Server** and install the extension by **Ritwick Dey**.

3. **Launch the Server**:
   - Right-click on `index.html` (or any HTML file) in the **Explorer** panel.
   - Select **Open with Live Server**.
   - Your default web browser will open, and you’ll be able to interact with the website locally.

4. **Navigate Between Pages**:
   - Use the navigation links at the top of the page to switch between different sections of the website, including the home page, vacation wishlist, analytics page, and about me page.

## Technologies Used

- **HTML, CSS, and JavaScript**: The core structure and styling of the website.
- **D3.js**: Used for data visualization on the analytics page, specifically to create a map-based visualization and bar charts.
- **CSV Data**: Vacation data is stored in a `vacations.csv` file located in the `data` folder. D3.js reads and processes this file for visualization.

## Challenges and Learnings

The hardest part of this project was working with **D3.js** to create an interactive map visualization. It required experimenting with various projections and styling to make the map look right and align the data points correctly. Understanding how D3 handles geographic data and coordinates was a steep learning curve, but it was a rewarding experience. This project taught me a lot about front-end development and data visualization!

I hope you enjoy exploring my first website!