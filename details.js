
const countryname = new URLSearchParams(location.search).get('name');


async function getCountries(){
     const data = await fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`);
     const response = await data.json();
     console.log(response[0]);
     displayCountry(response[0])

}

getCountries();

const flagImg = document.querySelector('#image');
const modal = document.querySelector('.modal')
const h2 = document.querySelector('#h2');
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLeveldomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')

function displayCountry(data) {
    flagImg.src = data.flags.svg;
    h2.innerHTML = data.name.common;
    population.innerHTML = data.population; 
    region.innerHTML = data.region;
    subRegion.innerHTML = data.subregion;
    capital.innerHTML = data.capital;
    topLeveldomain.innerHTML = data.tld[0] ;
    /* if(data.name.nativeName) {
        nativeName.innerHTML = object.values(data.name.nativeName)[0].common;
    } else {
        nativeName.innerHTML = data.name.common
    }
   
    if (data.currencies) {
        currencies.innerHTML = object.values(data.currencies).map((currency) => currency.name).join(', ')
    }
    if (data.languages) {
        languages.innerHTML = object.values(data.currencies).join(', ')
    } */
}


// toggle dark & light mode function
var moon = document.querySelector(".fa-moon");
moon.addEventListener('click', toggleMode)

function toggleMode() {
     document.body.classList.toggle('dark');
     moon.classList.toggle('fas');
     dropdown.classList.toggle("div-dark");
     
}