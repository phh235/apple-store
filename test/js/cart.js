// ẩn sản phẩm, input cái nào thì gọi cái đó
var grid = Array.from(
  document.querySelector("#product").querySelectorAll("tr")
);
grid.forEach((e) => {
  e.style.display = "none";
});
var tbody = Array.from(document.querySelector("tbody").children);
var p = JSON.parse(localStorage.getItem("cart"));

console.log(
  tbody.indexOf(document.querySelector("#product").querySelector("tr"))
);
p.forEach((e) => {
  grid.forEach((ev) => {
    if (tbody.indexOf(ev) == e) {
      ev.style.display = "";
      // console.log(e);
    }
  });
});
// total price input
function tinh_tt(input) {
  var gia = parseFloat(input.parentElement.previousElementSibling.dataset.gia); // Lấy giá từ thuộc tính "data-gia" trên thẻ input
  var so_luong = input.value;
  var thanh_tien = gia * so_luong;
  input.parentElement.parentElement.children[4].innerHTML =
    thanh_tien.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  tinh_tong();
}
// total price all products
function tinh_tong() {
  var inputs = document.querySelectorAll('input[type="number"]');
  var tong_tt = 0;
  for (var i = 0; i < inputs.length; i++) {
    var so_luong = inputs[i].value; // Lấy số lượng sản phẩm từ trường nhập liệu
    var gia = inputs[i].parentElement.parentElement.children[2].dataset.gia; // Lấy giá từ thuộc tính "data-gia" trên thẻ input
    var thanh_tien = gia * so_luong;
    tong_tt += thanh_tien;
  }

  document.getElementById("tong").innerHTML = tong_tt.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}
// remove product
function xoa(x) {
  document.getElementById("product").removeChild(x.parentElement.parentElement);
  tinh_tong();
  if (p.includes(tbody.indexOf(x.parentElement.parentElement))) {
    p.splice(p.indexOf(tbody.indexOf(x.parentElement.parentElement)), 1);
    localStorage.setItem("cart", JSON.stringify(p));
  }
}
