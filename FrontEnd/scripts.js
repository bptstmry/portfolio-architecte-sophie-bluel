// ----------------------------------------------------------------
// (1.1) Function to fetch data from the API
async function fetchData() {
  try {
    // Fetch data from the specified API
    const r = await fetch("http://localhost:5678/api/works", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY",
      },
    });

    // Convert the response to JSON format
    const data = await r.json();
    console.log(data);
    
    // - function callback -
    displayData(data);
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
}
// ----------------------------------------------------------------
// (1.1) Function to display the data in the HTML document
function displayData(data) {
  const dataContainer = document.querySelector(".gallery");

  // Loop through the fetched data and create HTML elements for each item
  for (let i = 0; i < data.length; i++) {
    const listItem = document.createElement("figure");
    listItem.innerHTML = `<img src="${data[i].imageUrl}" alt="Image">`;

    const textElement = document.createElement("figcaption");
    textElement.innerHTML = `${data[i].title}`;

    listItem.appendChild(textElement);
    dataContainer.appendChild(listItem);
  }
}
// ----------------------------------------------------------------
// (1.1) Fetch data when the script is executed
fetchData();
