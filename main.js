// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initForecastChart();
    routeOptimizer.initMap();
    insightsManager.renderInsights();

    // Handle navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Add real-time updates (simulated)
    setInterval(() => {
        updateRandomStats();
    }, 5000);
});

function updateRandomStats() {
    const statValues = document.querySelectorAll('.stat-value');
    const randomStat = statValues[Math.floor(Math.random() * statValues.length)];
    const currentValue = parseFloat(randomStat.textContent);
    const newValue = (currentValue + (Math.random() * 0.4 - 0.2)).toFixed(1);
    randomStat.textContent = ${newValue}${randomStat.textContent.includes('%') ? '%' : ''};
}