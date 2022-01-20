const list = document.querySelector("#countryList");
const btn = document.querySelector("#btnShowData");
const url = "https://restcountries.com/v3.1/all";

function getAllCountries() {

    fetch(url)
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
                //console.log(country.languages);
                // const proLang = Object.getOwnPropertySymbols(languages)
                // console.log(proLang.length);
            }
            
            for (currency in country.currencies) {
                
                let money = `Monaie : ${country.currencies[currency].name} "${country.currencies[currency].symbol}"`
                let liMoney = document.createElement("li");
                liMoney.className = "data";
                liMoney.textContent = money;
                ul.insertAdjacentElement("beforeend", liMoney)
                //console.log(liMoney);
            }
            
        });
        
    });
    
};

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
                //console.log(country.languages);
            };
            
            for (currency in country.currencies) {
                
                let money = `Monaie : ${country.currencies[currency].name} "${country.currencies[currency].symbol}"`
                let liMoney = document.createElement("li");
                liMoney.className = "data";
                liMoney.textContent = money;
                ul.insertAdjacentElement("beforeend", liMoney)
                //console.log(liMoney);
            };
            
        });
        
    });
    
};

btn.addEventListener("click", (getMyCountries));