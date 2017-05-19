// NOTIFY

function notifyBox() {
    document.getElementById('notify1').innerHTML = '<span class="notifySpan1" onclick="this.parentElement.style.display=' + "'none'" + ';">Mom Called</span>';
    document.getElementById('notify2').innerHTML = '<span class="notifySpan2" onclick="this.parentElement.style.display=' + "'none'" + ';">Pizza' + "'s " + 'done</span>';
}

$(document).ready(function() {
    $(".notify").click(function() {
        $(".notify").hide();
    });
});
var $dataSet = [100, 94, 79, 82, 41, 30, 69, 99, 54, 24, 62, 18];


function hourlyData() {
    $("button").removeClass("selectedbtn");
    $(".hourlybtn").addClass("selectedbtn");
    $dataSet.splice(0, 12, 100, 94, 79, 82, 41, 30, 69, 99, 54, 24, 62, 18);
    myChart.reset();
    myChart.update();
}

function dailyData() {
    $("button").removeClass("selectedbtn");
    $(".dailybtn").addClass("selectedbtn");
    $dataSet.splice(0, 12, 222, 994, 293, 803, 583, 142, 297, 393, 989, 559, 822, 403);
    myChart.reset();
    myChart.update();
}

function weeklyData() {
    $("button").removeClass("selectedbtn");
    $(".weeklybtn").addClass("selectedbtn");
    $dataSet.splice(0, 12, 8452, 2419, 4134, 6644, 7572, 6667, 8318, 2490, 6470, 1670, 7198, 5221);
    myChart.reset();
    myChart.update();
}

function monthlyData() {
    $("button").removeClass("selectedbtn");
    $(".monthlybtn").addClass("selectedbtn");
    $dataSet.splice(0, 12, 30000, 21500, 66741, 69625, 30791, 46633, 62210, 87731, 93365, 65330, 21164, 24303);
    myChart.reset();
    myChart.update(1000, true);
}

// CHARTS

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    easing: 'easeInElastic',
    type: 'line',
    data: {
        labels: ['18-22', '23-25', '25-27', '28-30', '31-34', '35-37', '38-40', '41-43', '44-46', '47-50', '50-65', '66-100'],
        datasets: [{
            label: 'Hourly',
            data: $dataSet,
            lineTension: 0,
        }, ]
    },
    options: {
        title: {
            display: true,
            text: 'AGE DEMOGRAPHIC TRAFFIC'
        },
        legend: {
            display: false,

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
                '#575757',
                '#575757',
                '#575757',
                '#575757',
                '#575757',
                '#575757',
                '#575757'
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
                "#cacaca",
                "#575757",
                "#a1a1a1"
            ],
            hoverBackgroundColor: [
                "#cacaca",
                "#575757",
                "#a1a1a1"
            ]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'MOBILE USERS'
        }
    }
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
            let userName = "<span class='memberName'>" + data.results[i].name.first + " " + data.results[i].name.last + "</span>";
            let userPicture = "<img class='memberPicture' src='" + data.results[i].picture.medium + "' alt='new member profile picture'>";
            let userEmail = "<br /><div class='emailContainer'><a class='memberEmail' href='mailto:" + data.results[i].email + "'>" + data.results[i].email + "</a></div>";
            let joinDate = "<span class='joinDate'>5/16/17</span>";

            $(".memberInfo").append('<div class="user">' + userPicture + '<h3>' + userName + '</h3>' + joinDate + userEmail + '</div>');
        }

        for (var i = 0; i < data.info.results; i++) {
            var activity = [" commented on YourApp's SEO Tips", " wishes there was a live action gargoyles movie", " commented on Facebook's Changes for 2016", " posted YourApp's SEO Tips", " gave up Facebook for YourApp", " created a robot that passes butter", " discovered lasagna", " is working on the next big thing", " thinks oranges are better than bananas", " uses only synthetic blend oil"]

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
            let userActivity = "<span class='memberName'>" + data.results[i].name.first + "&nbsp;" + data.results[i].name.last + "&nbsp;" + "</span>" + "<span class='userActivity'>" + activity[getRandomInt(0, 10)] + "</span>";
            let userPicture = "<img class='memberPicture' src='" + data.results[i].picture.medium + "' alt='user profile picture'>";
            let lastPosted = "<p class='lastPosted'>" + getRandomInt(0, 350) + " hours ago</p>";

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

// FORM VALIDATION

function validateForm() {
    var x = document.forms["messageForm"]["textarea"].value;
    var y = document.forms["messageForm"]["userSearch"].value;
    if (x === '') {
        alert("Say something why don't ya, literally anything else at all.");
        return false;
    } else if (y === '') {
        alert("Please enter a user that you would like to send this message to.");
        return false;
    } else {
        window.alert("MESSAGE SENT!");
    }
}




// Local Storage

function save() {
    var checkbox1 = document.getElementById("emailNotification");
    localStorage.setItem("emailNotification", checkbox1.checked);
    var checkbox2 = document.getElementById("profileToPublic");
    localStorage.setItem("profileToPublic", checkbox2.checked);
    var timezoneVal = $("#timezone").val();
    localStorage.setItem("timezoneVal", timezoneVal);
}


//for loading
var checked1 = JSON.parse(localStorage.getItem("emailNotification"));
document.getElementById("emailNotification").checked = checked1;
var checked2 = JSON.parse(localStorage.getItem("profileToPublic"));
document.getElementById("profileToPublic").checked = checked2;
var settimezone = localStorage.getItem("timezoneVal");
$("#timezone").val(settimezone);

//Storing Time Zone



//for clearing checked selections
function cancel() {
    localStorage.clear();
    location.reload();
}
