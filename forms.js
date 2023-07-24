var currentTab = 0;
function start() {
	showTab(currentTab);
}
function showTab(n) {
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 2)) {
		document.getElementById("nextBtn").classList.remove("btn-dark");
		document.getElementById("nextBtn").classList.add("btn-primary");
		document.getElementById("nextBtn").innerHTML = "Submit";
	} else if (n == (x.length - 1)) {
		document.getElementById("prevBtn").style.display = "none";
		document.getElementById("nextBtn").style.display = "none";
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
	if (currentTab >= x.length) {
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