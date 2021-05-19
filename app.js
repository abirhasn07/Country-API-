fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountryName(data))

const displayCountryName = countries => {
    const countriesDiv = document.getElementById('countryDiv');
    countriesDiv.className = 'countriesContainer'

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        const countryInfo = `
                        <img src="${country.flag}" alt="" class="countryImage">
                       
                        <h1 class='h1Class'> ${ country.name}</h1>
                        <button onclick="displayCountryDetails('${country.name}')"> Details</button>
                    
                       
                        `
        countryDiv.innerHTML = countryInfo
        countryDiv.className = "countryClass";
        countriesDiv.appendChild(countryDiv)

    }

}

function displayCountryDetails(name) {

    const url = `https://restcountries.eu/rest/v2/name/${name}`

    fetch(url)
        .then(res => res.json())
        .then(data => (renderCountryInfo(data[0])))
}

function renderCountryInfo(country) {
console.log(country);
    const countryDetails = document.getElementById('countryDetails');
    countryDetails.innerHTML = `
        <img src="${country.flag}" alt="" class="countryImage">
        <h1 class="countryName">${country.name}</h1>
        <h3 class="countryPopulation">Population: ${country.population}</h3>
        <h3 class="countryArea">Area: ${country.area}</h3>
        <h3 class="countryArea">Native Name: ${country.nativeName}</h3>
        <h3 class="countryArea">Time Zone: ${country.timezones}</h3>
        <h3 class="countryArea">Region: ${country.region}</h3>
        <h3 class="countryArea">Sub-Region: ${country.subregion}</h3>

       
    
    `

    document.getElementById('countryDiv').style.display='none'

}


