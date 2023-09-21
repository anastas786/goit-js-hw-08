import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', function (data) {
    let currentTime = data.seconds;

    saveCurrentTimeToLocalStorageThrottled(currentTime);
});


addEventListener('load', function () {
    const savedTime = localStorage.getItem('videoplayer-current-time');

    if (savedTime !== null) {
        const currentTime = parseFloat(savedTime);
        player.setCurrentTime(currentTime || 0)

    }
});

const saveCurrentTimeToLocalStorageThrottled = throttle(function (currentTime) {
    localStorage.setItem("videoplayer-current-time", currentTime.toString());
}, 1000);



