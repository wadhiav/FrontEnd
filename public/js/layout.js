$(document).ready(function () {


    //GET from server - set the name in the html file
    //set the name of the user
        $.ajax({
            url: '/user_name', //send this link to server
            method: 'GET', //send this function to server
            async: false,
            contentType: 'application/json',
            success: function (response) {
                //$('#users_name').html(response.id + "  " + response.name + "  " + response.email + "  " + response.password );
                $('#users_name').html("Welcome  " + response.name);
            }
        });

    $.ajax({
        url: '/user_name', //send this link to server
        method: 'GET', //send this function to server
        async: false,
        contentType: 'application/json',
        success: function (response) {
            //$('#users_name').html(response.id + "  " + response.name + "  " + response.email + "  " + response.password );
            $('#users_email').html(response.email);
        }
    });




});