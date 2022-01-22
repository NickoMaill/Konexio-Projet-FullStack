
//variable for the country mainList data, button, and main url

const mainList = document.querySelector("#mainList");
const btn = document.querySelector("#btnShowData");
const loadBtn = document.querySelector("#btnLoading")
const resetBtn = document.querySelector("#resetBtn")
const url = "https://restcountries.com/v3.1/all";
const modalDiv = document.querySelector("#modalContent")
const modal = document.querySelector("#myModal");
const closeCross = document.querySelector("#close")
let errorText = "Sorry maybe you should retry whit a correct value ... 😕 "
let errorEmpty = "Sorry maybe you should type a value ... 😕 "
let modalElement = document.createElement("p")
let modalElement2 = document.createElement("p")
modalElement.className = "modalTextError"
modalElement.textContent = errorText
modalElement2.className = "modalTextError"
modalElement2.textContent = errorEmpty

/**************************************************** Function to get all the country data at page initialization ************************************************************/

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
            btn.className = "btnShow-data btn btn-outline-dark"

            /** ************************************************************************ test div ************************************************************************************* */

            data.map((country) => {

                let divList = document.createElement("div");
                divList.className = "countryContent"

                let countryName = `${country.name.common}`;
                let h3Country = document.createElement("h3");
                h3Country.className = "name";
                let ul2 = document.createElement("ul");
                ul2.className = "countryData";
                h3Country.textContent = countryName;

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

                mainList
                    .appendChild(divList)
                    .appendChild(h3Country)
                    .insertAdjacentElement("afterend", ul2)
                    .appendChild(liCapital)
                    .insertAdjacentElement("afterend", liRegion)
                    .insertAdjacentElement("afterend", liSubRegion)

                for (lang in country.languages) {

                    let languages = `Langue : ${country.languages[lang]}`
                    let liLanguages = document.createElement("li");
                    liLanguages.className = "data";
                    liLanguages.textContent = languages;
                    ul2.insertAdjacentElement("beforeend", liLanguages)
                }

                for (currency in country.currencies) {

                    let money = `Monaie : ${country.currencies[currency].name} "${country.currencies[currency].symbol}"`
                    let liMoney = document.createElement("li");
                    liMoney.className = "data";
                    liMoney.textContent = money;
                    ul2.appendChild(liMoney);
                }

                let flag = `${country.flags.png}`;
                let imgFlag = document.createElement("img");
                imgFlag.className = "flag";
                imgFlag.setAttribute("src", flag);
                divList.appendChild(imgFlag);



            });

        });

};

/****************************************** Function to get only one country data by radio select, by country name or Capital city *************************************************/

function getMyCountries() {


    let input = document.querySelector("#request");
    input = input.value;

    let regionSelect = document.querySelector("#regionMenu");
    regionSelect = regionSelect.value;

    let subRegionSelect = document.querySelector("#subRegionMenu");
    subRegionSelect = subRegionSelect.value;

    const checkCountry = document.querySelector("#countryNameRadio");
    const checkCapital = document.querySelector("#capitalRadio");
    const checkRegion = document.querySelector("#regionRadio");
    const checkSubRegion = document.querySelector("#subRegionRadio");

    const urlCountry = `https://restcountries.com/v3.1/name/${input}`;
    const urlCapital = `https://restcountries.com/v3.1/capital/${input}`;
    const ulrRegion = `https://restcountries.com/v3.1/region/${regionSelect}`;
    const ulrSubRegion = `https://restcountries.com/v3.1/region/${subRegionSelect}`;
    let url2 = undefined;

    loadBtn.classList.remove("displayNone")
    btn.className = "displayNone"

    //condition for input radio Country or Capital city, it clear content when another request is set

    if (checkCountry.checked === true && input !== "") {

        while (mainList.firstChild) {
            mainList.firstChild.remove()
        };

        url2 = urlCountry;

    } else if (checkCapital.checked === true && input !== "") {

        while (mainList.firstChild) {
            mainList.firstChild.remove()
        };

        url2 = urlCapital;

    } else if (checkRegion.checked === true) {

        while (mainList.firstChild) {
            mainList.firstChild.remove()
        };

        document.getElementById('request').value = '';
        url2 = ulrRegion;

    } else if (checkSubRegion.checked === true) {

        while (mainList.firstChild) {
            mainList.firstChild.remove()
        };

        document.getElementById('request').value = '';
        url2 = ulrSubRegion;

    }

    //condition for error, it call getAllMyFunction for reinitialize button and also made a new research

    if (input === "" && checkCountry.checked === true || checkCapital.checked === true) {

        modal.style.display = "block";

        modalDiv.appendChild(modalElement2)

        closeCross.addEventListener("click", () => {
            modal.style.display = "none";

            while (modalDiv.children) {
                modalDiv.removeChild(modalDiv.children[1])
            }

        })

        getAllCountries()
    }

    //hide "showData" and show "Load Button" when server request

    fetch(url2)
        .then(res => res.json())
        .then(data => {

            loadBtn.className = "displayNone"
            btn.classList.remove("displayNone")
            btn.className = "btnShow-data btn btn-outline-dark"

            //guard for research

            if (data.status === 404) {

                modal.style.display = "block";

                modalDiv.appendChild(modalElement)

                closeCross.addEventListener("click", () => {
                    modal.style.display = "none";

                    while (modalDiv.children) {
                        modalDiv.removeChild(modalDiv.children[1])
                    }

                })

                getAllCountries()

            };

            //show "showData button" and hide "loadButton" when server finish request

            loadBtn.className = "displayNone"
            btn.classList.remove("displayNone")

            data.map((country) => {

                let divList = document.createElement("div");
                divList.className = "countryContent"

                let countryName = `${country.name.common}`;
                let h3Country = document.createElement("h3");
                h3Country.className = "name";
                let ul2 = document.createElement("ul");
                ul2.className = "countryData";
                h3Country.textContent = countryName;

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


                mainList
                    .appendChild(divList)
                    .appendChild(h3Country)
                    .insertAdjacentElement("afterend", ul2)
                    .appendChild(liCapital)
                    .insertAdjacentElement("afterend", liRegion)
                    .insertAdjacentElement("afterend", liSubRegion)

                for (lang in country.languages) {

                    let languages = `Langue : ${country.languages[lang]}`
                    let liLanguages = document.createElement("li");
                    liLanguages.className = "data";
                    liLanguages.textContent = languages;
                    ul2.insertAdjacentElement("beforeend", liLanguages)
                }

                for (currency in country.currencies) {

                    let money = `Monaie : ${country.currencies[currency].name} "${country.currencies[currency].symbol}"`
                    let liMoney = document.createElement("li");
                    liMoney.className = "data";
                    liMoney.textContent = money;
                    ul2.appendChild(liMoney);
                }

                let flag = `${country.flags.png}`;
                let imgFlag = document.createElement("img");
                imgFlag.className = "flag";
                imgFlag.setAttribute("src", flag);

                divList.appendChild(imgFlag);
            });

        })

};

btn.addEventListener("click", (getMyCountries))

//reset button also load the initial function (getAllMyCountries())

resetBtn.addEventListener("click", () => {

    while (mainList.firstChild) {
        mainList.firstChild.remove()
    };

    getAllCountries();

});