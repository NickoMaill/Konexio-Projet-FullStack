const list = document.querySelector("#list");
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
                let ulCountry = document.createElement("ul");
                liCountry.textContent = countryName;

                let capital = `Capital : ${country.capital}`;
                let liCapital = document.createElement("li");;
                liCapital.textContent = capital;

                let region = `Region : ${country.region}`;
                let liRegion = document.createElement("li");
                liRegion.textContent = region;

                let subRegion = `Subregion : ${country.subregion}`;
                let liSubRegion = document.createElement("li");
                liSubRegion.textContent = subRegion;

                // let language = `Langue : ${country.languages.language}`;
                // let liLanguage = document.createElement("li");
                // liLanguage.textContent = language;

                // console.log(liLanguage);

                list
                    .appendChild(liCountry)
                    .appendChild(ulCountry)
                    .appendChild(liCapital)
                    .insertAdjacentElement("afterend", liRegion)
                    .insertAdjacentElement("afterend", liSubRegion)
                // .insertAdjacentElement("afterend", liLanguage)


            });



        });
        
};

//btn.addEventListener("click", (getAllCountries));
