function updateClock() {
    const now = new Date(); // get current time
    let hours = now.getHours().toString().padStart(2, "0"); // get hours
    const meridiem = hours >= 12 ? "PM" : "AM"; //check if it is PM or AM
    hours = (hours % 12) || 12; // 12 hour format
    hours = hours.toString().padStart(2, "0"); //padStart adds leading 0s if needed
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeStrinf = `${hours}:${minutes}:${seconds} ${meridiem}`; //create time string
    document.getElementById("clockface").textContent = timeStrinf; //set clockface to time string
    setTimeout(updateClock, 1000); //update clock every second
}

updateClock();