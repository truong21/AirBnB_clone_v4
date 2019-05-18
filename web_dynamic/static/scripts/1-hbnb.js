$(function () {
  let amenDict = {}
  let amenKeys = Object.keys(amenDict)
  $('input').on('click', function () {
    let amenStr = "";
    if (this.checked) {
        amenDict[(this.getAttribute('data-id'))] = (this.getAttribute('data-name'));
        amenStr = Object.values(amenDict).join(', ');
        $('.amenities h4').empty();
        $('.amenities h4').append(amenStr);
    }
    if (!(this.checked)) {
        let toDelete = this.getAttribute('data-id');
        delete amenDict[toDelete];
        amenStr = Object.values(amenDict).join(', ');
        console.log(amenDict);
        $('.amenities h4').empty();
        $('.amenities h4').append(amenStr);
    };
  });
});
