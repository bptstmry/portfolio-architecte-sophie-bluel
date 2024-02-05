// ----------------------------------------------------------------
// (2.2) - function to send authentification
async function sendConnection() {
    const loginForm = document.querySelector(".connexion");

    loginForm.addEventListener("submit", async function (event) {

      event.preventDefault();
  
      // clear any previous error messages
      effacerMessageErreur();
  
      // create an object with email and password from form inputs
      const idAndPassword = {
        email: event.target.querySelector("[name=email]").value,
        password: event.target.querySelector("[name=password]").value,
      };
  
      const chargeUtile = JSON.stringify(idAndPassword);
      console.log(chargeUtile);
  
      try {
        const response = await fetch("http://localhost:5678/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: chargeUtile,
        });
  
        const data = await response.json();
  
        // handle the data received from the API
        handleData(data);
      } catch (error) {
        // handle errors that occurred during the fetch request
        handleError(error);
      }
    });
  }
  // ----------------------------------------------------------------
  // (2.2) function to handle the data received
  function handleData(data) {
    console.log(data);
  
    // check if the response contains a token
    if (data.token) {
      // store the token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem('loggedIn', 'true');
  
      // redirect the user to the home page
      window.location.href = "/index.html";
    } else {
      console.error("Token was not provided in the API response.");
  
      afficherMessageErreur("Erreur dans l’identifiant ou le mot de passe");
    }
  }
  // ----------------------------------------------------------------
  // (2.2) function to handle errors that occurred during the fetch request
  function handleError(error) {
    console.error("Error during the request:", error);
  
    afficherMessageErreur("Une erreur s'est produite lors de la requête.");
  }
  
  // (2.2) function to display an error message to the user
  function afficherMessageErreur(message) {
    const messageErreur = document.querySelector(".incorrect");
    const afficheMsg = document.createElement("p");
    afficheMsg.innerHTML = message;
    messageErreur.appendChild(afficheMsg);
  }
  
  // (2.2) function to clear any displayed error messages
  function effacerMessageErreur() {
    const messageErreur = document.querySelector(".incorrect");
    messageErreur.innerHTML = "";
  }
  
  sendConnection();