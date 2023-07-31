function addition() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const result = num1 + num2;
    alert(`Addition Result: ${result}`);
  }
  
  function subtraction() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const result = num1 - num2;
    alert(`Subtraction Result: ${result}`);
  }
  
  function division() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const result = num1 / num2;
    alert(`Division Result: ${result}`);
  }
 
  function multiplication() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const result = num1 * num2;
    alert(`Multiplication Result: ${result}`);
  }

  const operation = prompt("Enter the operation you want to perform:\n1. Addition\n2. Subtraction\n3. Division\n4. Multiplication");
 
  switch (operation) {
    case '1':
      addition();
      break;
    case '2':
      subtraction();
      break;
    case '3':
      division();
      break;
    case '4':
      multiplication();
      break;
    default:
      alert("Invalid input. Please select a valid operation (1, 2, 3, or 4).");
      break;
  }
  