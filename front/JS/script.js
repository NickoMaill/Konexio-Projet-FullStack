$("#btnShowData").click(function getAllCountries() {

    $.ajax({

        url: "https://restcountries.com/v3.1/all",

        success: function (data) {

            data.map((country) => {

                $("#list").append(
                    `<h3>${country.name.common}</h3>`
                );

                $("#list").append(
                    `<li>Capitale : ${country.capital}</li>`
                );

                $("#list").append(
                    `<li>Continent : ${country.region}</li>`
                );

                for(language in country.languages) {
                    $("#list").append(
                        `<li>Langue : ${country.languages[language]}</li>`
                    );
                }

                for(currencie in country.currencies) {
                    $("#list").append(
                        `<li>Money : ${country.currencies[currencie].name}</li>`
                    );

                }

            })

        }
    })
});

