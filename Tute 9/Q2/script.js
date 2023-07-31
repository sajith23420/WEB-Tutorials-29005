function handleButtonClick() {
    const decision = confirm("Do you want to redirect to Google?");
 
    if (decision) {
 
      window.location.href = "https://www.google.com";
    } else {
  
      alert("You decided to stay.");
    }
  }
 
  const googleButton = document.getElementById('googleButton');

  googleButton.addEventListener('click', handleButtonClick);
  