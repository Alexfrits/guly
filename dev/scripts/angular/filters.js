gulyFiltersModule
// prepends unit suffix
// .filter('unit', function() {
//   return function(input, unitSuffix) {

//     if (unitSuffix === 'liters') {
//       input = input + 'l';
//     } else {
//       input = input + 'litres';
//     }
//     return input;
//   };
// })
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
