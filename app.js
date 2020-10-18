const axios = require("axios").default
axios.get("http://api.openweathermap.org/data/2.5/forecast?lat=55.5&lon=37.5&cnt=10&appid=b086cc4edc30fda70c61345da4662daa")
    .then((resp) => { console.log(resp) })
    .catch((error) => {
        console.log(error)
    })