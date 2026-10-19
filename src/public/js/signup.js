console.log("Signup frontend javascript file");

$(function () {
  const fileTarget = $(".file-box .upload-hidden");
  let filename;

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadFile = $(this)[0].files[0],
        fileType = uploadFile["type"],
        validImageType = ["image/jpg", "image/jpeg", "image/png"];
      if (!validImageType.includes(fileType)) {
        alert("please insert only jpeg, jpg, png");
      } else {
        if (uploadFile) {
          console.log(URL.createObjectURL(uploadFile));
          $(".upload-img-frame")
            .attr("src", URL.createObjectURL(uploadFile))
            .addClass("success");
        }
        filename = $(this)[0].files[0].name;
      }
      $(this).siblings(".upload-name").val(filename);
    }
  });
});

function validateSignupForm() {
  const memberNick = $(".member-nick").val(),
    memberPassword = $(".member-password").val(),
    memberPhone = $(".member-phone").val(),
    confirmPassword = $(".confirm-password").val();

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

  const memberImage = $(".member-image").get(0).files[0]
    ? $(".member-image").get(0).files[0].name
    : null;
  if (!memberImage) {
    alert("Please insert image");
    return false;
  }
}
