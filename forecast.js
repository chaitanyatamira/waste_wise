// Forecast Chart Initialization
const initForecastChart = () => {
    const ctx = document.getElementById('forecastChart').getContext('2d');
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Predicted Waste (tons)',
            data: [12, 19, 15, 17, 14, 13, 16],
            borderColor: '#059669',
            backgroundColor: '#34d399',
            tension: 0.4
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    return new Chart(ctx, config);
};

// Update forecast data based on range selection
const forecastRange = document.getElementById('forecastRange');
let forecastChart = initForecastChart();

forecastRange.addEventListener('change', (e) => {
    const days = parseInt(e.target.value);
    updateForecastData(days);
});

function updateForecastData(days) {
    // Simulate API call for new data
    const newData = generateForecastData(days);
    forecastChart.data.labels = newData.labels;
    forecastChart.data.datasets[0].data = newData.values;
    forecastChart.update();
}

function generateForecastData(days) {
    const labels = [];
    const values = [];
    const baseValue = 15;

    for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
        values.push(baseValue + Math.random() * 5 - 2.5);
    }

    return { labels, values };
}