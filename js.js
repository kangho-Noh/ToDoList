  submitClicked = function(){
    var li_count = document.getElementById("list").getElementsByTagName("li").length;
    document.getElementById("list").innerHTML+="<li>"+document.getElementById("textbox").value+"<input type=\"button\" id=\""+li_count+"\" value=\"x\" onclick=\"deleteClicked(this.id)\"> </li>"
  }

  deleteClicked = function(index){
    var listtodo = document.getElementsByTagName("li");
    console.log(index, listtodo[index]);
    listtodo[index].style.textDecoration = "line-through";
  }
