function submitData()
{
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var address=document.querySelector("#address").value;
  var designation=document.querySelector("#designation").value;
  var email=document.querySelector("#email").value;
  var mobile=document.querySelector("#mobile").value;
  var ginstitute=document.querySelector("#ginstitute").value;
  var branch=document.querySelector("#branch").value;
  var gyear=document.querySelector("#gyear").value;
  var gper=document.querySelector("#gper").value;
  var college=document.querySelector("#college").value;
  var group=document.querySelector("#group").value;
  var  iyear=document.querySelector("#iyear").value;
  var iper=document.querySelector("#iper").value;
  var school=document.querySelector("#school").value;
  var course=document.querySelector("#course").value;
  var syear=document.querySelector("#syear").value;
  var sper=document.querySelector("#sper").value;
  var skills=document.querySelector("#skills").value;
//indexed DB implementation
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
  var transaction=request.transaction
  ("formdata","readwrite");
  store=transaction.objectStore("formdata");
store.put({
  career:career,
  name:name,
  address:address,
  designation:designation,
  email:email,
  mobile:mobile,
  edu:[
    {
  institute:ginstitute,
  branch:branch,
  year:gyear,
  percent:gper
},
{
  institute:college,
   branch:group,
   year:iyear,
   percent:iper,
 },
 {
institute:school,
 branch:course,
 year:syear,
percent:sper,
}],

 skills:skills


});

}

window.open("index.html");
}
