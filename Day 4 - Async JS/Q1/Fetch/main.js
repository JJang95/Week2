fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())

    .then(data => {

    let tableBody = document.getElementById("table-body");
    data.forEach(user => {

        let row = document.createElement("tr");

        let idCell = document.createElement("td");

        idCell.innerText = user.id;

        let nameCell = document.createElement("td");
        nameCell.innerText = user.name;

        let usernameCell = document.createElement("td");
        usernameCell.innerText = user.username;

        let emailCell = document.createElement("td");
        emailCell.innerText = user.email;

        let addressCell = document.createElement("td");
        addressCell.innerHTML = user.address.street + "<br>" + user.address.suite + "<br>" + user.address.city + "<br>" + user.address.zipcode + "<br><br>Latitude: " 
        + user.address.geo.lat + "<br>Longitude: " + user.address.geo.lng;

        let phoneCell = document.createElement("td");
        phoneCell.innerText = user.phone;

        let websiteCell = document.createElement("td");
        websiteCell.innerText = user.website;

        let companyCell = document.createElement("td");
        companyCell.innerHTML =  user.company.name + "<br><br>" + user.company.catchPhrase + "<br><br>" + user.company.bs;

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(usernameCell);
        row.appendChild(emailCell);
        row.appendChild(addressCell);
        row.appendChild(phoneCell);
        row.appendChild(websiteCell);
        row.appendChild(companyCell);
        tableBody.appendChild(row);
    });
})

    .catch(error => {
    console.error(error);
    });
