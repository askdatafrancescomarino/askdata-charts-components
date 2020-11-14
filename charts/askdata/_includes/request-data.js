function parseNumber(value, locales = navigator.languages) {
  const example = Intl.NumberFormat(locales).format('1.1');
  const cleanPattern = new RegExp(`[^-+0-9${ example.charAt( 1 ) }]`, 'g');
  const cleaned = value.replace(cleanPattern, '');
  const normalized = cleaned.replace(example.charAt(1), '.');

  return parseFloat(normalized);
}

// Retrieve auth token
if (getUrlParameter('token') != undefined){
  var token = getUrlParameter('token');
}else{
  var token = Cookies.get('access_token')
}

var theme = []

// Retrieve theme
if (getUrlParameter('theme')) {

    $.getJSON( "https://chart-dev.askdata.com/charts/immuni-app/catalog.json", function( data ) {
      
      console.log("retrieving theme")
      console.log(data)
      
      window.theme = data;

  })

}

// Request charting data
$.ajax({
         url: environment + "/charts/" + getUrlParameter('chartId'),
         type: "GET",
         beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + token 
          ).setRequestHeader('Content-Type','application/json')},
         success: function(data) { 

         displayChart(data);

}
});  

// Redirect to login if not authenticated 
$( document ).ajaxError(function( event, jqxhr, settings, exception ) {
    if ( jqxhr.status== 401 ) {
      location.replace("https://app-dev.askdata.com/login");

    }
});