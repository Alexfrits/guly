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
});

gulyFiltersModule
// range for selects
.filter('litres', function() {
  return function(input) {
    input = input/1000;

    return input;
  };
});
