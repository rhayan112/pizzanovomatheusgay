var pedidos = {};

function test_pizza() {
  document.getElementById("drinks").style.display = "none";
  document.getElementById("drink-menu").style.backgroundColor = "#ecf9fc";
  document.getElementById("pizza-menu").style.backgroundColor = "#00C5A1";
  document.getElementById("pizzas").style.display = "flex";
}

function test_drink() {
  document.getElementById("pizzas").style.display = "none";
  document.getElementById("drinks").style.display = "flex";
  document.getElementById("pizza-menu").style.backgroundColor = "#ecf9fc";
  document.getElementById("drink-menu").style.backgroundColor = "#00C5A1";
}

function addItemToCart(item, value, name) {
  if (pedidos['total'] == undefined) {
    pedidos['total'] = {
      total: value
    }
  } else {
    pedidos['total'].total = parseFloat((pedidos['total'].total + value).toFixed(2))
  }

  document.getElementById("empty-cart").style.display = "none";

  if (pedidos[item] == undefined) {
    pedidos[item] = {
      type: item,
      count: 1,
      value: value,
      name: name
    }
  } else {
    pedidos[item].count += 1
    pedidos[item].value = parseFloat((pedidos[item].value + value).toFixed(2))
  }

  document.getElementById("devliery-started").style.display = "none";

  document.getElementById("pizza").style.display = "block";
  document.getElementById("drink").style.display = "block";
  document.getElementById("pizza-total").style.display = "block";
  document.getElementById("drink-total").style.display = "block";
  document.getElementById("total").style.display = "block";

  document.getElementById("send-order").disabled = false;
  
  updateTotalCart()
}

function updateTotalCart() {
  Object.values(pedidos).forEach(element => {
    if (element.type != undefined) {
      document.getElementById(element.type).textContent = element.count + "x " + element.name
      document.getElementById(element.type + "-total").textContent = "R$ " + element.value
    }
  });
  document.getElementById("total").textContent = "Total: R$ " + pedidos['total'].total
}

function launch_toast() {
  var x = document.getElementById("toast")
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);

  document.getElementById("pizza").style.display = "none";
  document.getElementById("drink").style.display = "none";
  document.getElementById("pizza-total").style.display = "none";
  document.getElementById("drink-total").style.display = "none";
  document.getElementById("total").style.display = "none";


  document.getElementById("devliery-started").style.display = "block";

  document.getElementById("send-order").disabled = true;

  pedidos = {}
}