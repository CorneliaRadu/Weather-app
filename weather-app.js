window.addEventListener("load", ()=> {
    let latitude;
    let longitude;


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
           longitude = position.coords.longitude;
           latitude = position.coords.latitude;
           let temperatureDescription = document.querySelector(".temperature-description");
           let temperatureDegree = document.querySelector(".temperature-degree");
           let locationTimezone = document.querySelector(".location-timezone");
           const temperatureSection = document.querySelector('.temperature-section');
      
        const proxy = "http://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/fbb6d2489d9637d35798ddb336291930/${latitude},${longitude}`;

        fetch(api)
            .then(response =>{ 
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, summary} = data.currently;
                temperatureDegree.textContent = temperature;
            });
     
        });

    }




});