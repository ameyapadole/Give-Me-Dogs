const DOG_URL = "https://dog.ceo/api/breeds/image/random";

//promise is just an object. It represents a future value that we are trying to get back from the API. 
//Think Sync. 

const doggos = document.getElementById("dog-target");

function addNewDoggos(){
    const promise = fetch(DOG_URL);
    promise.then(function(response) {

        const processingPromise = response.text();
        return processingPromise;

        })

        .then(function (processedPromise){
        doggos.innerHTML = '';
        const dogObject = JSON.parse(processedPromise);
        const img = document.createElement("img");
        img.src = dogObject.message;
        img.style.display = "block";
        img.style.marginLeft ="auto";
        img.style.marginRight = "auto";
        img.style.width = "50%";
        img.alt = "Cute Doggo";
        doggos.appendChild(img);
    }) 
    .catch(function(error){
        alert("API Error")
    });
}

document.getElementById("dog-button").addEventListener("click", addNewDoggos);

