$(function () {
  $('input').on('click', function () {
    let list = []
    if (this.checked) {
        list.push(this.getAttribute('data-name'));
        console.log(list)
        $('amenities h4').text("");
        $.each(list, function (index, element) {
            if (index !=0) {
                $('.amenities h4').append(", ");
            }
            $('.amenities h4').append(element);
    });
  }
  });
});
