let submit = document.querySelector("button");
submit.addEventListener("click", createTable);

function createTable(e) {
  e.preventDefault();

  let tb = document.querySelector("tbody");
  let tr = document.createElement("tr");

  createTd("td", fname.value);
  createTd("td", lname.value);

  let addr = [];
  addr.push(address1.value);
  addr.push(address2.value);
  createTd("td", addr.join(" "));

  createTd("td", pincode.value);

  let gender = document.querySelector("input[name=gender]:checked").value;
  createTd("td", gender);

  let food = document.getElementsByName("food");
  let selectedFood = [],
    foodCount = 0;

  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      selectedFood.push(food[i].value);
      foodCount++;
    }
  }

  if (selectedFood.length > 1) createTd("td", selectedFood.join(", "));
  else finalFoods = alert("Choose atleast 2 foods");

  createTd("td", state.value);

  createTd("td", country.value);

  document.getElementById("tempform").reset();

  function createTd(ele, value) {
    let td = document.createElement(ele);
    td.innerHTML = value;
    tr.append(td);
  }
  tb.append(tr);
}
