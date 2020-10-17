import React from 'react'
import axios from 'axios'
import Chart from 'chart.js'
export default class extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js";
        script.src= "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js";
        script.async = true;
        document.body.appendChild(script);

        var dataSource = {
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        '#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#fd6b19',
                        '#03fc41',
                        '#0335fc',
                        '#e303fc',
                    ]
                }
            ],
            labels: []
        };

    function createChart() {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: dataSource
        });
    }

    function getBudget() {
        axios.get('http://localhost:3000/budget')
        .then(function (res) {
            for (var i = 0; i < res.data.length; i++) {
                dataSource.datasets[0].data[i] = res.data[i].budget;
                dataSource.labels[i] = res.data[i].title;
            }
            createChart();
        });
    }
    getBudget();
    }
};
