// Work
// 5hrs <!-- daily -->
// Previous - 7hrs <!-- daily -->
// 32hrs <!-- weekly -->
// Previous - 36hrs <!-- weekly -->
// 103hrs <!-- monthly -->
// Previous - 128hrs <!-- monthly -->

// Play
// 1hr <!-- daily -->
// Previous - 2hrs <!-- daily -->
// 10hrs <!-- weekly -->
// Previous - 8hrs <!-- weekly -->
// 23hrs <!-- monthly -->
// Previous - 29hrs <!-- monthly -->

// Study
// 0hrs <!-- daily -->
// Previous - 1hr <!-- daily -->
// 4hrs <!-- weekly -->
// Previous - 7hrs <!-- weekly -->
// 13hrs <!-- monthly -->
// Previous - 19hrs <!-- monthly -->

// Exercise
// 1hr <!-- daily -->
// Previous - 1hr <!-- daily -->
// 4hrs <!-- weekly -->
// Previous - 5hrs <!-- weekly -->
// 11hrs <!-- monthly -->
// Previous - 18hrs <!-- monthly -->

// Social
// 1hr <!-- daily -->
// Previous - 3hrs <!-- daily -->
// 5hrs <!-- weekly -->
// Previous - 10hrs <!-- weekly -->
// 21hrs <!-- monthly -->
// Previous - 23hrs <!-- monthly -->

// Self Care
// 0hrs <!-- daily -->
// Previous - 1hr <!-- daily -->
// 2hrs <!-- weekly -->
// Previous - 2hrs <!-- weekly -->
// 7hrs <!-- monthly -->
// Previous - 11hrs <!-- monthly -->-->

const jData = {
    daily: {
        work: {
            time: "5hrs",
            recently: "Previous - 7hrs",
        },
        play: {
            time: "1hr",
            recently: "Previous - 2hrs",
        },
        study: {
            time: "0hrs",
            recently: "Previous - 1hr",
        },
        exercise: {
            time: "1hr",
            recently: "Previous - 1hr",
        },
        social: {
            time: "1hr",
            recently: "Previous - 3hrs",
        },
        "self-care": {
            time: "0hrs",
            recently: "Previous - 1hr",
        },
    },
    weekly: {
        work: {
            time: "32hrs",
            recently: "Previous - 36hrs",
        },
        play: {
            time: "10hrs",
            recently: "Previous - 8hrs",
        },
        study: {
            time: "4hrs",
            recently: "Previous - 7hrs",
        },
        exercise: {
            time: "4hrs",
            recently: "Previous - 5hrs",
        },
        social: {
            time: "5hrs",
            recently: "Previous - 10hrs",
        },
        "self-care": {
            time: "2hrs",
            recently: "Previous - 2hrs",
        },
    },
    monthly: {
        work: {
            time: "103hrs",
            recently: "Previous - 128hrs",
        },
        play: {
            time: "23hrs",
            recently: "Previous - 29hrs",
        },
        study: {
            time: "13hrs",
            recently: "Previous - 19hrs",
        },
        exercise: {
            time: "11hrs",
            recently: "Previous - 18hrs",
        },
        social: {
            time: "21hrs",
            recently: "Previous - 23hrs",
        },
        "self-care": {
            time: "7hrs",
            recently: "Previous - 11hrs",
        },
    },
};

document.addEventListener("DOMContentLoaded", function () {
    setData("daily");
});

// event click button
var activeCurrent = "daily";
// change active
var changeTime = (sParameter) => {
    setData(sParameter);
    // delete class active at current element
    document.getElementById(activeCurrent).className = "";
    // add class active at new element
    document.getElementById(sParameter).className = "active";
    activeCurrent = sParameter;
};

var setData = (sParameter) => {
    insertData("#work > .card-info > .detail", "work", sParameter);
    insertData("#play > .card-info > .detail", "play", sParameter);
    insertData("#study > .card-info > .detail", "study", sParameter);
    insertData("#exercise > .card-info > .detail", "exercise", sParameter);
    insertData("#social > .card-info > .detail", "social", sParameter);
    insertData("#self-care > .card-info > .detail", "self-care", sParameter);
};

var insertData = (sParameter, sIdCard, timeActive) => {
    var detail = document.querySelector(sParameter);
    var time = jData[timeActive][sIdCard].time;
    var recently = jData[timeActive][sIdCard].recently;
    detail.innerHTML =
        `
        <div class="hour">` +
        time +
        `</div>
        <div class="recently">` +
        recently +
        `</div>
    `;
};
