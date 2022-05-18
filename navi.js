let options =
 {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(position) {
    let crd = position.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
    let loca = navigator.geolocation.getCurrentPosition(success, error, options);
  
    let enterLoca = document.querySelector('locationData')

    enterLoca.innerHTML = loca
//===========================================================================================
    let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
    let key = '8386a687f2f5376a7e8ca545f6bbc2a7';
    let lang = 'en'; 
    let units = 'imperial'; // could use Standard(Kelvin), Metric, or Imperial

    fetch(url) 
      .then((Response) => {
        if (!Response.ok) throw new Error(Response.statusText)
        return Response.json();
          })
          .then((data) => {
              app.showWeather(data);
              console.log(data);
          })
          .catch(console.error) // "console.err" logs the error internally, return displays it but kills the program
      
  },

  function getLocation: (ev) => {
    let opts = {
        enableHighAccuracy: true,
        timeout: 1000 * 10, // 10 seconds
        maximumAge: 1000 * 60 * 5, // 5 minutes
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
}