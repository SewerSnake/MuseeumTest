var url = "https://www.rijksmuseum.nl/api/en/collection?key=OTlO83oj&format=json&q=vermeer&s=relevance";

var collectionDetails = "https://www.rijksmuseum.nl/api/EN/collection/SK-A-2344?key=OTlO83oj&format=json"
// https://www.rijksmuseum.nl/api/nl/collection?key=fakekey&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614

var testCalender = "https://www.rijksmuseum.nl/api/nl/agenda/2018-05-28/expostition/0ee170d3-9604-48ac-b15f-014d911bf065/availability/e2b108b3-52b0-4a89-ac64-19514f8c5434?key=OTlO83oj&format=json";

var artArray = [];

var title;

var locationOfPiece;

var plaqueDescription;

var HDImage;

function getArtist(artistName, resultsPerPage) {

  fetch("https://www.rijksmuseum.nl/api/en/collection?key=OTlO83oj&format=json&q="
  + artistName + "&s=relevance" + "&ps=" + resultsPerPage)

    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      console.log(result);

      var artObjects = result.artObjects;

      for (var i = 0; i < artObjects.length; i++) {
        artArray.push(artObjects[i]);
      }

      return artArray;
    });
}

function getPiece(id, resultsPerPage) {
  fetch("https://www.rijksmuseum.nl/api/EN/collection/"
  + id + "?key=OTlO83oj&format=json" + "&ps=" + resultsPerPage)

    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
      //console.log(result);
      var artObject = result.artObject;

      title = artObject.longTitle;

      locationOfPiece = artObject.location;

      plaqueDescription = artObject.plaqueDescriptionEnglish;
      //HDImage = artObject.
      console.log(title,locationOfPiece,plaqueDescription);

    });
}
