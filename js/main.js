$(document).ready(function () {

    $('input').on('blur', function () {
        var fieldType = $(this).data('fieldtype');
        var val = $(this).val();

        switch (fieldType) {
            case 'creditCard':
                if (!validators.creditCard(val)) {
                    formValid.cc = false;
                    $(this).next().show();
                } else {
                    formValid.cc = true;
                    $(this).next().hide();
                }
                break;
            case 'dateString':
                if (!validators.dateString(val)) {
                    formValid.date = false;
                    $(this).next().show();
                } else {
                    formValid.date = true;
                    $(this).next().hide();
                }
                break;
            case 'email':
                if (!validators.email(val)) {
                    formValid.email = false;
                    $(this).next().show();
                } else {
                    formValid.email = true;
                    $(this).next().hide();
                }
                break;
            case 'cvv':
                if (!validators.cvv(val)) {
                    formValid.cvv = false;
                    $(this).next().show();
                } else {
                    formValid.cvv = true;
                    $(this).next().hide();
                }
                break;

        }

    });

    $('input').on('focus', function () {
        $('#submit').removeAttr('disabled', 'disabled');
    });

    $('form').on('submit', function (e) {
        e.preventDefault();

        if (!formValid.cc || !formValid.date || !formValid.email || !formValid.cvv) {
            $('#submit').attr('disabled', 'disabled');
            return false;
        }
        $('form').html('<h2>Loading...</h2>');
        var x = setTimeout(function () {
            $('form').html('<h1>Form submited</h1>');
        }, 3000)
    })

});

var formValid = {
    cc: false,
    date: false,
    email: true,
    cvv: false
};

var validators = {

    email: function (val) {
        return is.email(val);
    },
    creditCard: function (val) {
        return is.creditCard(val);
    },
    dateString: function (val) {
        return is.dateString(val);
    },
    cvv: function (val) {
        console.log(val);
        return is.within(parseInt(val), 100, 999);

    }
};

