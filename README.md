# 🤝 Keen Keeper A7 (Programming Hero)

Welcome to **Keen Keeper**, your personal networking and relationship manager! This is a single-page React application (SPA) built with Vite and styled using Tailwind CSS and DaisyUI. 

This project was built to demonstrate intermediate React concepts, such as component composition, passing props, lifting state up, routing, and using side-effects.

---

## 🌟 What Does This App Do?

Keen Keeper helps you catalog and maintain the connections in your life. Instead of losing touch with your friends or colleagues, the app provides a dashboard to see who you are successfully keeping in contact with, and who is currently "Overdue" for a check-in.

### Key Features:
1. **Home Dashboard:** Displays an overview of all your connections, dividing them into categories like *On Track*, *Almost Due*, and *Overdue*.
2. **Friend Profiles:** Click on any friend to view their detailed profile, check their email, and log a new interaction (Call, Text, or Video).
3. **Timeline:** A unified history log showing all the interactions you've shared with your friends chronologically. 
4. **Interaction Analytics (Stats):** A beautiful pie chart visualization displaying the ratio of Texting vs. Calling vs. Video-chatting across your network.

---

## 🛠️ How It Was Built (The Tech Stack)

* **React:** The core library used to build the user interface. We use React Hooks (`useState`, `useEffect`) to manage the interactive parts of the application.
* **Vite:** A lightning-fast build tool and development server that compiles our React code.
* **React Router v6:** Manages "routing" (moving between pages like `/timeline` and `/stats` without reloading the browser).
* **Recharts:** A charting library used to build the Pie Chart on the Statistics page.
* **Tailwind CSS & DaisyUI:** Utility-first CSS frameworks for creating gorgeous, responsive layouts rapidly without writing raw CSS from scratch.

---

## 📂 Project Structure & How the Code Works

If you are a beginner looking through the code, start inside the `src` folder. Here is a breakdown of the critical pieces:

### 1. `src/main.jsx`
This is the entry point of the entire application. It takes our main `App` component and injects it into the `index.html` file inside the browser. It also wraps the app in `<BrowserRouter>` so routing works.

### 2. `src/App.jsx`
This is the "Brain" of the application. 
* **State Management:** It holds the `friendsData` list using the `useState` hook. Because the data lives here at the very top of the app, any page (Home, Timeline, Stats) can access and share this identical data!
* **Routing:** It contains `<Routes>` and `<Route>` components. When the user visits `/timeline`, React Router instantly mounts the `<Timeline />` component.
* **Interaction Logic:** It contains the `handleInteraction` function. When a user logs a call with a friend, this function finds that friend in the array, appends the new text/call history event, and updates the state.

### 3. `src/data/friends.json`
This acts as our "Mock Database". Because we don't have a real backend server (like Node.js or Python), we store our starting list of friends in this JSON file. The `App.jsx` file imports this data to initialize the application on the very first load.

### 4. `src/components/home.jsx`
The default dashboard. It receives the `friendsData` from `App.jsx` via **Props** (properties passed from parent to child). It calculates the numbers for the top "Stat Cards" (total friends, overdue, etc.) and uses the array `.map()` function to render out a grid of `<FriendCard />` components.

### 5. `src/components/friends.jsx` (Profile Page)
When you click a friend, you land here. It extracts the `id` from the URL, finds the specific friend, and renders their information (including their email and recent interactions). It provides buttons to log a Call, Text, or Video, which triggers the logic back up in `App.jsx`.

### 6. `src/components/timeline.jsx` & `Stats.jsx`
These pages also receive the `friendsData` prop. 
* Instead of showing friends, `timeline.jsx` runs through the data, extracts every single interaction that ever happened, sorts them by date, and renders a list. 
* `Stats.jsx` counts how many Calls, Texts, and Videos exist in the entire dataset, and feeds those counts into a `<PieChart>`.

---

## 🚀 How to Run This Locally

Want to run this code on your own computer? Follow these steps:

1. **Install Node.js:** Ensure Node.js is installed on your computer.
2. **Open Terminal:** Navigate to the project directory in your terminal.
3. **Install Dependencies:**
   Run the following command to download all the required libraries:
   ```bash
   npm install
   ```
4. **Start the Development Server:**
   Run the following command to boot up the app locally:
   ```bash
   npm run dev
   ```
5. **View the App:** Open your web browser and navigate to `http://localhost:5173` (or whichever port Vite gives you in the terminal).

---

## 🧑‍💻 Webapp LiveLink
Open your web browser and navigate to (`https://keen-keeper-ph-a7.netlify.app/`)


## 🧑‍💻 Beginner Takeaways
If you are learning React, this project demonstrates the golden rule of React state: **"Lift State Up"**. 
By keeping the `friendsData` inside `App.jsx`, both the `<ProfilePage>` (where you add interactions) and the `<Timeline>` (where you view interactions) stay perfectly synchronized. When the state changes in `App.jsx`, React automatically re-renders every component across the application that relies on that piece of data!
