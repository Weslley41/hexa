// Final da copa 18/12/2022
// Começa às 16:00 (normalmente termina perto das 18:00)
var dateHexa = new Date(2022, 11, 18, 18, 0, 0, 0);
setInterval(function() {
	let dateNow = new Date();
	let timeDiff = dateHexa.getTime() - dateNow.getTime();
	let totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

	let [months, days] = calcMonths(totalDays, dateNow.getMonth());
	let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

	if (timeDiff > 0) {
		setTimes(months, days, hours, minutes, seconds, totalDays);
	} else {
		setTimes(0, 0, 0, 0, 0, 0);
		document.getElementById("totalDays").innerHTML = "SOMOS HEXA!?";
	}
}, 1000);

function setTimes(months, days, hours, minutes, seconds, totalDays) {
	document.getElementById("totalDaysValue").innerText = totalDays;
	document.getElementById("months").innerText = months;
	document.getElementById("days").innerText = days;
	document.getElementById("hours").innerText = `${hours}`.padStart(2, "0");
	document.getElementById("minutes").innerText = `${minutes}`.padStart(2, "0");
	document.getElementById("seconds").innerText = `${seconds}`.padStart(2, "0");
}

function calcMonths(days, actualMonth) {
	let daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let months = 0;
	let daysLeft = days;

	for (months; daysLeft >= daysPerMonth[actualMonth + months];months++) {
		daysLeft -= daysPerMonth[actualMonth + months];
	}

	return [months, daysLeft];
}
