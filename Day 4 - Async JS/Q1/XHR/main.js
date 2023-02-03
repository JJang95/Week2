
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhr.onreadystatechange = function() {

    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

        let data = JSON.parse(this.responseText);

        let table = document.getElementById("tables");

        data.forEach(user => {
            
            let rowData = document.createElement("tr");

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
            companyData.innerHTML = user.company.name + "<br><br>" + user.company.catchPhrase + "<br><br>" + user.company.bs;

            rowData.appendChild(idData);
            rowData.appendChild(nameData);
            rowData.appendChild(usernameData);
            rowData.appendChild(emailData);
            rowData.appendChild(addressData);
            rowData.appendChild(phoneData);
            rowData.appendChild(websiteData);
            rowData.appendChild(companyData);
            table.appendChild(rowData);
        });
    } else {
        console.error("Error");
    }
};

xhr.send();
