let elChart = document.getElementById("myChart").getContext('2d');
// var imported = document.createElement('script');
// imported.src = './index.js';
//get chart data into numbers

// document.head.appendChild(imported);
function populateChart(property){
    let propertyArray = [];
    for(let i = 0; i < busMallArray.length; i++){
        propertyArray.push(busMallArray[i][property]);
    }
    return propertyArray;
}

function DisplyChart(){
    elChart.innerHTML = '';
    let myChart = new Chart(elChart, {
        type: 'bar',
        data: {
            labels: populateChart('name'),
            datasets: [{
                label: '# of Clicks',
                data: populateChart('clicked'),

                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
//</script>