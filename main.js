names_of_guests = [];

function submit(){
  var name= document.getElementById("Guest-name").value;
  names_of_guests.push(name);  
  
  document.getElementById("Horizontal list with commas").innerHTML = names_of_guests + '<br>';
  console.log(names_of_guests);
  document.getElementById("Horizontal list with commas").style.display = "inline-block";
  document.getElementById("Show_list_button").style.display = "inline-block";
 
  
  
}

function Show_list(){
  var number= 0;
    var display_name_of_guests = [];
    var length_of_array= names_of_guests.length;
    console.log(length_of_array)
    for (var i=0;i<length_of_array;i++){
        number = number + 1;
        display_name_of_guests.push('<strong>' + number + "." + '</strong>' + "Name - "  + '<strong>' +names_of_guests[i] + '</strong>' + '<br>');
    }
    
    console.log(display_name_of_guests);
    var remove_commas = display_name_of_guests.join("");
    console.log(remove_commas);
    document.getElementById("vertical list_not sorted").innerHTML = remove_commas;
    document.getElementById("vertical list_not sorted").style.display = "inline-block";
    document.getElementById("sort-button").style.display = "inline-block";
    document.getElementById("search-span").style.display = "inline-block";

}

function sort_list(){
  number_i = 0;
    display_name_of_guests_w = [];
    names_of_guests.sort();
    var length_of_array_l = names_of_guests.length;
    for(var x=0; x<length_of_array_l; x++){
      number_i = number_i + 1;
      display_name_of_guests_w.push('<strong>' + number_i + "." + '</strong>' + "Name - "  + '<strong>' +names_of_guests[x] + '</strong>' + '<br>');

    }
    console.log(display_name_of_guests_w);
    var remove_commas_2 = display_name_of_guests_w.join("")
    document.getElementById("vertical list_sorted").innerHTML = remove_commas_2;
    document.getElementById("vertical list_sorted").style.display = "inline-block";
   
}
function search(){
  var s = document.getElementById("search-input").value;
  var found= 0;
  var j;
  for (j=0;j<names_of_guests.length;j++){
    if (s==names_of_guests[j]){
      found= found +1;
    }
  }
  document.getElementById("Show times").innerHTML = "name found" + '<strong>' + found + '<strong>' + "time/s";
  console.log("name found" + found + "time/s");
}
function Show_check_list(){

  var check_list_array = [];
  var number_j = 0;
  names_of_guests.sort()
  var length_of_array_ = names_of_guests.length;
  for (var r=0; r<length_of_array_; r++){
    number_j= number_j + 1;
    check_list_array.push('<strong>' + number_j + "." + names_of_guests[r] + '<strong>' +  '<input type="checkbox" style = " width : 20px; height : 20px; margin: 10px; " id= var number_j >'  + '<br>');
  }
  console.log(check_list_array);
  var remove_commas_3 = check_list_array.join(" ")
  document.getElementById("Check_list").innerHTML = remove_commas_3;
  document.getElementById("Check_list").style.display = "inline-block";
  document.getElementById("Check_list_button").style.display = "inline-block";
}


