//  var tag = document.createElement('script');

//         tag.src = "https://www.youtube.com/iframe_api";
//         var firstScriptTag = document.getElementsByTagName('script')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//         // 3. This function creates an <iframe> (and YouTube player)
//         //    after the API code downloads.
//         var player;
//         function onYouTubeIframeAPIReady() {
//             player = new YT.Player('player', {
//                 height: '390',
//                 width: '640',
//                 videoId: 'v=fstY8GUlWOM-VE',
//                 //video Id ain't working
//                 playerVars: {
//                     'playsinline': 1
//                 },
//                 events: {
//                     'onReady': onPlayerReady,
//                     'onStateChange': onPlayerStateChange
//                 }
//             });
//         }

//         // 4. The API will call this function when the video player is ready.
//         function onPlayerReady(event) {
//             event.target.playVideo();
//         }

//         // 5. The API calls this function when the player's state changes.
//         //    The function indicates that when playing a video (state=1),
//         //    the player should play for six seconds and then stop.
//         var done = false;
//         function onPlayerStateChange(event) {
//             if (event.data == YT.PlayerState.PLAYING && !done) {
//                 setTimeout(stopVideo, 6000);
//                 done = true;
//             }
//         }
//         function stopVideo() {
//             player.stopVideo();
//         }


fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC2jwYIyIi_t9SirFIlEm5AQ&maxResults=10&order=date&key=AIzaSyBm74a2vCHedowyBwP6NIbfJZPSGmzWv1I')
        //.then(response => response.json())
        .then(res =>{
           return res.json();
        }).then((data)=>{
            console.log(data);
            let videos = data.items
            console.log(data.nextPageToken)
            let videoContainer = document.getElementById('player')
            for(video of videos){
                //document.write(video.snippet.title)
                videoContainer.innerHTML +=`
                <div class="div-video">
                <h1 class="video-title">Youtube Videos</h1>
                <img class="videos" src="${video.snippet.thumbnails.default.url}">
                </div>
                `
            }
        })