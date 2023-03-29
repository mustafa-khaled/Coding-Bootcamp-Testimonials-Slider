const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const img = document.getElementById("img");
const body = document.getElementById("body");
const name = document.getElementById("name");
const work = document.getElementById("work");

const users = [
    {
        name: "Tanya Sinclair",
        work: "UX Engineer",
        body: `“ I’ve been interested in coding for a while but never taken the jump, until now.
        I couldn’t recommend this course enough.I’m now in the job of my dreams and so
        excited about the future. ”`,
        image: "./images/image-tanya.jpg"
    },
    {
        name: "John Tarkpor",
        work: "Junior Front-end Developer",
        body: `“ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ” ”`,
        image: "./images/image-john.jpg"
    }
]


let currentIndex = 0; // start with first user

function showUser() {
    name.innerText = users[currentIndex].name;
    work.innerText = users[currentIndex].work;
    body.innerText = users[currentIndex].body;
    img.src = users[currentIndex].image;
}

function nextUser() {
    currentIndex = (currentIndex + 1) % users.length; // increment index, wrap around to 0 if necessary
    showUser();
}

function prevUser() {
    currentIndex = (currentIndex - 1 + users.length) % users.length; // decrement index, wrap around to last index if necessary
    showUser();
}

// add event listeners to buttons
nextBtn.addEventListener("click", nextUser);
prevBtn.addEventListener("click", prevUser);

// initial content display
showUser();
