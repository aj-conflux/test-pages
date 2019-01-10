"use strict";

var $videoCarousel = document.querySelector(".video-carousel");
var $videoWrapper = $videoCarousel.querySelector(".video_8");
var $videoDetails = $videoCarousel.querySelector(".video-details");
var $videoDots = $videoCarousel.querySelector(".video-carousel-dots");
var index = 0;
var interval = -1;
var TIMEOUT = 5000;

var videos = [
    {
        title: "PRJ FAMILE FILL",
        description: "We must!",
        color: "#7ED321",
        src:
            "https://res.cloudinary.com/swiggy/video/upload/ac_none,c_scale,f_auto,h_480,q_auto:eco,vc_auto/v1545125470/swiggy_labs_careers/slabs_video_5.mp4",
    },
    {
        title: "PRJ SWAY",
        description: "Groceries are a drag",
        color: "#7ED321",
        src:
            "https://res.cloudinary.com/swiggy/video/upload/ac_none,c_scale,f_auto,h_480,q_auto:eco,vc_auto/v1545125439/swiggy_labs_careers/slabs_video_4.mov",
    },
    {
        title: "PRJ 3 MINUTE",
        description: "Audacious... for now",
        color: "#F8E71C",
        src:
            "https://res.cloudinary.com/swiggy/video/upload/ac_none,c_scale,f_auto,h_480,q_auto:eco,vc_auto/v1545125573/swiggy_labs_careers/slabs_video_8.mov",
    },
    {
        title: "PRJ DATA BOOM",
        description: "More data... more responsibility...",
        color: "#7ED321",
        src:
            "https://res.cloudinary.com/swiggy/video/upload/ac_none,c_scale,f_auto,h_480,q_auto:eco,vc_auto/v1545127458/swiggy_labs_careers/GettyImages-943334260.mp4",
    },
    {
        title: "PRJ BOT GRUB",
        description: "No more hair in food",
        color: "#F8E71C",
        src:
            "https://res.cloudinary.com/swiggy/video/upload/ac_none,c_scale,f_auto,h_480,q_auto:eco,vc_auto/v1545127486/swiggy_labs_careers/GettyImages-1051320068_1.mp4",
    },
];

window.addEventListener("click", function(e) {
    var classList = e.target.classList;

    if (classList && classList.contains("video-dot")) {
        var videoIndex = e.target.dataset.index;

        index = Number(videoIndex);
        clearInterval(interval);
        updateVideo();
        interval = setInterval(updateVideo, TIMEOUT);
    }
});

function updateVideo() {
    $videoDots.innerHTML = videos
        .map(function(v, i) {
            return (
                '<div data-index="' +
                i +
                '" class="video-dot ' +
                (i === index ? "active" : "") +
                " item-" +
                (i + 1) +
                '"></div>'
            );
        })
        .join("");
    $videoWrapper.src = videos[index].src;
    $videoDetails.querySelector(".video-title").innerText = videos[index].title;
    $videoDetails.querySelector(".video-description").innerText =
        '"' + videos[index].description + '"';
    $videoDetails.querySelector(".video-color").style.backgroundColor =
        videos[index].color;
    index = (index + 1) % videos.length;
}

updateVideo(index);

interval = setInterval(updateVideo, TIMEOUT);
