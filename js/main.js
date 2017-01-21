$(document).ready(function () {
    var formValid = false;
    
    $('input').on('blur', function () {
        var fieldType = $(this).data('fieldtype');
        var fieldValue = $(this).val();
        if (!validate(fieldType, fieldValue)) {
            $(this).next('span').show();
            $(this).attr('data-has-error', true);
        }
        else {
            $(this).attr('data-has-error', false);
        }
    });

    $('input').on('focus', function () {
        $(this).next('span').hide();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        if ($('input').attr('data-has-error') === true) {
            formValid = true;
        }
        else {
            formValid = false;
        }
        if (!formValid) {
            return false;
        }
        $('this').html('<h2>Loading...</h2>');
        setTimeout(function () {
            $('form').html('<h1>Form submited</h1>');
        },2000)
    })

});


function validate(fieldType, fieldValue) {
    if (fieldType) {
        switch (fieldType) {
            case 'creditCard':
                return is.creditCard(fieldValue);
            case 'dateString':
                return is.dateString(fieldValue);
            case 'email':
                return is.email(fieldValue);
            case 'cvv':
                is.within(fieldValue, 100, 999);
            default:
                return false;
        }
    }


}

