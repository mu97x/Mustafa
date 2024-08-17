// script.js
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const currentDateElement = document.getElementById('current-date');
    const daysPassedElement = document.getElementById('days-passed');
    const daysRemainingElement = document.getElementById('days-remaining');
    const targetDateInput = document.getElementById('target-date');
    const customDaysRemainingElement = document.getElementById('custom-days-remaining');

    const formatDate = (date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const calculateDays = (targetDate) => {
        const today = new Date();
        const timeDifference = targetDate - today;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    };

    // Set current date
    currentDateElement.textContent = formatDate(today);

    // Calculate days passed and remaining for end of year
    const endOfYearDate = new Date(today.getFullYear(), 11, 31);
    const daysPassed = calculateDays(new Date(today.getFullYear(), 0, 1));
    const daysRemaining = calculateDays(endOfYearDate);

    daysPassedElement.textContent = `الأيام المنقضية: ${-daysPassed}`;
    daysRemainingElement.textContent = `الأيام المتبقية: ${daysRemaining}`;

    // Calculate days remaining for user-selected date
    targetDateInput.addEventListener('change', function() {
        const selectedDate = new Date(targetDateInput.value);
        if (selectedDate instanceof Date && !isNaN(selectedDate)) {
            const remainingDays = calculateDays(selectedDate);

            if (remainingDays > 0) {
                customDaysRemainingElement.textContent = `الأيام المتبقية للوصول للتاريخ المختار: ${remainingDays}`;
            } else if (remainingDays < 0) {
                customDaysRemainingElement.textContent = `قبل ${-remainingDays} يوماً من التاريخ المختار`;
            } else {
                customDaysRemainingElement.textContent = `التاريخ هو اليوم!`;
            }
        } else {
            customDaysRemainingElement.textContent = '';
        }
    });
});
