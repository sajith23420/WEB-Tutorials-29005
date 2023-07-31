function displayYearOfBirth() {
    const nicNumber = document.getElementById('nicInput').value;

    if (nicNumber.length === 12 && !isNaN(nicNumber)) {
 
      const birthYear = nicNumber.slice(0, 4);
 
      alert(`Year of Birth: ${birthYear}`);
    } else {
      alert("Invalid NIC number format. Please enter a valid NIC number (e.g., 199001012345).");
    }
  }
  