function switchLang(lang) {
	var nav1 = document.getElementById("navlink1");
	var nav2 = document.getElementById("navlink2");
	var nav3 = document.getElementById("navlink3");
	var nav4 = document.getElementById("navlink4");
	var nav5 = document.getElementById("navlink5");
	
	if (lang == "en") {
		nav1.innerHTML = "Contact Us";
		nav2.innerHTML = "Our Team";
		nav3.innerHTML = "View Menu";
		nav4.innerHTML = "Shop For Merch";
		nav5.innerHTML = "Book a Room or Table";
		nav6.innerHTML = "Shopping Cart";
	}
	else if (lang == "fr") {
		nav1.innerHTML = "Contactez-Nous";
		nav2.innerHTML = "Notre Équipe";
		nav3.innerHTML = "Regarde le Menu";
		nav4.innerHTML = "Achetez des Marchandises";
		nav5.innerHTML = "Réserver une Chambre ou une Table";
	}
}