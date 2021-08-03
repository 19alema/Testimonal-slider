const reveiw = [
    {
        img: "images/image-john.jpg",
        nam: 'John Tarkpor',
        word: "  “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        job: " Junior Front-end Developer"
    },
    {
        img: "images/image-tanya.jpg",
        nam: "  Tanya Sinclair",
        word: "“ I’ve been interested in coding for a while but never taken the jump, until now. couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        job: " UX Engineer"
    }
]


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const userName = document.getElementById("name");
const jobName = document.querySelector(".job");
const image = document.querySelector(".user-img");
const infor = document.querySelector(".para");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
   showPerson()

});


function showPerson() {
    let item = reveiw[currentItem];

    userName.textContent = item.nam;
    image.src = item.img;
    infor.textContent = item.word;
    jobName.textContent = item.job
}


prevBtn.addEventListener('click', function () {
    currentItem --;
    if (currentItem < 0) {
    currentItem =   reveiw.length - 1;
  }
    showPerson();
   
})

nextBtn.addEventListener('click', function () {
       currentItem ++;
    
if (currentItem > reveiw.length-1 ) {
    currentItem = 0;
    }
  
    showPerson();
})