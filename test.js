var listItem = "We need beer";

var li = "</li>This is our list item</li>";
$("ul").append(li);

var span = "<span>This is a span</span>";
$(".spannie").append(span);


function beerMe(){}
  var age, served;
  age = document.getElementById("age").value;
  served = (age < 21) ? "sorry, I cannot" : "Yes, I can";
  document.getElementById('result').innerHTML = served + "served you a beer"
}
//.filter()
//Reduce the set of matched elements to those that match the selector or pass the function’s test.

//.each()
//Iterate over a jQuery object, executing a function for each matched element.
