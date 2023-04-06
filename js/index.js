// Target our html with JavaScript
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const serviceList = document.querySelector('#service-list ul');
const serviceDetails = document.querySelector('#service__details');
const imageDiv = document.querySelector('#service-image'); //This is the service image
const priceDiv = document.querySelector('#service-price');
const descriptionDiv = document.querySelector('#service-description');
// const ticketDiv = document.querySelector('#film-tickets');
const bookNowBtn = document.querySelector('#book-now');
imageDiv.style.height ="100px";
imageDiv.style.width ="100px";
// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// Add an eventistener to toggle the two classes.
// Call the mobileMenu function
menu.addEventListener('click', mobileMenu);

getFirstService()
initialize();
//DOM renders 
function renderOneService(service){
   //Create list item for each service
   let listItem = document.createElement('li');
   let availableSessionSlots = service.session_slots - service.booked_slots;
   listItem.innerText = `${service.service_name}`;
   listItem.addEventListener('click', () => {
    //Display service Details
    imageDiv.src = service.image;
    priceDiv.textContent = `Service Price: ${service.price}`;
    descriptionDiv.textContent = `Description: ${service.description}`
    availableSessionSlots.textContent = `Available Session Slots: ${availableSessionSlots}`;
      
    // Event listener for buy ticket button clicks
    bookNowBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("boooked Session!");
    availableSessionSlots -= 1;
    if(availableSessionSlots <= 0){
        availableSessionSlots.textContent = `All Sessions Booked!` 
    }else{
            availableSessionSlots.textContent = `Available Session Slots : ${availableSessionSlots}` 
    }
    
  });
   });
   serviceList.appendChild(listItem);
}

// Fetch all services
function getAllServices(){
    fetch('http://localhost:3000/services')
    .then(res => res.json())
    .then(services => services.forEach(service => {
        renderOneService(service)
        // updateAvailablesSlots(service)
    }))
}

//Fetch Requests
//Get Fetch for one service resource
function getFirstService(){
    fetch('http://localhost:3000/services/1')
    .then(res => res.json())
    .then(films => renderOneService(services[0]))
}

//Initialize Render- It will be the first thing that loads from our index js
//Get Data and load/Render our films to the DOM 
function initialize(){
    getAllServices();
}

// Function to update the available tickets on the frontend
function updateAvailableSlots(service, slotsBooked) {
    // const ticketDiv = document.querySelector(`#film-tickets`);
    // const availableTickets = film.capacity - film.tickets_sold;
    // const newAvailableTickets = availableTickets - ticketsBought;
    // if (newAvailableTickets < 0) {
    //   // Can't buy more tickets than are available
    //   return false;
    // }
    // ticketDiv.textContent = `Available Tickets: ${newAvailableTickets}`;
    // return true;
  }


