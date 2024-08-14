<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Assignment</title>
</head>
<body>


    <?php
function generateTable($number, $length) {
    for ($i = 1; $i <= $length; $i++) {
        $result = $number * $i;
        echo "$number x $i = $result<br>";
    }
}


generateTable(2, 20);
?>

</body>
</html>