
function getData(url, method){
	var promise = new Promise(function(resolve, reject){
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resolve(this.responseText);
    }
  };
  xhttp.open(method, url, true);
  xhttp.send();

  });
  return promise;
}



function positive(data){
	var el = document.getElementById("root");
	el.innerHTML = data;
}

var clickHandler = function(){
	getData("https://api.github.com/users/defunkt","GET")
  .then(function(resp){
      positive(resp);
  });
}
document.getElementById("getData").addEventListener("click", clickHandler);
