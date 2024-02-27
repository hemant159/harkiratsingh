function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amOrPm = hours >= 12 ? 'PM': 'AM';

    // hours = hours % 12 || 12;

    // hours = String(hours).padStart(2, '0');
    // minutes = String(minutes).padStart(2, '0');
    // seconds = String(seconds).padStart(2, '0');

    const time24Hours = `${hours}:${minutes}:${seconds}`;
    const time12Hours = `${hours}:${minutes}:${seconds} ${amOrPm}`;

    console.clear();
    console.log(time24Hours);
    console.log(time12Hours);
}


setInterval(updateTime, 1000);

updateTime();