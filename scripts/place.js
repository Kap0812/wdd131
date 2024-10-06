// Function to update footer with current year and last modified date
document.addEventListener('DOMContentLoaded', () => {
    // Update current year
    const currentYearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Update last modified date
    const lastModifiedP = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedP.textContent = `Last Modified: ${lastModified}`;

    // Calculate and display wind chill
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('windSpeed').textContent);
    const windChillSpan = document.getElementById('windChill');

    // Determine if conditions are met for wind chill calculation
    if (isViableWindChill(temperature, windSpeed)) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillSpan.textContent = `${windChill} °C`;
    } else {
        windChillSpan.textContent = 'N/A';
    }
});

// Function to determine if wind chill calculation is viable
function isViableWindChill(temp, windSpeed) {
    // Metric conditions
    return temp <= 10 && windSpeed > 4.8;
}

// Function to calculate wind chill in Celsius
function calculateWindChill(temp, windSpeed) {
    // Wind chill formula for Celsius
    // Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
    // Source: https://www.weather.gov/media/epz/wxcalc/windChill.pdf
    return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16));
}
