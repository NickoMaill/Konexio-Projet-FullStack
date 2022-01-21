
//variable for the country list data, button, and main url

const list = document.querySelector("#countryList");
const btn = document.querySelector("#btnShowData");
const loadBtn = document.querySelector("#btnLoading")
const resetBtn = document.querySelector("#resetBtn")
const url = "https://restcountries.com/v3.1/all";


//Function to get all the country data at page initialization

function getAllCountries() {

    //hide "showData" and show "Load Button" when server request

    loadBtn.classList.remove("displayNone")
    btn.className = "displayNone"


    fetch(url)
        .then(res => res.json())
        .then(data => {

            //show "showData button" and hide "loadButton" when server finish request

            loadBtn.className = "displayNone"
            btn.classList.remove("displayNone")

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
    input = input.value;

    let regionSelect = document.querySelector("#regionMenu");
    regionSelect = regionSelect.value

    let subRegionSelect = document.querySelector("#subRegionMenu");
    subRegionSelect = subRegionSelect.value

    const checkCountry = document.querySelector("#countryNameRadio");
    const checkCapital = document.querySelector("#capitalRadio");
    const checkRegion = document.querySelector("#regionRadio");
    const checkSubRegion = document.querySelector("#subRegionRadio");

    const urlCountry = `https://restcountries.com/v3.1/name/${input}`;
    const urlCapital = `https://restcountries.com/v3.1/capital/${input}`;
    const ulrRegion = `https://restcountries.com/v3.1/region/${regionSelect}`
    const ulrSubRegion = `https://restcountries.com/v3.1/region/${subRegionSelect}`
    let url2 = undefined;

    // btn.className = "displayNone"
    // btn.classList.remove("displayNone")

    //condition for input radio Country or Capital city, it clear content when another request is set

    if (checkCountry.checked === true && input !== "") {

        while (list.firstChild) {
            list.firstChild.remove()
        };

        url2 = urlCountry;

    } else if (checkCapital.checked === true && input !== "") {

        while (list.firstChild) {
            list.firstChild.remove()
        };

        url2 = urlCapital;

    } else if (checkRegion.checked === true) {

        while (list.firstChild) {
            list.firstChild.remove()
        };

        url2 = ulrRegion;

    } else if (checkSubRegion.checked === true) {

        while (list.firstChild) {
            list.firstChild.remove()
        };

        url2 = ulrSubRegion;
    }

    //condition for error, it call getAllMyFunction for reinitialize button and also made a new research
    if (input === "") {
        getAllCountries()
    }

    //hide "showData" and show "Load Button" when server request

       loadBtn.classList.remove("displayNone")
       btn.className = "displayNone"

    fetch(url2)
        .then(res => res.json())
        .then(data => {

            //guard for research

            if (data.status === 404) {
                getAllCountries()

                //don't forget ton write an error sentence here like "oups sorry it's note a Country Name"
            }

            //show "showData button" and hide "loadButton" when server finish request

            loadBtn.className = "displayNone"
            btn.classList.remove("displayNone")

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

        })

};


btn.addEventListener("click", (getMyCountries));

//reset button also load the initial function (getAllMyCountries())

resetBtn.addEventListener("click", () => {

    while (list.firstChild) {
        list.firstChild.remove()
    };

    getAllCountries();

})

// loadBtn.classList.remove("displayNone")
// btn.className = "displayNone"