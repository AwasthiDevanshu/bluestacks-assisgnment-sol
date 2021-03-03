<html>

<head></head>

<body>
    <?php
    class VideoList
    {
        public function __construct()
        {
            $this->responseBody = json_decode($_GET['body'], true);
            $this->videoList = $this->responseBody["videoList"] ?? [];

            echo '<button onclick="refreshVideos()"> Refresh Videos</button>';
            echo '<table border="1"><thead><tr>';
            echo '<th> Title</th>';
            echo '</tr></thead><tbody>';
            foreach ($this->videoList as $vid) {
                echo '<tr>';
                echo '<td> <a href="/videos/' . $vid["videoId"] . '" >' . $vid['vidTitle'] . '</td>';
                echo '</tr>';
            }
            echo '</tbody></table>';
        }
    }

    new VideoList();
    ?>
    <script>
        function refreshVideos() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    alert("List updated, refresh page");
                }
            };
            xhttp.open('POST', '/videos');
            xhttp.send()
        }
    </script>
</body>

</html>