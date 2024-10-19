function setReminder() {

const plant = document.getElementById('plant').value;

const days = document.getElementById('days').value;

if (plant && days) {

document.getElementById('result').textContent = `Reminder: Water your ${plant} every ${days} days!`;

} else {

document.getElementById('result').textContent = "Please enter both plant name and watering frequency.";

}

}
