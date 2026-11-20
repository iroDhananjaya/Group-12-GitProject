const navigationTargets = {
    home: "../index.html",
    allNews: "../htmlFiles/allNews.html",
    artsCulture: "../htmlFiles/arts.html",
    about: "../htmlFiles/about.html",
    events: "../htmlFiles/ruhuna-record-events.html",
    contact: "../htmlFiles/Contact_page.html"
};

Object.entries(navigationTargets).forEach(([id, url]) => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", () => {
            window.location.href = url;
        });
    }
});

const EVENTS = [
    { m: 9, d: 22, cat: "lecture", label: "Public lecture", title: "The future of our shared planet", when: "Thursday · 5:30–7:00 p.m.", where: "Whitmore Hall, Grand Auditorium", note: "Free & open to the public", fmt: "in" },
    { m: 9, d: 24, cat: "arts", label: "Arts & performance", title: "An evening with the Ruhuna Quartet", when: "Saturday · 7:00–8:30 p.m.", where: "Bennett Center for the Arts", note: "Tickets required · Students free", fmt: "in" },
    { m: 9, d: 28, cat: "community", label: "Campus conversation", title: "Big questions, different disciplines", when: "Wednesday · 12:00–1:00 p.m.", where: "The Forum, University Library", note: "All are welcome · Lunch provided", fmt: "in" },
    { m: 9, d: 30, cat: "workshop", label: "Workshop", title: "Seeing the campus through a creative lens", when: "Friday · 2:00–4:00 p.m.", where: "Sample venue · Creative studio", note: "Sample listing · Registration information to follow", fmt: "in" },
    { m: 10, d: 3, cat: "lecture", label: "Research conversation", title: "Small materials, big questions", when: "Tuesday · 3:00–4:00 p.m.", where: "Sample format · Online conversation", note: "Sample listing · Joining information to follow", fmt: "online" },
    { m: 10, d: 6, cat: "community", label: "Community", title: "Stories from our shared spaces", when: "Friday · 4:00–5:30 p.m.", where: "Sample venue · Campus commons", note: "Sample listing · Open conversation", fmt: "in" }
];

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MONTH_ABBREVIATIONS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const state = { cat: "all", q: "", range: "all", fmt: "all", calMonth: 9, calYear: 2026 };

function filteredEvents() {
    const query = state.q.trim().toLowerCase();
    return EVENTS.filter(event =>
        (state.cat === "all" || event.cat === state.cat) &&
        (state.fmt === "all" || event.fmt === state.fmt) &&
        (state.range === "all" || (state.range === "oct" && event.m === 9) || (state.range === "nov" && event.m === 10)) &&
        (!query || (event.title + " " + event.label + " " + event.where).toLowerCase().includes(query))
    );
}

function renderEventList() {
    const items = filteredEvents();
    document.getElementById("count").textContent =
        items.length + (items.length === 1 ? " event" : " events") + " in this sample calendar";
    document.getElementById("list").innerHTML = items.length ? items.map(event => `
        <article class="event">
            <div class="datebox"><div class="m">${MONTH_ABBREVIATIONS[event.m]}</div><div class="d">${event.d}</div></div>
            <div>
                <div class="cat">${event.label}</div>
                <h3>${event.title}</h3>
                <div class="meta">${event.when} / ${event.where}</div>
                <div class="note">${event.note}</div>
            </div>
            <a class="details" href="#">Details →</a>
        </article>`).join("") : '<p class="empty">No events match your search. Try another keyword or filter.</p>';
}

function renderCalendar() {
    const month = state.calMonth;
    const year = state.calYear;
    document.getElementById("monthname").textContent = MONTHS[month] + " " + year;

    const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
    const dayCount = new Date(year, month + 1, 0).getDate();
    const markedDays = new Set(EVENTS
        .filter(event => event.m === month && year === 2026)
        .map(event => event.d));

    let html = ["M", "T", "W", "T", "F", "S", "S"]
        .map(day => `<div class="dow">${day}</div>`)
        .join("");
    for (let i = 0; i < firstDay; i++) html += "<div></div>";
    for (let day = 1; day <= dayCount; day++) {
        html += `<div class="day${markedDays.has(day) ? " has" : ""}">${day}</div>`;
    }
    document.getElementById("grid").innerHTML = html;
}

function applyFilters() {
    state.q = document.getElementById("q").value;
    state.range = document.getElementById("range").value;
    state.fmt = document.getElementById("format").value;
    renderEventList();
}

document.getElementById("chips").addEventListener("click", event => {
    const button = event.target.closest(".chip");
    if (!button) return;
    document.querySelectorAll(".chip").forEach(chip => chip.classList.remove("active"));
    button.classList.add("active");
    state.cat = button.dataset.cat;
    renderEventList();
});

document.getElementById("find").addEventListener("click", applyFilters);
document.getElementById("q").addEventListener("input", applyFilters);
document.getElementById("range").addEventListener("change", applyFilters);
document.getElementById("format").addEventListener("change", applyFilters);

document.getElementById("prev").addEventListener("click", () => {
    state.calMonth--;
    if (state.calMonth < 0) {
        state.calMonth = 11;
        state.calYear--;
    }
    renderCalendar();
});

document.getElementById("next").addEventListener("click", () => {
    state.calMonth++;
    if (state.calMonth > 11) {
        state.calMonth = 0;
        state.calYear++;
    }
    renderCalendar();
});

document.getElementById("calview").addEventListener("click", () => {
    document.querySelector(".cal").scrollIntoView({ behavior: "smooth", block: "center" });
});

renderEventList();
renderCalendar();
