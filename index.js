document.getElementById('date').innerHTML = new Date().toDateString();
document.getElementById(`shop`).innerHTML = "yes"
var shop = fortniteApi.shop
	.then(res => res.json())
	.then(obj =>{
		document.getElementById(`yes`).ineerHTML = obj.data.daily[0].items[0].name,
		document.getElementById(`shop`).innerHTML = obj.data.daily[0].items[0].images.icon.url
	});toTimeString