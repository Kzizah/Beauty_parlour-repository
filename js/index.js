// Target our html with JavaScript
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const serviceList = document.querySelector('#service-list ul');
const serviceDetails = document.querySelector('#service__details');
const imageDiv = document.querySelector('#service-image'); //This is the service image
const priceDiv = document.querySelector('#service-price');
// const ticketDiv = document.querySelector('#film-tickets');
const bookNowBtn = document.querySelector('#book-now');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// Add an eventistener to toggle the two classes.
// Call the mobileMenu function
menu.addEventListener('click', mobileMenu);

getFirstFilm()
initialize();
//DOM renders 
function renderOneService(service){
   //Create list item for each film
   let listItem = document.createElement('li');
   let availableSlots = service.session_slots - service.booked_slots;
   listItem.innerText = `${service.service_name}`;
   listItem.addEventListener('click', () => {
    //Display film Details
    imageDiv.src = service.image;
    priceDiv.textContent = `Service Price in $: ${service.price}`;
    availableSlots.textContent = `Available Session Slots: ${slotsRemaining}`;
      // Event listener for buy ticket button clicks
  bookNowBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("boooked Session!");
    slotsRemaining -= 1;
    if(slotsRemaining <= 0){
        availableSlots.textContent = `All Sessions Booked!` 
    }else{
            availableSlots.textContent = `Available Session Slots : ${slotsRemaining}` 
    }
    
  });
   });
   serviceList.appendChild(listItem);
}


