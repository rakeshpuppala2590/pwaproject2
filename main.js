


/**function Loadjson(file,callback){
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
  education(data.education);
  keyskills(data.keyskills);
  achievements(data.achievements);
})**/

function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then (response=>{
      if (response.ok) {
        resolve(response.json());
      }
      else {
        reject(new Error('error'));
      }
    })
  })
}

var file =loadjson("data.json");
file.then(data=>{
  console.log(data);
  basics(data.details);//sending data from json to function basics
  career(data.career);
  education(data.education);
  keyskills(data.keyskills);
  achievements(data.achievements);

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

function education(edu){

  var ed = document.createElement("h2");
  ed.textContent="Educational qualifications:";
  child2.appendChild(ed);
  for(i=0;i<edu.length;i++)
  {
    var degree=document.createElement("h3");
    degree.textContent=edu[i].degree;
    child2.appendChild(degree);
   /*
    var inter=document.createElement("h3");
    inter.textContent=edu[i].institute;
    child2.appendChild(inter);

    var dr=document.createElement("h3");
    dr.textContent=edu[i].date;
    child2.appendChild(dr);*/
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    li.textContent=edu[i].institute;
    ul.appendChild(li);
    child2.appendChild(ul);

    var li2=document.createElement("li");
    li2.textContent=edu[i].date;
    ul.appendChild(li2);
    child2.appendChild(ul);

  }


}

function keyskills(skillinfo)
{
  var ed = document.createElement("h2");
  ed.textContent="Technical skills:";
  child2.appendChild(ed);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  var skilldata=document.createElement("table");
  skilldata.border="1";
  child2.appendChild(skilldata);

  tabledata="";
  for(i=0;i<skillinfo.length;i++)
  {
    tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].info+"</td></tr>";
  }
  skilldata.innerHTML = tabledata;
}



function achievements(skillinfo)
{
  var ed = document.createElement("h2");
  ed.textContent="Achievements:";
  child2.appendChild(ed);

  var hr=document.createElement("hr");
  child2.appendChild(hr);

  var skilldata=document.createElement("table");
  skilldata.border="1";
  child2.appendChild(skilldata);

  tabledata="";
  for(i=0;i<skillinfo.length;i++)
  {
    tabledata+="<tr><td>"+skillinfo[i].achname+"</td><td>"+skillinfo[i].ach+"</td></tr>";
  }
  skilldata.innerHTML = tabledata;
}
