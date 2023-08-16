
const API_URL = 'https://backend-reservation-31b4.onrender.com/api/keepalive';

function fetchData() {
    fetch(API_URL)
  }
  
  fetchData();
  
  setInterval(fetchData, 60000);