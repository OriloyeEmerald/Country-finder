
// toggle regions display function
const dropHead = document.querySelector("#drophead");
const dropdown = document.querySelector("#con-div")


dropHead.addEventListener('click', toggleFunc)
function toggleFunc() {
   dropdown.classList.toggle('showDropdown');
}


// toggle dark & light mode function
const moon = document.querySelector(".fa-moon");
moon.addEventListener('click', toggleMode)

function toggleMode() {
     document.body.classList.toggle('dark');
     moon.classList.toggle('fas');
     dropdown.classList.toggle("div-dark");
     
}

// fetch images to display function
  async function fetchCountries() {
     const res = await fetch("https://restcountries.com/v3.1/all");
     const data = await res.json();
     data.map(country => {
        renderCountry(country)
     });
 }

 fetchCountries();

 const countries = document.querySelector("#countries");

function renderCountry(data) {
    const country = document.createElement('a');
    country.classList.add('country');
    country.href = `details.html?name=${data.name.common}`
    country.innerHTML = ` <div class="image">
    <img src=${data.flags.svg} alt=${data.altSpellings}>
   </div>
  <div class="info">
    <h2 class='countryName'>${data.name.common}</h2>
    <div>
        <p class="b"><b>Population:</b>${data.population}</p>
        <p class="b regionName"><b>Region:</b>${data.region}</p>
        <p class="b"><b>Capital:</b>${data.capital}</p>
        
    </div>
 </div>`
countries.appendChild(country)
}

//searchbar filter function

const searchbar = document.querySelector('#input');
const countryNames = document.getElementsByClassName('countryName');


searchbar.addEventListener('input', searchFunc)

function searchFunc(e) {
  const searchVal = e.target.value;
  Array.from(countryNames).map((country) => {
    if(country.innerHTML.toLowerCase().includes(searchVal.toLowerCase())) {
        country.parentElement.parentElement.style.display = 'grid'
    }  else {
        country.parentElement.parentElement.style.display = 'none'
     } 
     
})
}

// dropdown filter function

const regions = document.getElementsByClassName("regionName");
const continents = document.querySelectorAll(".continent");


  continents.forEach((continent) => {
    continent.addEventListener('click', () => {
        Array.from(regions).forEach((region) => {
            if(region.innerHTML.includes(continent.innerHTML)) {
                
                region.parentElement.parentElement.parentElement.style.display = 'grid'
            }  else {
                region.parentElement.parentElement.parentElement.style.display = 'none'
             } 
             
        })
       
    })
  })
    
    
    







 
