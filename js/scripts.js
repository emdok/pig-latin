$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var words = $("input#words").val();
    // console.log(words);
    var lowerCase = words.toLowerCase();
    var split = lowerCase.split(" ");
    console.log(split);

    for (var i = 0; i < split.length; i += 1) {
      console.log(split[i]);
    }
  });
});
