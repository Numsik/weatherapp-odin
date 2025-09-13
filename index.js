


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
    let feelslike = data.currentConditions.feelslike

    const howmuch = document.querySelector('.weatherhowmuch');
    const countryhtml = document.querySelector('.namecountry');
    const feelhtml = document.querySelector('.feeltext');

    countryhtml.textContent = `${adress}`
    howmuch.textContent = `${temp} °C`
    feelhtml.textContent = `${feelslike} °C`



    document.querySelector('.fahrenheitbtn').addEventListener('click', () =>{
        if (!someusshit){
            let fahrenheit = temp * (9/5) + 32
            let fahrenheitfeel = feelslike * (9/5) + 32
            howmuch.textContent = `${Math.round(fahrenheit)} F`
            feelhtml.textContent = `${Math.round(fahrenheitfeel)} F`
            someusshit = true;
        }
    });
    document.querySelector('.celciusbtn').addEventListener('click', () =>{
        if (someusshit){
            howmuch.textContent = `${temp} °C`
            feelhtml.textContent = `${feelslike} °C`
            someusshit = false
        }
        
    });


   

}
getapi("Pardubice");

document.querySelector('.send').addEventListener('click', () =>{
    const input = document.querySelector('.nameofcity')
    const nameofcity = input.value
    getapi(nameofcity);
    input.value = ""

});
