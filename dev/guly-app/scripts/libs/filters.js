gulyFiltersModule
// range for selects
.filter('range', function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i = min; i <= max; i++) {
      input.push(i);
    }
    return input;
  };
})
// converts the raw value & appends it its unit
.filter('litres', ['$filter', function($filter) {
  return function(input, unit) {
    var numberFilter = $filter('number');
    if (unit) {

      if (unit === 'ml') {
        input = input;
        input += ' ml';

      } else if (unit === 'cl') {
        input = input / 10;
        input += ' cl';

      } else if (unit === 'dl') {
        input = input / 100;
        input += ' dl';
      }

    } else {
      // default is set to liters
      input = input / 1000;
      // limits the output to 2 decimals
      input = numberFilter(input, 2);
      input += ' l';
    }
    return input;
  };
}])
.filter('temp', ['$filter', function($filter) {
  return function(input, precision) {
    if (!precision) {
      precision = 1;
    }
    var numberFilter = $filter('number');
    return numberFilter(input, precision) + '\u00B0C';
  };
}]);
