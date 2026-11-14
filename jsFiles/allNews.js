// import navigation buttons
const home = document.getElementById("home");
const allNews = document.getElementById("allNews");
const about = document.getElementById("about");
const events = document.getElementById("events");
const contact = document.getElementById("contact");

// import filter buttons
const allNewsFilter = document.getElementById("allNewsFilter");
const academicFilter = document.getElementById("academicFilter");
const sportFilter = document.getElementById("sportFilter");
const artsCultureFilter = document.getElementById("artsCultureFilter");
const technologyFilter = document.getElementById("technologyFilter");
const researchFilter = document.getElementById("researchFilter");

// import news articles
const news1 = document.getElementById("news1");
const news2 = document.getElementById("news2");
const news3 = document.getElementById("news3");
const news4 = document.getElementById("news4");
const news5 = document.getElementById("news5");
const news6 = document.getElementById("news6");

const article1Imgs = ["/Group-12-GitProject/pictures/chess.jpeg", 
                        "/Group-12-GitProject/pictures/research.jpeg",
                         "/Group-12-GitProject/pictures/universityNews.png", 
                         "/Group-12-GitProject/pictures/grajuation.jfif.jpeg", 
                         "/Group-12-GitProject/pictures/cup.jpeg", 
                         "/Group-12-GitProject/pictures/marine.jfif.jpeg"
                    ];

// navigation buttons event listeners

home.addEventListener("click", () => {
    window.location.href = "/Group-12-GitProject/index.html";
});

allNews.addEventListener("click", () => {
    window.location.href = "/Group-12-GitProject/htmlFiles/allNews.html";
});

about.addEventListener("click", () => {
    window.location.href = "/Group-12-GitProject/htmlFiles/about.html";
});

events.addEventListener("click", () => {
    window.location.href = "/Group-12-GitProject/htmlFiles/events.html";
});

contact.addEventListener("click", () => {
    window.location.href = "/Group-12-GitProject/htmlFiles/contact.html";
});

// filter buttons event listeners

allNewsFilter.addEventListener("click", () => {
    news1.style.display = "block";
    news2.style.display = "block";
    news3.style.display = "block";
    news4.style.display = "block";
    news5.style.display = "block";
    news6.style.display = "block";
});
academicFilter.addEventListener("click", () => {
    news1.style.display = "none";
    news2.style.display = "block";
    news3.style.display = "none";
    news4.style.display = "none";
    news5.style.display = "none";
    news6.style.display = "block";
});
sportFilter.addEventListener("click", () => {
    news1.style.display = "block";
    news2.style.display = "none";
    news3.style.display = "none";
    news4.style.display = "none";
    news5.style.display = "block";
    news6.style.display = "none";
});
artsCultureFilter.addEventListener("click", () => {
    news1.style.display = "none";
    news2.style.display = "none";
    news3.style.display = "block";
    news4.style.display = "none";
    news5.style.display = "none";
    news6.style.display = "none";
});
technologyFilter.addEventListener("click", () => {
    news1.style.display = "none";
    news2.style.display = "none";
    news3.style.display = "none";
    news4.style.display = "none";
    news5.style.display = "none";
    news6.style.display = "none";
});
researchFilter.addEventListener("click", () => {
    news1.style.display = "none";
    news2.style.display = "block";
    news3.style.display = "none";
    news4.style.display = "none";
    news5.style.display = "none";
    news6.style.display = "none";
});