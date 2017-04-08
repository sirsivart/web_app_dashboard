var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '# of Votes',
            lineTension: 0,
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: [
                'rgba(115, 119, 191, 0.2)'
            ],
            borderColor: [
                'rgba(115, 119, 191, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctxy = document.getElementById("myChart2");
var myChart2 = new Chart(ctxy, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)'
            ],
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'DAILY TRAFFIC',
            position: 'top',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                barThickness: 30
            }]
        }
    },

});

var ctxz = document.getElementById("myChart3");
var myChart3 = new Chart(ctxz, {
    type: 'doughnut',
    data: {
        labels: [
            "Phones",
            "Tablets",
            "Desktop"
        ],
        datasets: [{
            data: [20, 20, 60],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    },
});
