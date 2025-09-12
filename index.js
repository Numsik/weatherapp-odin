


async function getapi(city){
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=uk&key=LHN49XJPS5H5JJ5N64RMQQT7C&contentType=json`)
    let data = await response.json();
    console.log(response)
    
    
    let adress = data.address
    console.log(adress)
   

}
getapi("Pardubice");

document.querySelector('.send').addEventListener('click', () =>{
    const input = document.querySelector('.nameofcity')
    const nameofcity = input.value
    getapi(nameofcity);
});