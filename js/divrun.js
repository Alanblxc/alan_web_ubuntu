function move(dirid) {
  var _move = false; //移动标记
  var _x, _y; //鼠标离控件左上角的相对位置
  $(dirid)
    .click(function () {
      //alert("click");//点击（松开后触发）
    })
    .mousedown(function (e) {
      _move = true;
      _x = e.pageX - parseInt($(dirid).css("left"));
      _y = e.pageY - parseInt($(dirid).css("top"));
    });
  $(document)
    .mousemove(function (e) {
      if (_move) {
        var x = e.pageX - _x; //移动时根据鼠标位置计算控件左上角的绝对位置
        var y = e.pageY - _y;
        $(dirid).css({ top: y, left: x }); //控件新位置
      }
    })
    .mouseup(function () {
      _move = false;
      $(dirid).fadeTo("fast", 1); //松开鼠标后停止移动并恢复成不透明  "fast":规定褪色效果的速度。
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

  //  调整宽度和高度
  context.style.left = x - 200 + "px"; //Math.min(w-202,x)+"px";
  context.style.top = y + "px"; //Math.min(h-230,y)+"px";

  // return false可以关闭系统默认菜单
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
