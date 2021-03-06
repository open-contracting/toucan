(function(){
    this.inputDelete = function (button) {
        $(button).parents('.form-group').remove();
        if ($('.input-url-container .btn.input-delete').length < 2) {
            $('.input-url-container .btn.input-delete').attr('disabled', true);
        }
    };
    $('#add-url').click(function () {
        var numInputs = $('.input-url-container').children().length;
        $('.input-url-container .btn.btn-danger').attr('disabled', false);
        $('.input-url-container').append('<div class="form-group" id="input_url_' + numInputs + '">' +
            '<div class="input-group">' +
            '<input type="text" class="form-control" name="input_url_' + numInputs + '"/>' +
            '<span class="input-group-btn">' +
            '<button class="btn btn-danger input-delete" onclick="inputDelete(this)" type="button">x</button>' +
            '</span>' +
            '</div>' +
            '</div>')
    });
})();