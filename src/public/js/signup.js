console.log("Signup frontend javascript file");

$(function () {});

function validateSignupForm() {
  const memberNick = $(".member-nick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPassword = $(".confirm-password").val();

  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Please inser all required inputs");

    return false;
  }

  if (memberPassword !== confirmPassword) {
    alert("Password is not same, please check the password !!!");
    return false;
  }
}
