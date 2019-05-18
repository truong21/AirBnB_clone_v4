$(function () {
  let nameList = []
  let idList = []
  $('input').on('click', function () {
    let amen_str = "";
    if (this.checked) {
        nameList.push(this.getAttribute('data-name'));
        idList.push(this.getAttribute('data-id'));
        amen_str = nameList.join(', ');
        $('.amenities h4').empty();
        $('.amenities h4').append(amen_str);
    }
    if (!(this.checked)) {
        let toDelete = this.getAttribute('data-name');
        nameList = nameList.filter(item => item !== toDelete)
        let toDelete1 = this.getAttribute('data-id');
        idList = idList.filter(item => item !== toDelete1)
        amen_str = nameList.join(', ');
        $('.amenities h4').empty();
        $('.amenities h4').append(amen_str);
    };
  });
});
