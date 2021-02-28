# bluestacks-assisgnment-sol
- Bluestacks Web assisgnment Solution: for following assignment https://github.com/bluestacks/website-fullstack-dev-assignment



- Add Database connection in config.json file.

- Create Table using below query. and 

-- TrendingVideos definition

CREATE TABLE `TrendingVideos` (
  `videoId` varchar(100) CHARACTER SET latin1 NOT NULL,
  `vidTitle` text CHARACTER SET latin1 DEFAULT NULL,
  `vidDescription` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `viewCount` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chTitle` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vidThumb` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`vidThumb`)),
  PRIMARY KEY (`videoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


- use npm start to run server

- Link for providing trending video list 
- - http://localhost:3000/videos/

- Click on same button to fetch more trending videos

- Click on any link on the page to fo to video description page.
