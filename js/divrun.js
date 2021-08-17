function move(dirid) {
  var _move = false; 
  var _x, _y; 
  $(dirid)
    .click(function () {
      //alert("click");
    })
    .mousedown(function (e) {
      _move = true;
      _x = e.pageX - parseInt($(dirid).css("left"));
      _y = e.pageY - parseInt($(dirid).css("top"));
    });
  $(document)
    .mousemove(function (e) {
      if (_move) {
        var x = e.pageX - _x; 
        var y = e.pageY - _y;
        $(dirid).css({ top: y, left: x }); 
      }
    })
    .mouseup(function () {
      _move = false;
      $(dirid).fadeTo("fast", 1);
    });
}

//放大功能区
function big(divbigid) {
  if (document.getElementById(divbigid).style.height != "100%") {
    document.getElementById(divbigid).style.height = "100%";
    document.getElementById(divbigid).style.width = "100%";
  } else {
    document.getElementById(divbigid).style.height = "60%";
    document.getElementById(divbigid).style.width = "60%";
  }
}
// 右键菜单
function showMenu(env) {
  env.preventDefault();
  //env 表示event事件
  // 兼容event事件写法
  var e = env || window.event;

  // 获取菜单，让菜单显示出来
  var context = document.getElementById("context");
  context.style.display = "block";

  //  让菜单随着鼠标的移动而移动
  //  获取鼠标的坐标
  var x = e.clientX;
  var y = e.clientY;

  context.style.left = x - 200 + "px"; //Math.min(w-202,x)+"px";
  context.style.top = y + "px"; //Math.min(h-230,y)+"px";

  return false;
}
// 当鼠标点击后关闭右键菜单
document.onclick = function () {
  closeMenu();
};
function closeMenu() {
  var contextmenu = document.getElementById("context");
  contextmenu.style.display = "none";
}
