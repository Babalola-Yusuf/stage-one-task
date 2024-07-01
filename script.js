document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    
    function updateCurrentTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4]; // Get UTC time in HH:MM:SS format
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' }); // Get current day of the week

        currentTimeUTCElement.textContent = `Current UTC Time: ${utcTime}`;
        currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
    }

    updateCurrentTimeAndDay();
    setInterval(updateCurrentTimeAndDay, 1000); // Update every second
});