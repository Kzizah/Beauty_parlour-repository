# ZILDAI BEAUTY PARLOUR

### AUTHOR: *JELIZA SILATEI*

## Behavior Driven Development for Service Booking Application
This is a web application that allows users to book various services. In this application, users can view a list of services and book a session for a specific service.

## Getting Started
To get started with this project, follow these steps:

1. ```Clone this repository to your local machine.```
2. ```Install the necessary dependencies by running npm install.```
3. ```Start the development server by running npm start.```
4. ```Open your web browser and navigate to http://localhost:3000.```

## Features
* Display mobile menu
* Search for a specific service
* Display service details when a service is clicked
* Buy a ticket for a service
* Add a new service to the list

# **User Stories**
## Display Mobile Menu
As a ```*user*```, I want to be able to access the menu on my mobile device, so I can easily navigate the application.

### Scenario
Given I am on the home page
When I click on the mobile menu icon in the top-right corner of the page
Then the menu should expand and show the menu links

## Search for a Specific Service
As a ```*user*```, I want to search for a specific service, so I can quickly find the service I'm interested in.

### Scenario
Given I am on the home page
When I enter the name of a service in the search bar
Then the list of services should be filtered to show only services with a name that includes the search term

## Display Service Details
As a ```*user*```, I want to see the details of a service, so I can decide if I want to book a session.

### Scenario
Given I am on the home page
When I click on a service from the list of services
Then the service details (image, price, description, and available session slots) should be displayed

## Buy a Ticket for a Service
As a ```*user*```, I want to be able to book a session for a specific service, so I can reserve a spot for that service.

### Scenario
Given I am on the service details page for a specific service
When I click on the 'Book Now' button
Then a session slot should be booked for that service and the available session slots should be updated

## Add a New Service to the List
As an ```*administrator*```, I want to be able to add a new service to the list, so users can book sessions for that service.

### Scenario
Given I am an administrator
When I fill out the form to add a new service and submit the form
Then the new service should be added to the list of services

## Code Explanation
The JavaScript code does the following:

1. Selects the HTML elements for the mobile menu, search bar, service list, and service details
2. Defines the `mobileMenu` function to toggle the `'is-active'` and `'active'` classes when the `mobile menu icon` is clicked
3. Defines the `search_service` function to filter the list of services based on the search term entered in the search bar
4. Defines the  `renderOneService` function to create a list item for each service and add an event listener to display the service details and book a session
5. Defines the `getAllServices` function to fetch all services from the API and render them to the DOM using the `renderOneService` function
6. Defines the `getFirstService` function to fetch the first service from the API and render it to the DOM using the `renderOneService` function
7. Defines the `initialize` function to call the `getAllServices` function when the page loads
8. Defines the `updateAvailableSlots` function to update the available session slots for a specific service when a session is booked
9. Defines the `addService` function to add a new service to the API
10. Defines an event listener for the form submit event to add a new service to the API when the form is submitted

## Styling
The code also applies styling to the service details image in `index.js` and the whole UI in `index.css`.

## Technologies Used
* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* json-server

## Contributing
To contribute to this project, please follow these guidelines:

1. Fork this **repository**.
2. Create a new branch for your changes.
3. Make your changes and **commit** them to your branch.
4. Push your changes to your **forked repository**.

## License
This project is licensed under the MIT License. See the ``<LICENSE.md>`` file for details.

## Acknowledgements
* This project was created using the guidance of tutorials from ``<stand ups>`` and ``<standouts>`` and ``<canvas>``.
* The project was inspired by the idea of ``<Service Booking App>`` on Dribbble.