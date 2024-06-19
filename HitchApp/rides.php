<?php
if (file_exists('rides.json')) {
    $rides = json_decode(file_get_contents('rides.json'), true);
    echo json_encode($rides);
} else {
    echo json_encode([]);
}
?>
