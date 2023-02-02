fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())

    .then(data => {

    let tableInput = document.getElementById("tables");
    data.forEach(user => {

        let row = document.createElement("tr");

        let idData = document.createElement("td");

        idData.innerText = user.id;

        let nameData = document.createElement("td");
        nameData.innerText = user.name;

        let usernameData = document.createElement("td");
        usernameData.innerText = user.username;

        let emailData = document.createElement("td");
        emailData.innerText = user.email;

        let addressData = document.createElement("td");
        addressData.innerHTML = user.address.street + "<br>" + user.address.suite + "<br>" + user.address.city + "<br>" + user.address.zipcode + "<br><br>Latitude: " 
        + user.address.geo.lat + "<br>Longitude: " + user.address.geo.lng;

        let phoneData = document.createElement("td");
        phoneData.innerText = user.phone;

        let websiteData = document.createElement("td");
        websiteData.innerText = user.website;

        let companyData = document.createElement("td");
        companyData.innerHTML =  user.company.name + "<br><br>" + user.company.catchPhrase + "<br><br>" + user.company.bs;

        row.appendChild(idData);
        row.appendChild(nameData);
        row.appendChild(usernameData);
        row.appendChild(emailData);
        row.appendChild(addressData);
        row.appendChild(phoneData);
        row.appendChild(websiteData);
        row.appendChild(companyData);
        tableInput.appendChild(row);
    });
})

    .catch(error => {
    console.error(error);
    });
