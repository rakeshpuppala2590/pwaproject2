function Loadjson(file,callback){
  var x = new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
  if(x.readyState===4 && x.status == "200"){
    callback(x.responseText);
  }
};
x.send(null);
}

Loadjson("data.json",function(text){
  var data = JSON .parse(text);
  console.log(data);
  basics(data.details);
  career(data.career);
})

var child1 = document.querySelector(".child1");

function basics(det){
  var image=document.createElement("img");
  image.src=det.image;
  child1.appendChild(image);

  var name=document.createElement("h3");
  name.textContent=det.name;
  child1.appendChild(name);

  var regno=document.createElement("h3");
  regno.textContent=det.regno;
  child1.appendChild(regno);

  var phoneno=document.createElement("h3");
  phoneno.textContent=det.phoneno;
  child1.appendChild(phoneno);

  var email=document.createElement("a");
  email.href = "mailto:sindhu.mahankali8@gmail.com";
  email.textContent=det.email;
  child1.appendChild(email);

  var address=document.createElement("address");
  address.textContent=det.address;
  child1.appendChild(address);

  var hr = document.createElement("hr");
  child1.append(hr);


}

var child2 = document.querySelector(".child2");
function career(det){

  var carerobj=document.createElement("h2");
  carerobj.textContent=det.careerobj;
  child2.appendChild(carerobj);

  var hr = document.createElement("hr");
  child2.append(hr);

  var career=document.createElement("h3");
  career.textContent=det.info;
  child2.appendChild(career);
}
