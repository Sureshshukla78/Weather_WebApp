// console.log("page is linked to weather page of weather app")
// apiLink = api.openweathermap.org/data/2.5/weather?q={country}&appid={apikey}
appid = `906e7f7ca3a60eaef0caaa1e80478411`;
// user input city name
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
// output screen cityName 
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const dataHide = document.querySelector('.middleLayer');



const getInfo = async (e) => {
    e.preventDefault();
    let cityVal = cityName.value;
    console.log(cityVal)
    if (cityVal === '') {
        console.log("text changed")
        city_name.innerText = `Please write the name before Search!`
        dataHide.classList.add('data_hide');
    } else {
        try {
            console.log('inside try');
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${appid}`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            // updating favicon according to temp status
            const tempStatus =  arrData[0].weather[0].main;           
            if (tempStatus == 'Sunny') {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            } else if (tempStatus == 'Clouds') {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#dfe4ea;'></i>";
            } else if (tempStatus == 'Rainy') {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:grey;'></i>";
            }
            dataHide.classList.remove('data_hide');

        } catch {
            console.log('inside catch');
            city_name.innerText = `Please enter cityname Correctly in Search Bar!`
            dataHide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo);