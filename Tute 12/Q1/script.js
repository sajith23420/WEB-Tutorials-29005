document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();   
    const formData = new FormData(event.target);

    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Submitted Details:</h2>';
    outputDiv.innerHTML += '<p>First Name: ' + formObject['first_name'] + '</p>';
    outputDiv.innerHTML += '<p>Last Name: ' + formObject['last_name'] + '</p>';
    outputDiv.innerHTML += '<p>User Name: ' + formObject['username'] + '</p>';
 
    event.target.reset();
});
