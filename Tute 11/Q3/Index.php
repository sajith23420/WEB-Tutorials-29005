<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
function calculateElectricityBill($units) {
    if ($units <= 50) {
        $billAmount = $units * 3.50;
    } elseif ($units <= 100) {
        $billAmount = 50 * 3.50 + ($units - 50) * 4.00;
    } elseif ($units <= 150) {
        $billAmount = 50 * 3.50 + 50 * 4.00 + ($units - 100) * 5.20;
    } else {
        $billAmount = 50 * 3.50 + 50 * 4.00 + 50 * 5.20 + ($units - 150) * 6.50;
    }

    return $billAmount;
}

// Test cases
$unitsConsumed = 45;
$bill = calculateElectricityBill($unitsConsumed);
echo "Units Consumed: " . $unitsConsumed . ", Electricity Bill: Rs. " . $bill . "\n";

$unitsConsumed = 75;
$bill = calculateElectricityBill($unitsConsumed);
echo "Units Consumed: " . $unitsConsumed . ", Electricity Bill: Rs. " . $bill . "\n";

$unitsConsumed = 125;
$bill = calculateElectricityBill($unitsConsumed);
echo "Units Consumed: " . $unitsConsumed . ", Electricity Bill: Rs. " . $bill . "\n";

$unitsConsumed = 200;
$bill = calculateElectricityBill($unitsConsumed);
echo "Units Consumed: " . $unitsConsumed . ", Electricity Bill: Rs. " . $bill . "\n";
?>

</body>
</html>