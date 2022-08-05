// Final da copa 18/12/2022
// Começa às 12:00 (normalmente termina perto das 14:00)
var dates = {
	'abertura': new Date(2022, 10, 21),
	'estreia': new Date(2022, 10, 24, 16, 0, 0),
	'hexa': new Date(2022, 11, 18, 14, 0, 0, 0),
};
var choice = 'hexa';
var date;

function changeCounter(newChoice) {
	document.getElementById("counter-" + choice).classList.remove('active');
	document.getElementById("counter-" + newChoice).classList.add('active');
	choice = newChoice;
}

setInterval(function() {
	date = dates[choice];
	let dateNow = new Date();
	let timeDiff = date.getTime() - dateNow.getTime();
	let totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

	let [months, days] = calcMonths(totalDays, dateNow.getMonth());
	let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

	if (timeDiff > 0) {
		setTimes(months, days, hours, minutes, seconds, totalDays);
	} else {
		setTimes(0, 0, 0, 0, 0, 0);
		document.getElementById("totalDays").innerHTML = "???";
	}
}, 1000);

function setTimes(months, days, hours, minutes, seconds, totalDays) {
	document.getElementById("dateChoice").innerText = `${date.toLocaleDateString()} às ${date.getHours()}h`;
	document.getElementById("choiceCounter").innerText = choice === 'hexa' ? 'o Hexa!' : `a ${choice}!`;
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
