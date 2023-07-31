function displayDayOfWeek() {

    const userInput = prompt("Enter a number from 1 to 7:");
 
    const dayNumber = parseInt(userInput);
 
    const daysOfWeek = [
       "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"
    ];
 
    if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 7) {
 
      const dayName = daysOfWeek[dayNumber - 1];
  
      alert(`The day is ${dayName}.`);
    } else {
 
      alert("Invalid input. Please enter a number between 1 and 7.");
    }
  }
  