var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].split("=");
 paravalue=parseInt(para[1]);
}
var idb=window.indexedDB || window.mozIndexedDB ||
window.msIndexedDB || window.webkitIndexedDB;
if(!idb in window){
  console.log("indexedDB is not supported");
}
//indexedDB creation
var request;
var store;
var open=idb.open("storeData",1);
console.log("IndexedDb is created");
open.onupgradeneeded=function (e){
request=e.target.result;
store=request.createObjectStore
("formdata",{keyPath:"id",autoIncrement:true});
console.log("store is created");
}

open.onerror=function(error){
  console.log("Error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
var info=store.get(paravalue);
info.onsuccess=function(data){
console.log(data);
 persnlinfo(data.target.result);

}
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function persnlinfo(pi) {
  var image=document.createElement("img");
  image.src="images/man.svg";
  image.alt=pi.name;
  left.append(image);
  var name=document.createElement("h1");
  name.textContent=pi.name;
  left.append(name);
var h=document.createElement("h2");
h.textContent=pi.address;
left.append(h);
  var des=document.createElement("h2");
  des.textContent=pi.designation;
 left.append(des);
 var email=document.createElement("h2");
 email.textContent=pi.email;
 left.append(email);
 var mbl=document.createElement("h2");
 mbl.textContent=pi.mobile;
 left.append(mbl);

 var head=document.createElement("h2");
 head.textContent="career Objective";
 right.append(head);
 // var hr=document.createElement("hr");
 // right.append(hr);
  var career=document.createElement("h3");
   career.textContent=pi.career;
  right.append(career);
  var hr=document.createElement("hr");
  right.append(hr);
  // var hr=document.createElement("hr");
  // right.append(hr);
  var head1=document.createElement("h2");
  head1.textContent="Education Details";
  right.append(head1);
  var hr=document.createElement("hr");
  right.append(hr);
  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>year</th><th>percent</th></tr>";
  var tr2="";
  for(var i in pi.edu){

    tr2=tr2+"<tr>"+"<td>"+pi.edu[i].institute+
    "</td>"+"<td>"+pi.edu[i].branch+
    "</td>"+"<td>"+pi.edu[i].year+
    "</td>"+"<td>"+pi.edu[i].percent+"</td>"+"</tr>";
    table.innerHTML=tr1+tr2;
    right.append(table);
  }
  var hr=document.createElement("hr");
  right.append(hr);
  var head=document.createElement("h2");
  head.textContent="Skills";
  right.append(head);
  var hr=document.createElement("hr");
  right.append(hr);
    // var skl=document.createElement("h3");
  // skl.textContent=pi.skills;
  // right.append(skl);
  var skl= document.createElement("h3");
   skl.textContent= pi.skills;
  right.append(skl);

}
