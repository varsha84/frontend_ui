

function temperatureChart()
{
    var config = {
        type: 'line',
        data:
        {
            labels: ["06:00", ":10", ":20", ":30", ":40", ":50",
            "07:00", ":10", ":20", ":30", ":40", ":50",
            "08:00", ":10", ":20", ":30", ":40", ":50",
            "09:00", ":10", ":20", ":30", ":40", ":50" ],
            datasets: [
            {
                label: "Temperature",
                backgroundColor: 'rgba(136,106,181, 0.2)',
                borderColor: "green",
                pointBackgroundColor: "red",
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBorderWidth: 1,
                borderWidth: 1,
                pointRadius: 3,
                pointHoverRadius: 4,
                data: [45, 75, 26, 23, 60, -48, 
                        -9, 13, 45, 34, 45, 12, 
                        13, 34, 50, 14, 45, 32, 
                        4, 13, 22, 14, 25, 42],
                fill: true
            },
            {
                label: "Humidity",
                backgroundColor: 'rgba(29,201,183, 0.2)',
                borderColor: "green",
                pointBackgroundColor: "red",
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBorderWidth: 1,
                borderWidth: 1,
                pointRadius: 3,
                pointHoverRadius: 4,
                data: [-10, 16, 72, 93, 29, -74,
                        64, 45, 66, 23, 54, 56,
                        33, 23, 55, 12, 45, 34,
                        56, 72, 33, 44, 23, 45
                ],
                fill: true
            }]
        },
        options:
        {
            responsive: true,
            title:
            {
                display: false,
                text: 'Area Chart'
            },
            tooltips:
            {
                mode: 'index',
                intersect: false,
            },
            hover:
            {
                mode: 'nearest',
                intersect: true
            },
            scales:
            {
                xAxes: [
                {
                    display: true,
                    scaleLabel:
                    {
                        display: false,
                        labelString: '6 months forecast'
                    },
                    gridLines:
                    {
                        display: true,
                        color: "#f2f2f2"
                    },
                    ticks:
                    {
                        beginAtZero: true,
                        fontSize: 11
                    }
                }],
                yAxes: [
                {
                    display: true,
                    scaleLabel:
                    {
                        display: false,
                        labelString: 'Profit margin (approx)'
                    },
                    gridLines:
                    {
                        display: true,
                        color: "#f2f2f2"
                    },
                    ticks:
                    {
                        beginAtZero: true,
                        fontSize: 11
                    }
                }]
            }
        }
    };
    new Chart($("#temp-chart > canvas").get(0).getContext("2d"), config);
}

function linkQual(){
    var config = {
        
        type: 'doughnut',
        data:
        {
            datasets: [
            {
                data: [
                    70,
                    30
                ],
                backgroundColor: [
                    "#52d99c",
                    "lightgray"
                  ],          
           }],
          
           
        },
        options:
        {
            responsive: true,
        }
    };
    new Chart($("#link-qual > canvas").get(0).getContext("2d"), config);
}

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }


function heartBeatChart()
{
    var config = {
        type: 'line',
        data:
        {
            
            datasets: [
            
            {
                
                backgroundColor: 'rgba(29,201,183, 0.2)',
                borderColor: "green",
                pointBackgroundColor: "red",
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBorderWidth: 1,
                borderWidth: 1,
                pointRadius: 3,
                pointHoverRadius: 4,
                data: [75, 90, 120, 90, 110, 85],
                fill: false
            }]
        },
        options:
        {
            responsive: true,
            title:
            {
                display: false,
                text: 'Area Chart'
            },
            tooltips:
            {
                mode: 'index',
                intersect: false,
            },
           
            scales:
            {
                xAxes: [
                {
                    display: false,
                   
                }],
                yAxes: [
                {
                    display: false,
                    
                }]
            }
        }
    };
    new Chart($("#heart-rate-chart > canvas").get(0).getContext("2d"), config);
}

var barOptions = {
    responsive: true
};


/* bar stacked */
function barStacked()
{
    var barStackedData = {
        labels: ["Vitamin", "HDL", "LDL", "Sodium", "Glucose"],
        datasets: [
        {
            
            backgroundColor:  "#7b7ce3",
            //borderColor: color.primary._500,
            borderWidth: 1,
            data: [
                75,
                80,
                80,
                70,
                60,
            ]
        },
        {
           
            backgroundColor:"#d197d0",
            //borderColor: color.success._500,
            borderWidth: 1,
            data: [
                25,
                45,
                20,
                40,
                64
            ]
        }]

    };
    var config = {
        type: 'bar',
        data: barStackedData,
        options:
        {
            legend:
            {
                display: false,
                labels:
                {
                    display: false
                }
            },
            scales:
            {
                yAxes: [
                {display: false,
                    stacked: true,
                    gridLines:
                    {
                        display: false, 
                    },
                    
                }],
                xAxes: [
                {
                    barPercentage: 0.3,
                   
                    stacked: true,
                    gridLines:
                    {
                        display: false,
                    }
                }]
            }
        }
    }
    new Chart($("#blood-level-chart > canvas").get(0).getContext("2d"), config);
}

function lineChart()
{
    var config = {
        type: 'line',
        data:
        {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
            datasets: [
            {
                
                borderColor:  "#1ab394",
                //pointBackgroundColor: color.success._700,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBorderWidth: 1,
                borderWidth: 3,
                
                
                data: [
                    23,
                    45,
                    30,
                    26,
                    45,
                    23,
                    30,
                    26,
                                ],
                fill: false
            }]
        },
        options:
        {
            legend: {
                display: false,
                  labels: {
                    display: false
                  }
                },
            responsive: true,
            title:
            {
                display: false,
                text: 'Line Chart'
            },
            tooltips:
            {
                mode: 'index',
                intersect: false,
            },
            
            scales:
            {
                xAxes: [
                {
                    display: false,
                    
                }],
                yAxes: [
                {
                    display: false,
                    
                }]
            }
        }
    };
    new Chart($("#heart-rate-chart > canvas").get(0).getContext("2d"), config);
}
