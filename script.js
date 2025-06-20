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

// async function fetches array of parties from Api
async function getEvent() {
    try {
        const body = document.querySelector("body");
        const container = document.createElement("div");
        body.appendChild(container);
        container.innerHTML = `
        <ul>Parties List</ul>
        `
        const ul = document.querySelector("ul");
        const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/#tag/Events`);
        const data = response.json();
        const dataArray = [];
        dataArray.push(data);

        dataArray.map((event) => {
            const li = document.createElement("li");
            li = event.name;
            ul.appendChild(li);  
        })    
    } catch (error) {
        console.error(error.message);
    }
}

getEvent();
