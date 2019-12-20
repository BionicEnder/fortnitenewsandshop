document.getElementById("date").innerHTML = new Date().toTimeString();
var api = require(fortnite)
var config = {
	apikey:"6a4f122f5fe17523716030bfa8ba655bb4e60db5a7826f3be868a0f5248a6990",
	language:"en"
}
var fn = new api(config);
fn.Shop()
	.then(res => res.json())
	.then(obj =>{
		var object = fortniteApi.getDataFromObject(obj);
		document.getElementById(`yes`).ineerHTML = "yes"
		document.getElementById(`shop`).img = "url('res.data.featured[0].items[0].images.icon.url')"
	});