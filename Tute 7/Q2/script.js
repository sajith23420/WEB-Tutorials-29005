function calculateGrade() {
    var marks = [];

    for (var i = 1; i <= 5; i++) {
        var input = parseFloat(prompt('Enter mark ' + i));
        if (isNaN(input)) {
            alert('Invalid input. Please enter a valid number for mark ' + i);
            return; // Exit the function if an invalid input is entered
        }
        marks.push(input);
    }

    var total = 0;
    var average = 0;
    for (var j = 0; j < marks.length; j++) {
        total += marks[j];
    }
    average = total / marks.length;

    var message = 'Total marks: ' + total + '\nAverage: ' + average;

    if (average > 30) {
        message += '\nCongrats, you passed!';
    } else {
        message += '\nBetter luck next time.';
    }

    alert(message);
}

document.getElementById('calculateButton').addEventListener('click', calculateGrade);