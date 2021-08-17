open = true;

function email() {
  hsycms.confirm(
    "你确定要打开嘛",
    function (res) {
      hsycms.success("跳转中...");
      $("#ffrun").css("visibility", "visible");
      document.getElementById("serech").src = "https://hack.zkaq.cn/";
      document.getElementById("serechtext").value = "https://hack.zkaq.cn/";
    },
    function (res) {
      hsycms.fail("欢迎下次打开");
    }
  );
}
function studyawa() {
  if (open) {
  } else {
    $("#folderdiv1").css("background-color", "#e95420");
    $("#folderdiv2").css("background-color", "");
    $("#folder2").css("display", "none");
    $("#folder1").css("display", "inline");
    open = true;
  }
}

function about() {
  if (open) {
    $("#folderdiv1").css("background-color", "");
    $("#folderdiv2").css("background-color", "#e95420");
    $("#folder1").css("display", "none");
    $("#folder2").css("display", "inline");
    open = false;
  }
}

function tools() {
  if (document.getElementById("tools").style.display == "none") {
    $("#tools").css("display", "block");
  } else {
    $("#tools").css("display", "none");
  }
}
