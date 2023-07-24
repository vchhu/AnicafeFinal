var currentTab = 0;

function start() {
	showTab(currentTab);
}

function show(n) {
	var x = document.getElementById("bookroom");
	var y = document.getElementById("booktable");
	if (n == 0) {
		x.classList.replace("d-none", "d-block");
		y.classList.replace("d-block", "d-none");
	}
	else if (n == 1) {
		x.classList.replace("d-block", "d-none");
		y.classList.replace("d-none", "d-block");
	}
}

function showTab(n) {
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 1)) {
		document.getElementById("nextBtn").classList.remove("btn-dark");
		document.getElementById("nextBtn").classList.add("btn-primary");
		document.getElementById("nextBtn").innerHTML = "Submit";
	} else {
		document.getElementById("nextBtn").innerHTML = "Next";
	}
	fixStepIndicator(n);
}

function nextPrev(n) {
	var x = document.getElementsByClassName("tab");
	if (n == 1 && !validateForm()) return false;
	x[currentTab].style.display = "none";
	currentTab = currentTab + n;
	if (currentTab == (x.length-1)) {
		var results = document.getElementById("confirmdetail");
		results.innerHTML = "<p class='mt-3'>Name: " +document.getElementById("fname").value +" " +document.getElementById("lname").value +"<br/>";
		results.innerHTML += "Location: " +document.getElementById("selectloc").value +"<br/>";
		results.innerHTML += "Date and Time: " +document.getElementById("ordertime").value +"</p>";
	}
	else if (currentTab >= x.length) {
		document.getElementById("bookingform").submit();
		return false;
	}
	showTab(currentTab);
}

function validateForm() {
	var x, y, i, valid = true;
	x = document.getElementsByClassName("tab");
	y = x[currentTab].getElementsByTagName("input");
	for (i = 0; i < y.length; i++) {
		if (y[i].value == "") {
			y[i].className += " invalid";
			valid = false;
		}
	}
	if (valid) {
		document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	return valid; // return the valid status
}
				
function fixStepIndicator(n) {
	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	x[n].className += " active";
}

window.addEventListener('load', start);
