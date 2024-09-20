// Target our HTML with JavaScript
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const serviceList = document.querySelector('#service-list ul');
const serviceDetails = document.querySelector('#service__details');
const imageDiv = document.querySelector('#service-image');
const priceDiv = document.querySelector('#service-price');
const availableSessionSlotsDiv = document.querySelector('#available-session-slots');
const bookNowBtn = document.querySelector('#book-now');

imageDiv.style.height = "400px";
imageDiv.style.width = "400px";

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Search service
function search_service() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let services = serviceList.getElementsByTagName('li');
    for (let service of services) {
        if (!service.innerHTML.toLowerCase().includes(input)) {
            service.style.display = "none";
        } else {
            service.style.display = "list-item";
        }
    }
}

// Render a single service
function renderOneService(service) {
    let listItem = document.createElement('li');
    listItem.innerText = service.service_name; // Adjust according to your data structure
    serviceList.appendChild(listItem);

    listItem.addEventListener('click', () => {
        imageDiv.src = service.image; // Ensure 'image' is a valid URL
        priceDiv.textContent = `Service Price: ${service.price}`;
        availableSessionSlotsDiv.textContent = `Available Session Slots: ${service.session_slots - service.booked_slots}`;

        bookNowBtn.onclick = (e) => {
            e.preventDefault();
            if (updateAvailableSlots(service, 1)) {
                service.booked_slots += 1; // Update booked slots
                const message = document.createElement("p");
                message.textContent = "You have secured a slot.";
                availableSessionSlotsDiv.appendChild(message);
            } else {
                availableSessionSlotsDiv.textContent = `All sessions booked!`;
            }
        };
    });
}

// Fetch all services
function getAllServices() {
    fetch('http://localhost:5000/services')  // Change to match your JSON server's port
        .then(res => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        })
        .then(services => {
            console.log('Services fetched:', services);
            services.forEach(service => renderOneService(service));
        })
        .catch(error => console.error('Error fetching services:', error));
}

// Initialize
function initialize() {
    getAllServices();
}

// Update available slots
function updateAvailableSlots(service, slotsBooked) {
    const remainingSlots = service.session_slots - service.booked_slots;
    if (remainingSlots < slotsBooked) return false;
    availableSessionSlotsDiv.textContent = `Available Session Slots: ${remainingSlots - slotsBooked}`;
    return true;
}

// Form handling
let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let service = {
        service_name: document.getElementById("service").value,
        image: document.getElementById("image-url").value,
        session_slots: Number(document.getElementById("session-slots").value),
        booked_slots: Number(document.getElementById("booked-slots").value),
        price: document.getElementById("session-price").value
    };
    addService(service);
});

// Start the app
initialize();
