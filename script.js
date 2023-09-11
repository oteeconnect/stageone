// Function to get the current date and time
function getCurrentDateAndTime() {
    const dateTime = new Date();
    return dateTime.toLocaleString();
  }
  

  const dateDisplay = document.getElementById("date-container");
  

  dateDisplay.innerHTML = getCurrentDateAndTime();