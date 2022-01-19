$(() => {


    $(document).ready(function getAllCountries() {
    
        $.ajax({
    
            url: "https://restcountries.com/v3.1/all",
    
            success: function (data) {
    
                data.map((country) => {
    
                    $("#list").append(
                        `<h3>${country.name.common}</h3>`,
                        `<li>Capitale : ${country.capital}</li>`,
                        `<li>Continent : ${country.region}</li>`,
                    );
    
                    for (language in country.languages) {
                        $("#list").append(
                            `<li>Langue : ${country.languages[language]}</li>`
                        );
                    }
    
                    for (currencie in country.currencies) {
                        $("#list").append(
                            `<li>Money : ${country.currencies[currencie].name}</li>`
                        );
    
                    }
    
                })
    
            }
        })
    });
    
    
    
    $("#btnShowData").click(function getMyCountry() {
    
        let textArea = $("#request");
        textArea = textArea.val();
        
    
        $.ajax({
    
            url: `https://restcountries.com/v3.1/name/${textArea}`,
    
            success: function (data) {
    
                data.map((country) => {
    
                    $("#list").append(
                        `<h3>${country.name.common}</h3>`,
                        `<li>Capitale : ${country.capital}</li>`,
                        `<li>Continent : ${country.region}</li>`,
                    );
    
                    for (language in country.languages) {
                        $("#list").append(
                            `<li>Langue : ${country.languages[language]}</li>`
                        );
                    }
    
                    for (currencie in country.currencies) {
                        $("#list").append(
                            `<li>Money : ${country.currencies[currencie].name}</li>`
                        );
    
                    }
    
                })
    
            }
        })
    });


})    

