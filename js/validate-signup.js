// Lấy phần tử form
var signUpForm = document.getElementById("login-form");
// Xử lý sự kiện submit form
signUpForm.addEventListener("submit", function (event) {
// Ngăn chặn việc gửi form đi
event.preventDefault();
// Lấy giá trị của các phần tử input
var emailInput = document.querySelector('.login__input[type="email"]');
var telInput = document.querySelector('.login__input[type="tel"]');
// password input & password input repeat
var passwordInput = document.querySelector('.login__input[type="password"]');
var rememberCheckbox = document.querySelector(
  '.login__check input[type="checkbox"]'
);
var email = emailInput.value.trim();
var telephone = telInput.value.trim();
var password = passwordInput.value.trim();
var remember = rememberCheckbox.checked;
// Kiểm tra xem các trường nhập liệu có đúng định dạng hay không
if (!isValidEmail(email)) {
  alert("Email không hợp lệ!");
  emailInput.focus();
  return;
}
if(!isValidTelephone(telephone)) {
  alert("Số điện thoại không đúng định dạng");
  telInput.focus();
  return;
}
if (!isValidPassword(password)) {
  alert("Mật khẩu phải có ít nhất 6 ký tự!");
  passwordInput.focus();
  return;
}
// Nếu các trường nhập liệu hợp lệ, thực hiện gửi form đi
signUpForm.submit();
});
// Hàm kiểm tra định dạng email
function isValidEmail(email) {
  // Sử dụng regex để kiểm tra định dạng email
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function isValidTelephone(telephone){
  // Sử dụng regex để kiểm tra định dạng số điện thoại
  var telRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return telRegex.test(telephone);
}

// Hàm kiểm tra độ dài mật khẩu
function isValidPassword(password) {
  return password.length >= 6;
}
