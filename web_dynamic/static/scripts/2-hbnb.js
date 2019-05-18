$(function () {
  let amenDict = {};
  // let amenKeys = Object.keys(amenDict);
  $('input').on('click', function () {
    let amenStr = '';
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
      $('.amenities h4').empty();
      $('.amenities h4').append(amenStr);
    }
  });
  $.get('http://55.55.55.5:5001/api/v1/status/', function (data, status) {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').toggleClass('available');
    }
  });
});
