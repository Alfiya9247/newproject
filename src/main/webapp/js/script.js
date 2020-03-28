

///* firstname validation*/

      $(document).ready(function(){
        $('#usercheck').hide();
         $('#mobilecheck').hide();
         $('#emailcheck').hide();
         $('#passcheck').hide();
         $('#concheck').hide();

        var user_err=true;
         var mobile_err=true;
         var email_err=true;
        var pass_err=true;
         var con_err=true;

        $('#name').keyup(function(){
     username_check();
        });

        function username_check(){
          var user_val= $('#name').val();
          if(user_val.length==''){

            $('#usercheck').show();
            $('#usercheck').html("**please fill username");
            $('#usercheck').focus();
            $('#usercheck').css("color","red");
            user_err=false;
            return false;
          }else{
            $('#usercheck').hide();
          }

          if((user_val.length<3) ||(user_val.length>20)){
            $('#usercheck').show();
            $('#usercheck').html("**please fill username length must be b/w 2 and 20");
            $('#usercheck').focus();
            $('#usercheck').css("color","red");
            user_err=false;
            return false;
          }else{
            $('#usercheck').hide();

          }
                }



//  mobile validation
$('#mobnum').keyup(function(){
     mobile_check();
        });
        function mobile_check(){
          var user_num=$('#mobnum').val();
          if(user_num.length==""){
            $('#mobilecheck').show();
            $('#mobilecheck').html("**please fill mobile num");
            $('#mobilecheck').focus();
            $('#mobilecheck').css("color","red");
            mobile_err=false;
            return false;
          }else{
            $('#mobilecheck').hide();
          }

          if(user_num.length!=10){
            $('#mobilecheck').show();
            $('#mobilecheck').html("** length must be 10");
            $('#mobilecheck').focus();
            $('#mobilecheck').css("color","red");
            mobile_err=false;
            return false;
          }else{
            $('#mobilecheck').hide();
          }
                }

//       //  email validation
$('#em').keyup(function(){
     email_check();
        });
        function email_check(){
          var email=$('#em').val();
          if(email.length==""){
            $('#emailcheck').show();
            $('#emailcheck').html("**please fill mobile num");
            $('#emailcheck').focus();
            $('#emailcheck').css("color","red");
            mail_err=false;
            return false;
          }else{
            $('#mobilecheck').hide();
          }
        }

// // password validation
          $('#pass').keyup(function(){
       password_check();
        });
        function password_check(){
          var passwordstr=$('#pass').val();
          if(passwordstr.length==" "){
            $('#passcheck').show();
            $('#passcheck').html("**please fill username");
            $('#passcheck').focus();
            $('#passcheck').css("color","red");
            pass_err=false;
            return false;
          }else{
            $('#passcheck').hide();
          }

          if((passwordstr.length<3) ||(passwordstr.length>20)){
            $('#passcheck').show();
            $('#passcheck').html("** length must be b/w 6 and 20");
            $('#passcheck').focus();
            $('#passcheck').css("color","red");
            pass_err=false;
            return false;
          }else{
            $('#passcheck').hide();
          }
                }

                // confirm validation
          $('#con').keyup(function(){
       con_check();
        });
        function con_check(){
          var confirm=$('#con').val();
          var passwordstr=$('#pass').val();
          if(confirm.length==" "){
            $('#concheck').show();
            $('#concheck').html("**please fill username");
            $('#concheck').focus();
            $('#concheck').css("color","red");
            con_err=false;
            return false;
          }else{
            $('#concheck').hide();
          }

          if(passwordstr!=confirm){
            $('#concheck').show();
            $('#concheck').html("** no match");
            $('#concheck').focus();
            $('#concheck').css("color","red");
            con_err=false;
            return false;
          }else{
            $('#concheck').hide();
          }
                }

$('#submitbtn').click(function(){
                 user_err=true;
                 mobile_err=true;
                 email_err=true;
                 pass_err=true;
                 con_err=true;

                 username_check();
                 mobile_check();
                 email_check();
                 password_check();
                 con_check();

                 if((user_err==true)&&(mobile_err==true) &&( email_err==true)&&(pass_err==true)&&(con_err==true)){
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


