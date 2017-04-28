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

$('.navButton').on('click', function() {
    $('.navButton').removeClass('selected');
    $(this).addClass('selected');
});

// random user generation

$.ajax({
    url: 'https://randomuser.me/api/?results=4',
    dataType: 'json',
    success: function(data) {
        for (var i = 0; i < data.info.results; i++) {
            let userName = "<span class='userName'>" + data.results[i].name.first + " " + data.results[i].name.last + "</span>";
            let userPicture = "<img src='" + data.results[i].picture.medium + "' alt='user profile picture'>";
            let userEmail = "<a href='mailto:" + data.results[i].email + "'>" + data.results[i].email + "</a>";

            $(".memberName").append('<div class="user">' + userPicture + '<h3>' + userName + '</h3>' + userEmail + '</div>');
        }

        for (var i = 0; i < data.info.results; i++) {
            var activity = [" commented on YourApp's SEO Tips", " wishes there was a live action gargoyles movie", " commented on Facebook's Changes for 2016", " posted YourApp's SEO Tips", " gave up Facebook for YourApp", " created a robot that passes butter", " discovered lasagna", " is working on the next big thing", " thinks oranges are better than bananas", " uses only synthetic blend oil"]

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
            let userActivity = "<span class='userActivity'>" + data.results[i].name.first + " " + data.results[i].name.last + activity[getRandomInt(0, 10)] + "</span>";
            let userPicture = "<img src='" + data.results[i].picture.medium + "' alt='user profile picture'>";
            let lastPosted = "<p>" + getRandomInt(0, 350) + " hours ago</p>";

            $(".memberActivity").append('<div class="user">' + userPicture + '<p>' + userActivity + '</p>' + lastPosted + '</div>');
        }

        new autoComplete({
            selector: 'input[name="userSearch"]',
            minChars: 2,
            source: function(term, suggest) {
                term = term.toLowerCase();
                var choices = [data.results[0].name.first + " " + data.results[0].name.last, data.results[1].name.first + " " + data.results[1].name.last, data.results[2].name.first + " " + data.results[2].name.last, data.results[3].name.first + " " + data.results[3].name.last];
                var matches = [];
                for (i = 0; i < choices.length; i++)
                    if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
                suggest(matches);
            }
        });

    }
});

// Local Storage

function save() {
    var checkbox1 = document.getElementById("emailNotification");
    localStorage.setItem("emailNotification", checkbox1.checked);
    var checkbox2 = document.getElementById("profileToPublic");
    localStorage.setItem("profileToPublic", checkbox2.checked);
}

//for loading
var checked1 = JSON.parse(localStorage.getItem("emailNotification"));
document.getElementById("emailNotification").checked = checked1;
var checked2 = JSON.parse(localStorage.getItem("profileToPublic"));
document.getElementById("profileToPublic").checked = checked2;

//for clearing checked selections
function cancel() {
    localStorage.clear();
    location.reload();
}
