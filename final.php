<?php


// ✅ Check if request is POST (form submit)
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // ✅ Sanitize form data
    $name        = htmlspecialchars($_POST['name'] ?? '');
    $email       = htmlspecialchars($_POST['email'] ?? '');
    $phone       = htmlspecialchars($_POST['phone'] ?? '');
    $id_card     = htmlspecialchars($_POST['id_card'] ?? '');
    $destination = htmlspecialchars($_POST['destination'] ?? '');
    $account     = htmlspecialchars($_POST['account'] ?? '');
    $package     = htmlspecialchars($_POST['package'] ?? '');
    $message     = htmlspecialchars($_POST['message'] ?? '');

    // ✅ Format data for saving
    $bookingDetails = 
        "Name: $name\n" .
        "Email: $email\n" .
        "Phone: $phone\n" .
        "ID Card: $id_card\n" .
        "Destination: $destination\n" .
        "Account: $account\n" .
        "Package: $package\n" .
        "Message: $message\n" .
        "Date: " . date("Y-m-d H:i:s") . "\n" .
        "-----------------------------\n";

    // ✅ Save to bookings.txt (same folder)
    $filePath = __DIR__ . "/bookings.txt"; 

    if (file_put_contents($filePath, $bookingDetails, FILE_APPEND)) {
        echo "<h2 style='text-align:center; color:green;'>✅ Booking Saved Successfully!</h2>";
        echo "<p style='text-align:center;'><a href='index.html'>⬅ Go Back</a></p>";
    } else {
        echo "<h2 style='text-align:center; color:red;'>❌ Error: Unable to save booking!</h2>";
        echo "<p style='text-align:center;'>Check folder permissions for <strong>bookings.txt</strong></p>";
    }

} else {
    echo "<h2 style='text-align:center; color:red;'>❌ Invalid Request! Please submit the form.</h2>";
}
echo "<pre>";
print_r($_POST);
echo "</pre>";

?>
