const url="https://api.openweathermap.org/data/2.5/"
const key= "8b2909f4f3fbd951d9777696fc4e1fb0"
const searchBar=document.getElementById("searchBar");
searchBar.addEventListener("keypress",click)

function click(e){
    if(e.keyCode=="13"){
        getResult(searchBar.value)
    }
}

//https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

const getResult=(cityName)=>{
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    

    fetch(query)
    .then(weather=>weather.json())
    .then(displayResult)
    .catch(error=>console.log(error))
}
const displayResult=(result)=>{
    console.log(result);
    let city=document.querySelector(".city");
    city.innerText=`${result.name},${result.sys.country}`


    let temp=document.querySelector(".temp");
    //temp.innerText=`${result.main.temp} C`
    temp.innerText=`${Math.round(result.main.temp)} C`

    let desc=document.querySelector(".desc");
    desc.innerText=result.weather[0].description

    let minmax=document.querySelector(".minmax");
    minmax.innerText=`${Math.round(result.main.temp_min)} C/${Math.round(result.main.temp_max)} C` 
    
}