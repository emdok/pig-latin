$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var words = $("input#words").val();
    var lowerCase = words.toLowerCase();
    var splits = lowerCase.split(" ");
    var vowels = ["a", "e", "i", "o", "u"];
    var yVowel = ["y"];

    splits.forEach(function(split) {
      if (split[0] === "y") {
        var concat = split.concat("yay");
        var remove = concat.slice(1);
        alert(remove);
      }
    });


  });
});



// for (var i = 0; i < split.length; i += 1) {
//   if (split[0] === "y") {
//      console.log(split[i]);
//   }
// }
