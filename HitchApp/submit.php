<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $destination = htmlspecialchars($_POST['destination']);
    $date = htmlspecialchars($_POST['date']);

    $ride = array(
        'name' => $name,
        'destination' => $destination,
        'date' => $date
    );

    $rides = array();
    if (file_exists('rides.json')) {
        $rides = json_decode(file_get_contents('rides.json'), true);
    }

    $rides[] = $ride;
    file_put_contents('rides.json', json_encode($rides));

    echo 'Ride submitted successfully!';
} else {
    echo 'Invalid request method.';
}
?>
