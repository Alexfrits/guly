(function($) {
if ($('main').hasClass('page-stats')) {
  // Uses chart.js library
  // http://www.chartjs.org/

  /*  1. INITIALIZING CHART
  ===================================================================*/
  // Get context with jQuery - using jQuery's .get() method.
  var ctxBar = $('canvas#chart-bar').get(0).getContext('2d');
  var ctxLine = $('canvas#chart-line').get(0).getContext('2d');
  // This will get the first returned node in the jQuery collection

  /*  2. DRAWING CHART
  ===================================================================*/
  var chartColors = {
    'main'  :       'rgb(0, 119, 230)',
    'second':       'rgb(11, 46, 120)',
    'action':       'rgb(102, 229, 209)',
    'transparent':  'rgba(0, 0, 0, 0)'
  };
  /* DATAS */

  // for the bars graph
  var dataBar = {
    labels: [
              'January', 'February', 'March', 'April', 'May', 'June', 'July',
              'January', 'February', 'March', 'April', 'May', 'June', 'July',
              'January', 'February', 'March', 'April', 'May', 'June', 'July'
            ],
    datasets: [
      {
        label: 'bar chart dataset',
        fillColor: chartColors.main,
        strokeColor: chartColors.second,
        pointColor: chartColors.action,
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [
                65, 59, 80, 81, 56, 55, 40,
                65, 59, 80, 81, 56, 55, 40,
                65, 59, 80, 81, 56, 55, 40,
                65, 59, 80, 81, 56, 55, 40
              ]
      }
    ]
  };

  // for the line graph
  var dataLine = {
    labels: [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'January', 'February', 'March', 'April', 'May', 'June', 'July'
            ],
    datasets: [
      {
        label: 'line chart dataset',
        fillColor: chartColors.transparent,
        strokeColor: chartColors.second,
        pointColor: chartColors.action,
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [
                81, 56, 55, 65, 59, 80, 40,
                65, 59, 59, 80, 55, 40, 65,
                59, 40, 81, 56, 55, 40, 65,
                80, 81, 56, 55, 80, 81, 56
              ]
      }
    ]
  };

  // Options for the line graph
  var optLine = {
    scaleShowGridLines : false,
    showScale: false,
    scaleBeginAtZero: true,
  };

  var myBarChart = new Chart(ctxBar).Bar(dataBar);
  var myLineChart = new Chart(ctxLine).Line(dataLine, optLine);

  /*  3. UPDATING CHART
  ===================================================================*/
  // changes the value of the first point of the first dataset on the chart when the update button is clicked
  // $('a.update').on('click', function (e) {
  //   e.preventDefault();
  //   console.log('data');
  //   myLineChart.datasets[0].points[0].value = 50;
  //   // Would update the first dataset's value of 'March' to be 50
  //   myLineChart.update();
  //   // Calling update now animates the position of March from 90 to 50.
  // });
}

}(jQuery));
