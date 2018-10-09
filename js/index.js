// $(function(){
//   $.ajax({
//     url:"http://localhost:3000/index.html",
//     type:"get"
//   })
//   .then(res=>{
//     document.getElementById("header")
//       .innerHTML=res;
//     var btnSearch=document.querySelector(
//       "#header>nav>div>div>div>img"
//     );
//     var input=btnSearch.parentNode
//                       .previousElementSibling;
//     btnSearch.onclick=function(){
//       if(input.value.trim()!=="")
//         location.href=`http://localhost:3000/products.html?kw=${input.value}`;
//     }
//     input.onkeyup=function(e){
//       if(e.keyCode==13)
//         btnSearch.onclick();
//     }

//     if(location.search.indexOf("kw=")!=-1){
//       input.value=
//         decodeURI(location.search.split("=")[1]);
//     }
//   });
// })

$(function(){ 
    $('#products').hover(function(){ 
      $('#all_products').show(); //显示下拉列表 
    },function(){ 
      $('#all_products').hide(); //鼠标移开后隐藏下拉列表 
    }); 
});
$(function(){
  $('#all_products').hover(function(){
    $('#all_products').show();
  })
})
