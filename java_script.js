function expandit(id){
  obj = document.getElementById(id);
  if (obj.style.display=="block") obj.style.display="none";
  else obj.style.display="block";
}

function expandit2(id){
  obj = document.getElementById(id);
  if (obj.style.display=="block") obj.style.display="none";
  else obj.style.display="block";
}

function expandit3(id){
  obj = document.getElementById(id);
  if (obj.style.display=="block") obj.style.display="none";
  else obj.style.display="block";
}
var show;
function hidetxt(id){
 param=document.getElementById(id);
 if(param.style.display == "none") {
 if(show) show.style.display = "none";
 param.style.display = "block";
 show = param;
 }else param.style.display = "none"
}

