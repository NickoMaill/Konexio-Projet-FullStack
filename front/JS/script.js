$("#btnShowData").click(function getAllCountries() {

    $.ajax({

        url: "https://restcountries.com/v3.1/all",

        success: function (data) {

            data.forEach((country) => {

                $("#countryName").html(
                    `${country.name.common}`
                );

                $("#capital").html(
                    `${country.capital}`
                );

                $("#subCountry").html(
                    `${country.region}`
                );

                for(language in country.languages) {
                    $("#language").html(`${country.languages[language]}`
                    );
                }

                for(currencie in country.currencies) {
                    $("#money").html(`${country.currencies[currencie].name}`
                    );

                }

            })

        }
    })
});

