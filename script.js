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

  function createTd(ele, value) {
    let td = document.createElement(ele);
    td.innerHTML = value;
    tr.append(td);
  }
  tb.append(tr);
}
