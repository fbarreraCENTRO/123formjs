/*field ids*/
var phone_cid = '57222769';

/* Form ids */
var numeric_validation_form_id = "4923015";

$(document).ready(function (e) {

   alert("funciona :D");

});


function phone_number_actions(){
    var keycode = event.which;
    if (!(event.shiftKey == false && (keycode == 46 || keycode == 8 || keycode == 37 || keycode == 39 || (keycode >= 48 && keycode <= 57)))) {
        alert("Please insert only numeric values.");
        event.preventDefault();
    }
}
