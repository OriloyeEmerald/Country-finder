
const countryname = new URLSearchParams(location.search).get('name');


async function getCountries(){
     const data = await fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`);
     const response = await data.json();
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
    function extractCommonName(data) {
        const nativename = data.nativeName;
        for(const langCode in nativename) {
            if(nativename[langCode].common) {
                return nativename[langCode].common
            }
        }
        return null;
    }
    const commonName = extractCommonName(data.name)
    nativeName.innerHTML = commonName

    
    function extractCurrencies(data) {
        const curr = data.currencies;
        for(const currency in curr) {
            if(curr[currency].name) {
                return curr[currency].name
            }
        }
        return null;
    }
    const currName = extractCurrencies(data)
    currencies.innerHTML = currName;

    function extractLanguages(data) {
        const lang = data.languages;
        for(const language in lang) {
            if(lang[language]) {
                return lang[language]
            }
        }
        return null;
    }
    const langName = extractLanguages(data)
    languages.innerHTML = langName;

    
}


// toggle dark & light mode function
var moon = document.querySelector(".fa-moon");
moon.addEventListener('click', toggleMode)

function toggleMode() {
     document.body.classList.toggle('dark');
     moon.classList.toggle('fas');
     
}