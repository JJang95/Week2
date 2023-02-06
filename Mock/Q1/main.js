const API_URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

async function fetchData() {

    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data;
}

function displayData(data) {

    const populationData = document.getElementById("population-data");
    let populationHtml = "";
    let totalPopulation = 0;

    data.forEach(function(item) {
        populationHtml += `
        <tr>
            <td>${item.Year}</td>
            <td>${item.Population}</td>
        </tr>
        `;
        totalPopulation += item.Population;
    });

    populationData.innerHTML = populationHtml;
    document.getElementById("average-population").innerHTML = Math.floor(
        totalPopulation / data.length
    );
}

function sortData(order) {

    const data = Array.from(document.querySelectorAll("#population-data tr"));

    data.sort(function(a, b) {

        const yearA = parseInt(a.querySelector("td").textContent);
        const yearB = parseInt(b.querySelector("td").textContent);
        return order === "ascending" ? yearA - yearB : yearB - yearA;
    });

    data.forEach(function(item) {
        document.getElementById("population-data").appendChild(item);
    });
}

async function init() {

    const data = await fetchData();
    displayData(data);

    const sortOrder = document.getElementById("sort");
    sortOrder.addEventListener("change", function() {
        sortData(this.value);
    });
}

init();