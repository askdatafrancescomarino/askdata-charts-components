var environment = "https://" + window.location.hostname;
var environment_data = "https://smart" + window.location.hostname;

var environment_auth = "https://askdata.com";

if (window.location.hostname.indexOf("app-dev") > -1) {
	environment_auth = "https://app-dev.askdata.com"
}

if (window.location.hostname.indexOf("app-qa") > -1) {
	environment_auth = "https://app-qa.askdata.com"
}
