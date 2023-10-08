<template>
    <div><h1>Welcome To Your Home Page</h1>
    <div class="home-page">
        <div class = "menu">
            <div class = "dropdown">
                <button class = "dropbtn">Menu</button>
                    <div class = "dropdown-content">
                        <router-link to="/accounts">Accounts</router-link>
                        <router-link to="/skull">Skull</router-link>
                        <a href="https://github.com/cheblimarc4/ie-bank-fe" target="blank"> Github Repo</a>
                    </div>
            </div>
        </div>
      <div class="content">
        <div class="centered-box">
          <h2>Welcome to the Bank App</h2>
          <p>Would you like to go to the Accounts page to manage your finances?</p>
          <router-link to="/accounts">Go to Accounts</router-link>
        </div>
  
        <div class="centered-box">
          <h2>Explore the Skull Component</h2>
          <p class = "exp">Check out our interactive Skull component for fun!</p>
          <router-link to="/skull">Explore</router-link>
        </div>
      </div>
     
      <div class="logo">
        <img src="../assets/IE-University-logo.jpg" alt="Logo">
      </div>
      <!-- <div class="centered-box creative-box">
        <h2>Be Creative!</h2>
        <p>Add your own creative content here.</p>
        <router-link to="/creative-content">Get Inspired</router-link>
      </div> -->
      <router-view></router-view>
    </div>
    </div>
  </template>
  
  
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .menu {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

/* Dropdown button style */
.dropbtn {
  background-color: #f5f5f5;
  border: none;
  color: #333;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

/* Dropdown container style */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: #333;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-weight: bold;
}

/* Change color on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Style for the GitHub link */
.dropdown-content a[href^="https://github.com"] {
  color: #0366d6; /* GitHub link color */
}
/* Reset margins and padding for all elements */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Apply the background color to the whole page */
body {
  background-color: lightblue;
  margin: 0;
  padding: 0;
}

/* Center the content vertically and horizontally */
.home-page {
    background: linear-gradient(to bottom, #87CEEB, #0072BB);
  display: flex;
  flex-direction: column;
  justify-content:  center;
  align-items: center;
  height: 100vh;
}

/* Style for the main heading */
h1 {
  font-family: 'Monaco', sans-serif;
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* Container for the centered boxes */
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Allow boxes to wrap to the next row on smaller screens */
}
.centered-box {
  text-align: center;
  padding: 20px;
  border: 1px solid blue;
  border-radius: 5px;
  margin: 10px;
  width: 300px; /* Fixed width for both centered boxes */
  height: 200px; /* Fixed height for both centered boxes */
  background-color: #f5f5f5;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Add a box shadow */
}


/* Style for the logo */
.logo {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.logo img {
  width: 100px;
  height: auto;
}

/* Additional styles for text elements */
h2 {
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: bold;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
</style>

  