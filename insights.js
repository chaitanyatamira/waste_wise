// Waste Reduction Insights Module
class InsightsManager {
    constructor() {
        this.container = document.getElementById('insightsContainer');
        this.insights = [
            {
                title: 'Recycling Opportunity',
                description: 'Increase in paper waste detected. Consider adding more paper recycling bins in office areas.',
                impact: 'Potential 15% reduction in landfill waste'
            },
            {
                title: 'Composting Program',
                description: 'Food waste from cafeteria could be composted. Implementing a composting program recommended.',
                impact: 'Potential 25% reduction in organic waste'
            },
            {
                title: 'Peak Hours Analysis',
                description: 'Waste collection during peak hours increases fuel consumption. Consider adjusting collection times.',
                impact: 'Potential 10% reduction in fuel costs'
            }
        ];
    }

    renderInsights() {
        this.container.innerHTML = '';
        this.insights.forEach(insight => {
            const card = document.createElement('div');
            card.className = 'insight-card';
            card.innerHTML = `
                <h3>${insight.title}</h3>
                <p>${insight.description}</p>
                <p style="color: #059669; margin-top: 0.5rem; font-weight: 500;">
                    ${insight.impact}
                </p>
            `;
            this.container.appendChild(card);
        });
    }

    async refreshInsights() {
        // Simulate API call for new insights
        return new Promise((resolve) => {
            setTimeout(() => {
                this.insights = this.insights.map(insight => ({
                    ...insight,
                    impact: Potential ${Math.floor(Math.random() * 20 + 10)}% reduction
                }));
                this.renderInsights();
                resolve();
            }, 1000);
        });
    }
}

// Initialize Insights
const insightsManager = new InsightsManager();
insightsManager.renderInsights();

document.getElementById('refreshInsights').addEventListener('click', async () => {
    const btn = document.getElementById('refreshInsights');
    btn.disabled = true;
    btn.textContent = 'Refreshing...';

    try {
        await insightsManager.refreshInsights();
    } catch (error) {
        console.error('Failed to refresh insights:', error);
        alert('Failed to refresh insights. Please try again.');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Refresh';
    }
});