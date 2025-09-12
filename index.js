


async function getapi(city){
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=uk&key=LHN49XJPS5H5JJ5N64RMQQT7C&contentType=json`)


    if (!response.ok){
        throw new Error("Chyba pico");
        
    }
    let data = await response.json();
    console.log(data)
    
   
    let someusshit = false;
    let adress = data.address
    let temp = data.currentConditions.temp

    const howmuch = document.querySelector('.weatherhowmuch');
    const countryhtml = document.querySelector('.namecountry');

    countryhtml.textContent = `In this country is ${adress}`
    howmuch.textContent = `${temp} °C`


    document.querySelector('.teplota').addEventListener('click', () =>{
        if (someusshit){
            howmuch.textContent = `${temp} °C`
            document.querySelector('.teplota').innerHTML = "Celcius"
            someusshit = false;
        }else{
            someusshit = true;
            let fahrenheit = temp * (9/5) + 32
            howmuch.textContent = `${Math.round(fahrenheit)} F`
            document.querySelector('.teplota').innerHTML = 'fahrenheit'
        }

    })


   

}
getapi("Pardubice");

document.querySelector('.send').addEventListener('click', () =>{
    const input = document.querySelector('.nameofcity')
    const nameofcity = input.value
    getapi(nameofcity);
    input.value = ""

});
