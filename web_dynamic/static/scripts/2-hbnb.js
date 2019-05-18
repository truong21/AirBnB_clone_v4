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
        $('.amenities h4').empty();
        $('.amenities h4').append(amenStr);
    };
  });
  $(function () {
    $.ajax({
          method:'GET',
          url: 'http://0.0.0.0:5001/api/v1/status/',
          success: function (data) {
                if (data.status === 'OK') {
                    $('DIV#api_status').addClass('available');
                } else {
                    $('DIV#api_status').removeClass('available');
				}
          });
    });
  });
});
