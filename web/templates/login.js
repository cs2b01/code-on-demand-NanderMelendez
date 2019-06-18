function getData(){
        $('#nope').hide();
        $('#success').hide()
        $('#loader').show();
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //$('#action').html(response['statusText']);
            },
            error: function(response){
                //alert(JSON.stringify(response));
                if(response['status']==401){
                    $('#loader').hide();
                    $('#nope').show()
                }else{
                    $('#loader').hide();
                    $('#success').show();
                    window.open('index.html','_self')
                }
            }
        });
    }

function goback(){
    window.open('index.html','_self')
}