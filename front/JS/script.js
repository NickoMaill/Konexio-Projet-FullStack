const list = document.querySelector("#countryList");
const btn = document.querySelector("#btnShowData");
const input = document.querySelector("#req").value;
const url = `https://restcountries.com/v3.1/all`;

console.log(input)

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

                let capital = `Capital : ${country.capital}`;
                let liCapital = document.createElement("li");
                liCapital.className = "data";
                liCapital.textContent = capital;

                let region = `Region : ${country.region}`;
                let liRegion = document.createElement("li");
                liRegion.className = "data";
                liRegion.textContent = region;

                let subRegion = `Subregion : ${country.subregion}`;
                let liSubRegion = document.createElement("li");
                liSubRegion.className = "data";
                liSubRegion.textContent = subRegion;

                // let money = `Money : ${country.currencies.name} ${country.currencies.symbol}`;
                // let liMoney = document.createElement("li");
                // liMoney.className = "data";
                // liMoney.textContent = money;
                
                for (currency in country.currencies) {
                    
                    let money = `Money : ${country.currencies[currency].name} "${country.currencies[currency].symbol}"  `
                    let liMoney = document.createElement("li");
                    liMoney.className = "data";
                    liMoney.textContent = money;
                    ul.insertAdjacentElement("beforeend", liMoney)
                    //console.log(liMoney);
                }
                
                
                list
                .appendChild(liCountry)
                .appendChild(ul)
                .appendChild(liCapital)
                .insertAdjacentElement("afterend", liRegion)
                .insertAdjacentElement("afterend", liSubRegion)
                // .insertAdjacentElement("afterend", liMoney);
                
                
            });



        });
        
};

//btn.addEventListener("click", (getAllCountries));
