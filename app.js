const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://downloader.la/temp/[Downloader.la]-63fe365101888.jpg",
        text:
        "We don't just build websites, we build websites that SELLS Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe attracts the right kinds of visitors",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://downloader.la/temp/[Downloader.la]-63fe386e08f2e.jpg",
        text:
        "If you are a beginner in tech, it can be tough to figure out where to start. There are so many paths available to you — from web development to web design to digital marketing, and every specialization under the sun.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://downloader.la/temp/[Downloader.la]-63fe3959e06ba.jpg",
        text:
        "I thoroughly enjoyed my internship this summer and now have very valuable experience under my belt. I know this will help when looking for jobs and needing references. I was dreading i",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://downloader.la/temp/[Downloader.la]-63fe3a42d4318.jpg",
        text:
        "Showing gratitude to your boss through a handwritten note or even an email is the best way to show appreciation. An elegantly worded thank you note can make anyone's day. Even your boss's",
    },
    {
        id: 5,
        name: "yosef alemu",
        job: "developer",
        img: "https://downloader.la/temp/[Downloader.la]-63fe4b048ff4d.jpg",
        text:
        "Showing gratitude to your boss through a handwritten note or even an email is the best way to show appreciation. An elegantly worded thank you note can make anyone's day. Even your boss's",
    },
];
// select the items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set the startig item

let currentItem = 0;

// load intial item

window.addEventListener("DOMContentLoaded", function(){
    generateWhole(currentItem)
});

// work on the prev and next button

prevBtn.addEventListener("click", function(){
    currentItem -= 1;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    generateWhole(currentItem);
});

nextBtn.addEventListener("click", function(){
    currentItem += 1;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    generateWhole(currentItem);
});

// work on the radom button

randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    generateWhole(currentItem)
    
});

// function 

function generateWhole(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}
