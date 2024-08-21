// event.js

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
 loop:true,
 autoplay:{
    delay:3000,
    disableOnInteraction:false,
 }
});
document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  const eventData = {
      name: document.getElementById('eventName').value,
      date: document.getElementById('eventDate').value,
      time: document.getElementById('eventTime').value,
      venue: document.getElementById('eventVenue').value,
  };

  addEventToList(eventData);
});

function addEventToList(eventData) {
  const eventList = document.getElementById('eventList');
  const listItem = document.createElement('li');
  listItem.classList.add('event-item');

  listItem.innerHTML = `
      <div class="event-details">
          <h3>${eventData.name}</h3>
          <p><strong>Date:</strong> ${eventData.date}</p>
          <p><strong>Time:</strong> ${eventData.time}</p>
          <p><strong>Venue:</strong> ${eventData.venue}</p>
      </div>
  `;

  eventList.appendChild(listItem);
}
