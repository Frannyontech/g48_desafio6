$(function (){
    $('[data-toggle="tooltip"]').tooltip()
})

$( document ).ready(function(){
    $( "#btn_mail" ).click(function(){
        var section_alert = $('#myalert');

        var nodo = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`
        section_alert.append(nodo);
    });

    $("#dblclick-color").on("dblclick", function(){
        $(this).css({
        "color": "red"
        });
    });
    $("#dbclick-color_2").on("dblclick", function(){
        $(this).css({
        "color": "red"
        });
    });
});

