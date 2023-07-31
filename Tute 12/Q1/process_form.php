<!DOCTYPE html>
<html>
<head>
    <title>Registration Form - Data Display</title>
</head>
<body>
    <h1>Registration Form - Data Display</h1>
    <p>First Name: <?php echo $_POST['first_name']; ?></p>
    <p>Last Name: <?php echo $_POST['last_name']; ?></p>
    <p>User Name: <?php echo $_POST['username']; ?></p>
    <p>Password: <?php echo $_POST['password']; ?></p>
    <p>Gender: <?php echo $_POST['gender']; ?></p>
    <p>Academic Year: <?php echo $_POST['academic_year']; ?></p>
    <p>Email: <?php echo $_POST['email']; ?></p>
    <p>Phone Number: <?php echo $_POST['phone_number']; ?></p>
</body>
</html>
