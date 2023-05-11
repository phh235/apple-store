// Thêm giỏ hàng
const btn = document.querySelectorAll("button");
// console.log(btn);
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    var btnItem = event.target;
    var product = btnItem.parentElement.parentElement;
    var productImg = product.parentElement.querySelector("img").src;
    var productName = product.parentElement.querySelector("p").innerText;
    var productPrice = product.parentElement.querySelector("h").innerText;
    // console.log(productImg,productName,productPrice);
    addCart(productImg, productName, productPrice);
  });
});
function addCart(productImg, productName, productPrice) {
  var addTr = document.createElement("tr");
  var trContent = `<tr><td><img src="${productImg}" alt="Sản phẩm 1" /></td><td>${productName}</td><td><span>${productPrice}</span></td><td><input type="number" min="1" value="1" /></td><td style="cursor: pointer;">Xóa</td></tr>`;
  addTr.innerHTML = trContent;
  var cartTable = document.querySelector("tbody");
  // console.log(cartTable);
  cartTable.append(addTr);
  cartTotal();
}

// Total Price
function cartTotal() {
  var cartItem = document.querySelectorAll("tbody tr");
  // console.log(cartItem);
  for(var i=0; i<cartItem.length; i++) {
    // console.log(i);
    var inputValue = cartItem[i].parentElement.querySelector("input").value;
    // console.log(inputValue);
    var productPrice = cartItem[i].querySelector("span").innerHTML;
    // console.log(productPrice);
    totalA= inputValue * productPrice;
    console.log(totalA);
    }
}