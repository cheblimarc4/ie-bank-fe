<template>
    <div class="home-page">
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
  
      <div class="centered-box creative-box">
        <h2>Be Creative!</h2>
        <p>Add your own creative content here.</p>
        <router-link to="/creative-content">Get Inspired</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
  }
  
  .centered-box {
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    max-width: 300px;
    background-color: #f5f5f5;
  }
  
  .creative-box {
    /* Add your creative styling here */
    background-color: #ffcc00; /* Example background color */
    color: #333; /* Example text color */
    /* Add any other custom styles */
  }
  </style>
  