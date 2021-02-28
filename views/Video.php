<html>

<head></head>

<body>
    <?php
    class Video
    {
        public function __construct()
        {
            $this->responseBody = json_decode($_GET['body'], true);
            $this->video = $this->responseBody["video"] ?? [];

            echo 'Title: ';

            echo '</br>';
            echo '<a href="https://www.youtube.com/watch?v=' . $this->video["videoId"] . '" > ' . $this->video["vidTitle"] . '</a>';
            echo '</br>';
            echo 'Description: ';
            echo '<p>';
            echo $this->video["vidDescription"];
            echo '</p>';
            echo '</br>';
            echo 'Views: ';
            echo '<span>' . $this->video["viewCount"] . '</span>';
            echo '</br>';
            echo 'Channel Title: ';

            echo '<span>' . $this->video["chTitle"] . '</span>';
            echo '</br>';
            echo '</br>';

            echo 'Thumbnails: ';
            echo '</br>';

            foreach ($this->video['vidThumb'] as $thumb) {
                echo '<img src="' . $thumb["url"] . '" height="' . $thumb["height"] . '" width="' . $thumb["width"] . '" >';
            }
        }
    }

    new Video();
    ?>

</body>

</html>