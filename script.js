var url = "https://www.rijksmuseum.nl/api/nl/collection?key=OTlO83oj&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614";

addEventListener('load', function() {
  getJSON();
});

function getJSON() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log(result);
    });
}