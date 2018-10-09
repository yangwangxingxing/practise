// $(function(){
//   $(".login").click(function(){
//     var uname=$(".uname").val();
//     var upwd=$(".upwd").val();
//     if(uname=""){
//       alert("账号不能为空");
//     }
//     $.ajax({
//       url:"http://localhost:3000/users/signin",
//       type:"post",
//       data:{uname,upwd},
//       dataType:"jsonp",
//       success:function(data){
//         if(data.ok==0)
//           alert(data.msg);
//         else{
//           alert("登录成功,自动返回上一页!");
//           if(location.search.indexOf("back=")!=-1){
//             var back=location.search.slice(10);
//             location.href=back;
//           }else{
//             location.href="http://localhost:3000/index.html"
//           }
//         }
//       }
//     })
//   })
// })
 
var form=document.forms[0];
var txtName=form.uname;
var txtPwd=form.upwd;
var txtTest=form.test;
txtName.onfocus=getFocus;
txtPwd.onfocus=getFocus;
txtTest.onfocus=getFocus;
function getFocus(){
  this.className="txt_focus";
  var div=this.parentNode.lastElementChild;
  div.className="";
}
txtName.onblur=function(){
  vali(this,/^\w{1,10}$/);
}
function vali(txt,reg){
  txt.className="";
  var div=txt.parentNode.lastElementChild;
  if(reg.test(txt.value)){
    div.className="vali_success";
    return true;
  }
  else{
    div.className="vali_fail";
    return false;
  }
}
txtPwd.onblur=function(){
  vali(this,/^\d{6}$/);
}
txtTest.onblur=function(){
  vali(this,/^[\d\w]{4}$/);
}
form.onsubmit=function(e){
  var rName=vali(txtName,/^\w{1,10}$/);
  var rPwd=vali(txtPwd,/^\d{6}$/);
  var rTest=vali(txtTest,/^[\d\w]{4}$/);
  if(!(rName&&rPwd))
    e.preventDefault();
}