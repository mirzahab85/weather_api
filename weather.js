$(document).ready(function(){
    $('#submitWeather').click(function(){
        
        var city = $("#city").val();


        if(city != ''){

            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" +
                "&APPID=eb53e5b989923c8707338a335a3411a5",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widged = show(data);

                    $("#show").html(widged);

                    $("#city").val('');
                    
                }


            });

        }else{
            $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Field can not be empty</div>");
        }
    });
});

function show(data){
    return "<h3 style='font-size:40px; font-weight: bold;' class='text-center'>Current Weather for " + 
    data.name + ", " + data.sys.country +"</h3>" +
           "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+ data.weather[0].main + "</h3>" +  
           "<h3 style='padding-left:40px;'><strong>Description</strong>: <img src='https://openweathermap.org/img/w/" + data.weather[0].icon+".png'> " + data.weather[0].description + "</h3>" + 
           "<h3 style='padding-left:40px;'><strong>Temperature</strong>: " + data.main.temp + "&deg;C</h3>" +
           "<h3 style='padding-left:40px;'><strong>Pressure</strong>: " + data.main.pressure + " hPa</h3>" +
           "<h3 style='padding-left:40px;'><strong>Humidity</strong>: " + data.main.humidity + "%</h3>" +
           "<h3 style='padding-left:40px;'><strong>Max. Temperature</strong>: " + data.main.temp_max + "&deg;C</h3>" +
           "<h3 style='padding-left:40px;'><strong>Min. Temperature</strong>: " + data.main.temp_min + "&deg;C</h3>" +
           "<h3 style='padding-left:40px;'><strong>Cluouds</strong>: " + data.clouds.all +  " %</h3>"+
           "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: " + data.wind.speed + " m/s</h3>" +
           "<h3 style='padding-left:40px;'><strong>Wind Direction</strong>: " + data.wind.deg + "&deg</h3>";
}