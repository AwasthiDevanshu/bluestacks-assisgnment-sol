var express = require('express');
const TrendingVideo = require("../models/TrendingVideo.model");
var router = express.Router();
const fs = require('fs')
const axios = require("axios").default;


/* Return Video List. */
router.get('/videos', function (req, res, next) {
  //fecth videos from db
  TrendingVideo.findAll(
    {
      attributes: [
        "videoId", "vidTitle"
      ]
    }
  )
    .then((videoList) => {
      let post = JSON.stringify({ "videoList": videoList });
      res.render('VideoList.php', {
        method: 'GET',
        get: { body: post }
      });
    })
    .catch(error => res.json({
      error: true,
      data: [],
      error: error
    }))


});


/* Return Video Details. */
router.get('/videos/:videoId', function (req, res, next) {
  const videoId = req.params.videoId;
  TrendingVideo.findByPk(videoId)
    .then((video) => {
      let post = JSON.stringify({ "video": video });
      res.render('Video.php', {
        method: 'GET',
        get: { body: post }
      });
    })
    .catch(error => res.json({
      error: true,
      data: [],
      error: error
    }))
});


/* Fetch New Videos. */
router.post('/videos', function (req, res, next) {
  getTrendingVid().then(
    function (videoList) {
      videoList.forEach(video => {
        let vidDescription = "";
        if(video.descriptionSnippet != undefined){
          vidDescription = video.descriptionSnippet.runs[0].text;
        }
        TrendingVideo.upsert(
          {
            videoId: video.videoId,
            vidTitle: video.title.runs[0].text,
            vidDescription: vidDescription,
            viewCount: video.viewCountText.simpleText,
            chTitle: video.ownerText.runs[0].text,
            vidThumb: video.thumbnail.thumbnails
          },
        ) .catch(function (err) { console.log(err); }
        );
      })
    }
  )
    .catch(function (err) { console.log(err); }
    );
  res.status(200);
  res.send(req.body);
  res.status(201);
});

module.exports = router;


getTrendingVid = async function () {
  var options = {
    method: 'GET',
    url: 'https://www.youtube.com/feed/trending',
  };
  let html = await axios.request(options);
  let videoObjList = [];
  videoObjList = html.data.split("videoRenderer");
  videoObjList.shift();
  videoObjList = videoObjList.map(function (vidObj) {
  
    vidObj = vidObj.replace('":', "",);
    vidObj = vidObj.split(',{"thumbnailOverlayNowPlayingRenderer":{"text":{"runs":[{"text":"Now playing"}]}}}')[0];
    vidObj += ']}';
    vidObj = vidObj.replace('},{"]}', "",);
    //return vidObj;
    return JSON.parse(vidObj);

  });

  return videoObjList;
}