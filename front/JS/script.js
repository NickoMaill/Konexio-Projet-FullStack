
//variable for the country list data, button, and main url

const list = document.querySelector("#countryList");
const btn = document.querySelector("#btnShowData");
const url = "https://restcountries.com/v3.1/all";

//Function to get all the country data at page initialization

function getAllCountries() {

    fetch(url)
    .then(res => res.json())
    .then(data => {
        
        data.map((country) => {
            
            let countryName = `${country.name.common}`;
            let liCountry = document.createElement("li");
            liCountry.className = "name";
            let ul = document.createElement("ul");
            ul.className = "countryData";
            liCountry.textContent = countryName;
            
            let capital = `Capitale : ${country.capital}`;
            let liCapital = document.createElement("li");
            liCapital.className = "data";
            liCapital.textContent = capital;
            
            let region = `Continent : ${country.region}`;
            let liRegion = document.createElement("li");
            liRegion.className = "data";
            liRegion.textContent = region;
            
            let subRegion = `Sous-Continent : ${country.subregion}`;
            let liSubRegion = document.createElement("li");
            liSubRegion.className = "data";
            liSubRegion.textContent = subRegion;
            
            list
            .appendChild(liCountry)
            .appendChild(ul)
            .appendChild(liCapital)
            .insertAdjacentElement("afterend", liRegion)
            .insertAdjacentElement("afterend", liSubRegion)
            
            for (lang in country.languages) {
                
                let languages = `Langue : ${country.languages[lang]}`
                let liLanguages = document.createElement("li");
                liLanguages.className = "data";
                liLanguages.textContent = languages;
                ul.insertAdjacentElement("beforeend", liLanguages)
            }
            
            for (currency in country.currencies) {
                
                let money = `Monaie : ${country.currencies[currency].name} "${country.currencies[currency].symbol}"`
                let liMoney = document.createElement("li");
                liMoney.className = "data";
                liMoney.textContent = money;
                ul.insertAdjacentElement("beforeend", liMoney)
            }
            
        });
        
    });
    
};

//Function to get only one country data by radio select, by country name or Capital city

function getMyCountries() {

    let input = document.querySelector("#request");
    input = input.value
    const url2 = `https://restcountries.com/v3.1/name/${input}`;
    const url3 = `https://restcountries.com/v3.1/capital/${input}`

    fetch(url2)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        
        data.map((country) => {
            
            let countryName = `${country.name.common}`;
            let liCountry = document.createElement("li");
            liCountry.className = "name";
            let ul = document.createElement("ul");
            ul.className = "countryData";
            liCountry.textContent = countryName;
            
            let capital = `Capitale : ${country.capital}`;
            let liCapital = document.createElement("li");
            liCapital.className = "data";
            liCapital.textContent = capital;
            
            let region = `Continent : ${country.region}`;
            let liRegion = document.createElement("li");
            liRegion.className = "data";
            liRegion.textContent = region;
            
            let subRegion = `Sous-Continent : ${country.subregion}`;
            let liSubRegion = document.createElement("li");
            liSubRegion.className = "data";
            liSubRegion.textContent = subRegion;
            
            while (list.firstChild) {
                list.firstChild.remove()
            };
            
            list
            .appendChild(liCountry)
            .appendChild(ul)
            .appendChild(liCapital)
            .insertAdjacentElement("afterend", liRegion)
            .insertAdjacentElement("afterend", liSubRegion);
            
            for (lang in country.languages) {
                
                let languages = `Langue : ${country.languages[lang]}`
                let liLanguages = document.createElement("li");
                liLanguages.className = "data";
                liLanguages.textContent = languages;
                ul.insertAdjacentElement("beforeend", liLanguages)
            };
            
            for (currency in country.currencies) {
                
                let money = `Monaie : ${country.currencies[currency].name} "${country.currencies[currency].symbol}"`
                let liMoney = document.createElement("li");
                liMoney.className = "data";
                liMoney.textContent = money;
                ul.insertAdjacentElement("beforeend", liMoney)
            };
            
        });
        
    });
    
};

btn.addEventListener("click", (getMyCountries));