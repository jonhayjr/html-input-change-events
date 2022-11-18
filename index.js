const input = document.querySelectorAll("input");

const firstNameBox = document.getElementById('firstName-value');
const lastNameBox = document.getElementById('lastName-value');

input.forEach(i => {
    i.addEventListener("change", (e) => {

        if (e.target.name === "firstName") {
            firstNameBox.textContent = "First Name: " + e.target.value;
        } else if (e.target.name === "lastName") {
            lastNameBox.textContent = "Last Name: " + e.target.value;
        }
    })
})