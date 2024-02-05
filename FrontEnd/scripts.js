// ----------------------------------------------------------------
// (1.1) - function to fetch data from the API
async function fetchData() {
  try {
    // fetch data from the specified API
    const r = await fetch("http://localhost:5678/api/works", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY",
      },
    });

    // convert the response to JSON format
    const data = await r.json();
    console.log(data);

    // - function callback -
    displayData(data);
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
}
// ----------------------------------------------------------------
// (1.1) - function to display the data in the HTML document
function displayData(data) {
  const dataContainer = document.querySelector(".gallery");

  // loop through the fetched data and create HTML elements for each item
  for (let i = 0; i < data.length; i++) {
    const listItem = document.createElement("figure");
    listItem.innerHTML = `<img src="${data[i].imageUrl}" alt="Image">`;

    const textElement = document.createElement("figcaption");
    textElement.innerHTML = `${data[i].title}`;

    listItem.appendChild(textElement);
    dataContainer.appendChild(listItem);
  }

  // (1.2) - set up EventListeners for filter buttons and handle filtered data display
  const boutonallFiltrer = document.querySelector(".all");
  boutonallFiltrer.addEventListener("click", function () {
    const allFiltrees = data.filter(function (data) {
      return data.categoryId <= 3;
    });
    console.log(allFiltrees);
    displayFilteredData(allFiltrees);
  });

  const boutonobjectsFiltrer = document.querySelector(".objects");
  boutonobjectsFiltrer.addEventListener("click", function () {
    const objetsFiltrees = data.filter(function (data) {
      return data.categoryId == 1;
    });
    console.log(objetsFiltrees);
    displayFilteredData(objetsFiltrees);
  });

  const boutonaparmentsFiltrer = document.querySelector(".apartments");
  boutonaparmentsFiltrer.addEventListener("click", function () {
    const apartmentsFiltrees = data.filter(function (data) {
      return data.categoryId == 2;
    });
    console.log(apartmentsFiltrees);
    displayFilteredData(apartmentsFiltrees);
  });

  const boutonhandrFiltrer = document.querySelector(".handr");
  boutonhandrFiltrer.addEventListener("click", function () {
    const handrFiltrees = data.filter(function (data) {
      return data.categoryId == 3;
    });
    console.log(handrFiltrees);
    displayFilteredData(handrFiltrees);
  });
}
// ----------------------------------------------------------------
// (1.2) - function to display filtered data in the HTML document
function displayFilteredData(filteredData) {
  const dataContainer = document.querySelector(".gallery");

  dataContainer.innerHTML = "";

  // loop through the filtered data and create HTML elements for each item
  for (let i = 0; i < filteredData.length; i++) {
    const listItem = document.createElement("figure");
    listItem.innerHTML = `<img src="${filteredData[i].imageUrl}" alt="Image">`;

    const textElement = document.createElement("figcaption");
    textElement.innerHTML = `${filteredData[i].title}`;

    listItem.appendChild(textElement);
    dataContainer.appendChild(listItem);
  }
}
// ----------------------------------------------------------------
// (1.1) - fetch data when the script is executed
fetchData();
