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
const technologyFilter = document.getElementById("technologyFilter");
const researchFilter = document.getElementById("researchFilter");

// import sport news articles
const sportNews1 = document.getElementById("sportNews1");
const sportNews2 = document.getElementById("sportNews2");


// import academic news articles
const academicNews1 = document.getElementById("academicNews1");
const academicNews2 = document.getElementById("academicNews2");


// import technology news articles
const technologyNews1 = document.getElementById("technologyNews1");
const technologyNews2 = document.getElementById("technologyNews2");



// import research and innovation news articles
const innovationNews1 = document.getElementById("innovationNews1");
const innovationNews2 = document.getElementById("innovationNews2");



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
    window.location.href = "/Group-12-GitProject/htmlFiles/Contact_page.html";
});
function resetFilterButtons(filterButton) {
    filterButton.style.backgroundColor = "#F5F5F5";
    filterButton.style.color = "black";
}
// filter buttons event listeners
sportNews1.style.display = "block";
innovationNews1.style.display = "block";
academicNews1.style.display = "block";
technologyNews1.style.display = "block";
academicNews2.style.display = "block";
technologyNews2.style.display = "block";

allNewsFilter.addEventListener("click", () => {
    resetFilterButtons(academicFilter);
    resetFilterButtons(sportFilter);
    resetFilterButtons(technologyFilter);
    resetFilterButtons(researchFilter);
    allNewsFilter.style.backgroundColor = "#6B1414";
    allNewsFilter.style.color = "white";
    for(let i=1; i<=6; i++){
        document.getElementById("sportNews" + String(i)).style.display = "none";
        document.getElementById("innovationNews" + String(i)).style.display = "none";
        document.getElementById("academicNews" + String(i)).style.display = "none";
        document.getElementById("technologyNews" + String(i)).style.display = "none";
    }
    sportNews1.style.display = "block";
    innovationNews1.style.display = "block";
    academicNews1.style.display = "block";
    technologyNews1.style.display = "block";
    academicNews2.style.display = "block";
    technologyNews2.style.display = "block";
});
academicFilter.addEventListener("click", () => {
    resetFilterButtons(allNewsFilter);
    resetFilterButtons(sportFilter);
    resetFilterButtons(technologyFilter);
    resetFilterButtons(researchFilter);
    academicFilter.style.backgroundColor = "#6B1414";
    academicFilter.style.color = "white";
    for(let i=1; i<=6; i++){
        document.getElementById("sportNews" + String(i)).style.display = "none";
        document.getElementById("innovationNews" + String(i)).style.display = "none";
        document.getElementById("academicNews" + String(i)).style.display = "block";
        document.getElementById("technologyNews" + String(i)).style.display = "none";
    }
    
});
sportFilter.addEventListener("click", () => {
    resetFilterButtons(allNewsFilter);
    resetFilterButtons(academicFilter);
    resetFilterButtons(technologyFilter);
    resetFilterButtons(researchFilter);
    sportFilter.style.backgroundColor = "#6B1414";
    sportFilter.style.color = "white";
    for(let i=1; i<=6; i++){
        document.getElementById("sportNews" + String(i)).style.display = "block";
        document.getElementById("innovationNews" + String(i)).style.display = "none";
        document.getElementById("academicNews" + String(i)).style.display = "none";
        document.getElementById("technologyNews" + String(i)).style.display = "none";
    }
});

technologyFilter.addEventListener("click", () => {
    resetFilterButtons(allNewsFilter);
    resetFilterButtons(academicFilter);
    resetFilterButtons(sportFilter);
    resetFilterButtons(researchFilter);
    technologyFilter.style.backgroundColor = "#6B1414";
    technologyFilter.style.color = "white";
    for(let i=1; i<=6; i++){
        document.getElementById("sportNews" + String(i)).style.display = "none";
        document.getElementById("innovationNews" + String(i)).style.display = "none";
        document.getElementById("academicNews" + String(i)).style.display = "none";
        document.getElementById("technologyNews" + String(i)).style.display = "block";
    }
});
researchFilter.addEventListener("click", () => {
    resetFilterButtons(allNewsFilter);
    resetFilterButtons(academicFilter);
    resetFilterButtons(sportFilter);
    resetFilterButtons(technologyFilter);
    researchFilter.style.backgroundColor = "#6B1414";
    researchFilter.style.color = "white";
    for(let i=1; i<=6; i++){
        document.getElementById("sportNews" + String(i)).style.display = "none";
        document.getElementById("innovationNews" + String(i)).style.display = "block";
        document.getElementById("academicNews" + String(i)).style.display = "none";
        document.getElementById("technologyNews" + String(i)).style.display = "none";
    }

});