<?php
function getDayOfWeek($number) {
    switch ($number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid number";
    }
}

// Test the function with different numbers
$number = 3; // Change this value to test different numbers
$result = getDayOfWeek($number);
echo "The day of the week for number $number is: $result";
?>
