<template>
    <div class="home-page">
        <div><h1>Welcome To Your Home Page</h1></div>
      <div class="centered-box">
        <h2>Welcome to the Bank App</h2>
        <p>Would you like to go to the Accounts page to manage your finances?</p>
        <router-link to="/accounts">Go to Accounts</router-link>
      </div>
  
      <div class="centered-box">
        <h2>Explore the Skull Component</h2>
        <p>Check out our interactive Skull component for fun!</p>
        <router-link to="/skull">Explore</router-link>
      </div>
      <div class = "logo">
        <img src="../assets/IE-University-logo.jpg" alt="Logo">
      </div>
  
      <!-- <div class="centered-box creative-box">
        <h2>Be Creative!</h2>
        <p>Add your own creative content here.</p>
        <router-link to="/creative-content">Get Inspired</router-link>
      </div> -->
    <router-view></router-view>

    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  /* Remove default margin and padding from the body and html elements */
body, html {
  margin: 0;
  padding: 0;
}

/* Apply the background color and set min-height to 100vh on your .home-page element */
.home-page {
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh; /* Adjust the subtraction value as needed */
  margin: 0;
  padding: 0;
}

/* Rest of your styles for .centered-box, .logo, and text elements */

  
  .centered-box {
    text-align: center;
    padding: 20px;
    border: 1px solid lightpink;
    border-radius: 5px;
    margin: 10px;
    max-width: 300px;
    background-color: #f5f5f5;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Add a box shadow */

  }
  .logo {
  position: absolute;
  bottom: 10px; /* Adjust the distance from the bottom as needed */
  left: 10px; /* Adjust the distance from the left as needed */
}

.logo img {
  width: 100px; /* Set the width of your logo */
  height: auto; /* Maintain aspect ratio */
}
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
h1 {
    font-family: 'Monaco', sans-serif;
    font-size: 35px;
    font-weight: bold;
}

  </style>
  