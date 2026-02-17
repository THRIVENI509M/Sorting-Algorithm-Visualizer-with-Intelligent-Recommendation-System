let complexityChart;

function initChart() {
    const ctx = document.getElementById("complexity-chart").getContext("2d");

    complexityChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: [
                {
                    label: "Comparisons",
                    data: [],
                    borderColor: "#f4b400",
                    backgroundColor: "rgba(244,180,0,0.1)",
                    tension: 0.4,
                    borderWidth: 3,
                    fill: false,
                    pointRadius: 0

                },
                {
                    label: "Swaps",
                    data: [],
                    borderColor: "#ea4335",
                    backgroundColor: "rgba(234,67,53,0.1)",
                    tension: 0.4,
                    borderWidth: 3,
                    fill: false,
                    pointRadius:0
                }
            ]
        },
        options: {
            responsive: false,
            animation: {
                duration:1000
            },
            plugins: {
              legend: {
              position: "top"
             }
            },
            elements: {
                line: {
                tension: 0.4
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Time (s)"
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Count"
                    }
                }
            }
        }
    });
}

function showFinalGraph(timeArray, compArray, swapArray) {
    complexityChart.data.labels = timeArray;
    complexityChart.data.datasets[0].data = compArray;
    complexityChart.data.datasets[1].data = swapArray;
    complexityChart.update();
}

function resetChart() {
    complexityChart.data.labels = [];
    complexityChart.data.datasets[0].data = [];
    complexityChart.data.datasets[1].data = [];
    complexityChart.update();
}