 $(document).ready(function(){
        $('#old').hide();
         $('#new').hide();
          $('#con').hide();

        var old_err=true;
         var new_err=true;
        var con_err=true;

        $('#olds').keyup(function(){
     old_check();
        });
         // old name validation
        function old_check(){
          var old_val= $('#olds').val();
          if(old_val.length==''){

            $('#old').show();
            $('#old').html("**please fill username");
            $('#old').focus();
            $('#old').css("color","red");
            old_err=false;
            return false;
          }else{
            $('#old').hide();
          }
        }

         // new name validation
         function new_check(){
          var new_val= $('#news').val();
          if(new_val.length==''){

            $('#new').show();
            $('#new').html("**please fill username");
            $('#new').focus();
            $('#new').css("color","red");
            new_err=false;
            return false;
          }else{
            $('#new').hide();
          }
        }

        //  confirm validation
        function con_check(){
          var con_val= $('#cons').val();
          if(con_val.length==''){

            $('#con').show();
            $('#con').html("**please fill username");
            $('#con').focus();
            $('#con').css("color","red");
            con_err=false;
            return false;
          }else{
            $('#con').hide();
          }


        }


        $('#submitbtn').click(function(){
                 old_err=true;
                new_err=true;
                 con_err=true;

                 old_check();
                new_check();
                con_check();

                 if((old_err==true)&&(new_err==true) &&(con_err==true))
                 {
                  myFun();
                   return true;
                 }else{
                   return false;
                 }
                });

                });

               function myFun(){
  var x=document.getElementById("msg");
  x.className="show";
  setTimeout(function(){
    x.className.replace("show"," ");},3000);
}


