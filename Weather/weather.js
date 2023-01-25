
    var inputval = document.querySelector("#city_input");
    var btn = document.querySelector("#add");
    var city = document.querySelector("#city_display");
    var descrip = document.querySelector("#description");
    var temp = document.querySelector("#temp");
    var wind = document.querySelector("#wind");
    
    apik= "bfbd7651c8ec79ad51d4493db01f31ac"
    
    //temp conversion
    function conversion(val){
        return (val-273).toFixed(2)//decimal point
    }
    
    //button
        btn.addEventListener('click',()=> {{
            button();
        }});
    function button(){
        //console.log("hello world")
    
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputval.value+"&appid=" + apik)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        var nameval = data['name']
        var descrip = data.weather[0].main;
        var temperature = data["main"]["temp"]
        var windspeed = data["wind"]["speed"]
        
        city.innerHTML= `Weather of <span> ${nameval}</span>`
        temp.innerHTML= `Temperature: <span>${conversion(temperature)} C</span>`
        description.innerHTML=`Weather Conditions: <span>${descrip}</span>`
        wind.innerHTML=`Wind Speed: <span>${windspeed} km/hr</span>`}).then(()=> images(descrip))};


    function images(descrip){
        console.log(descrip);
        const description = descrip.childNodes[1].textContent;
        console.log("description")

    if (description == "Clouds"){
        console.log('check clear');
        document.getElementById("picture").style.backgroundImage = "url('cloudy1.jpg')";
    }
    if (description == "Clear"){
        document.getElementById("picture").style.backgroundImage = "url('clear1.jpg')";

    }
    if (description == "Mist"){
        document.getElementById("picture").style.backgroundImage = "url('rainy1.jpg')";
    }
    if (description == "Smoke"){
        document.getElementById("picture").style.backgroundImage = "url('cloudy3.jpg')";
    }
    if (description == "Haze"){
        document.getElementById("picture").style.backgroundImage = "url('cloudy2.jpg')";
    }
    }
    