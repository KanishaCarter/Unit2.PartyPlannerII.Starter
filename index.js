/* ## Requirements

For this workshop, you'll be starting from scratch! You are highly encouraged to reference previous solutions. Write JS to build an application that meets the following requirements:

- The application updates state by fetching an array of parties from the API.
- The application renders a list of party names.
- When a party name is clicked on, the application updates state by fetching information about a single party from the API.
- The application renders the name, ID, date, description, and location of the selected party.
- The application renders a message telling users to select a party if none is selected.
- Functions are used to organize logic involving state changes.
- The application is rerendered whenever state changes.
- UI elements are organized into component functions.
- All thrown errors are explicitly caught with a try...catch statement.
*/

const body = document.querySelector("body");
const container = document.createElement("div");
body.appendChild(container);
container.innerHTML = `
<h1>Parties list</h1>
<ul></ul>
`;
const ul = document.querySelector("ul");
const li = document.createElement("li");

// async function fetches array of parties from Api
async function getEvents() {
    try {
        const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503-FTB-ET-WEB-PT/events`);
        const data = await response.json();
        const events = data.data;
        return events;
    } catch (error) {
        console.error(error.message);
    }
}

async function displayEvents(){
    try {
        const result = await getEvents();
        const events = result;
        for (let i = 0; i < events.length; i++) {
            const li = document.createElement("li");
            li.textContent = events[i].name;
            ul.appendChild(li);
        };
    } catch (error) {
        console.error(error.message);
        li.textContent = `Error loading content ${error.message}`;
    }
}

async function clickedEvent(){
    const result = 
}
    
displayEvents();