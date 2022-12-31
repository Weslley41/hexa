var dates = {
	'abertura': new Date(2026, 5, 8),
	'hexa': new Date(2026, 6, 3),
};
var choice = 'hexa';
var date;

function changeCounter(newChoice) {
	document.getElementById(choice).classList.remove('active');
	document.getElementById(newChoice).classList.add('active');
	choice = newChoice;
}

setInterval(function() {
	date = dates[choice];
	let dateNow = new Date();
	let timeDiff = date.getTime() - dateNow.getTime();
	let totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

	if (timeDiff > 0) {
		setTimes(totalDays)
	} else {
		setTimes(0);
		document.getElementById("totalDays").innerHTML = "???";
	}
}, 1000);

function setTimes(totalDays) {
	document.getElementById("dateChoice").innerText = `${date.toLocaleDateString()} às ${date.getHours()}h`;
	document.getElementById("choiceCounter").innerText = choice === 'hexa' ? 'o Hexa!' : `a ${choice}!`;
	document.getElementById("totalDaysValue").innerText = totalDays == 1 ? totalDays + ' dia' : totalDays + ' dias';
}

document.querySelector(window.location.hash).click()
document.click()
