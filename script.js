
var  bg = document.querySelector(".bg")
var  today = document.querySelector(".today")
var  week = document.querySelector(".week")

var rank_1st_learner = document.getElementById("rank-1st-learner")
var rank_2st_learner = document.getElementById("rank-2st-learner")
var rank_3st_learner = document.getElementById("rank-3st-learner")


today.addEventListener("click", () => {
    bg.style.left = '0'
    today.style.color = "tomato"
    week.style.color = "black"
    rank_1st_learner.src = "1.avif"
    rank_2st_learner.src = "2.avif"
    rank_3st_learner.src = "3.avif"
})

week.addEventListener("click", () => {
    bg.style.left = '80px'
    week.style.color = "tomato"
    today.style.color = "black"
    rank_1st_learner.src = "w1.avif"
    rank_2st_learner.src = "w2.avif"
    rank_3st_learner.src = "w3.avif"
})


var social_icons = document.querySelector(".social-icons")
var display = 0;

var share = document.getElementById("share-icon")

share.addEventListener("click", () => {
    if(display == 1){
        social_icons.style.display = "flex"
        display = 0;
    }
    else{
        social_icons.style.display = "none"
        display = 1;
    }
})


