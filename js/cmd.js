var nowdir = "";
var cmdnr =
  '<div class="cmddiv"><a style="color: whitesmoke;padding-left: 5px;"><a style="color: white;" class="lead"></a><font size="5" color="#8be9fd">root:</font></a>';

function cmding() {
  var cmdnr2 = document.getElementById("cmdtext").value;
  var cmdrun = "无该命令,请输入help获取可用命令";

  if (cmdnr2 == "ping" + cmdnr2.replace("ping", "")) {
    var urlping = cmdnr2.replace("ping ", "");
    cmdrun = getTextSync("/api/ping.php?ip=" + urlping);
  }

  if (cmdnr2 == "nmap" + cmdnr2.replace("nmap", "")) {
    var urlping = cmdnr2.replace("nmap ", "");
    cmdrun = getTextSync("/api/nmap.php?ip=" + urlping);
  }

  if (cmdnr2 == "rm rf /*") {
    if (nowdir == "") {
      cmdrun = "执行中...";
    }
  }

  if (cmdnr2 == "ls") {
    if (nowdir == "") {
      cmdrun = "艾伦の学习♂资料 回收站 桌面";
    }

    if (nowdir == "正经の学习资料") {
      cmdrun = "渗透学习路线脑图";
    }

    if (nowdir == "艾伦の学习♂资料") {
      cmdrun = "恕染姐姐の照片.jpg 落の照片.png";
    }

    if (nowdir == "回收站") {
      cmdrun =
        "2021springboot全新教程全套.zip 2021新版vue全套教程.zip 一个视频学会c++.mp4";
    }

    if (nowdir == "桌面") {
      cmdrun = "terminal firefox vscode vx 正经の学习资料";
    }
  }

  if (cmdnr2 == "help") {
    cmdrun = "help|ls|echo|cd|clear|ping|rm rf /*|nmap";
  }

  if (cmdnr2 == "echo" + cmdnr2.replace("echo", "")) {
    cmdrun = cmdnr2.replace("echo", "");
  }

  if (cmdnr2 == "ls -all") {
    cmdrun = "艾伦の学习♂资料 回收站 桌面 正经の学习资料 .flag.txt";
  }

  if (cmdnr2 == "cat .flag.txt") {
    cmdrun = "6L+Z5LmI5Zac5qyiY3RmPw==";
  }

  if (cmdnr2 == "cd" + cmdnr2.replace("cd", "")) {
    var dir = cmdnr2.replace("cd ", "");
    if (cmdnr2 == "cd .." || cmdnr2 == "cd ") {
      cmdrun = "请输入cd ~回去😅";
    } else {
      if (dir == "艾伦の学习♂资料" || dir == "回收站" || dir == "桌面") {
        nowdir = cmdnr2.replace("cd ", "");
        document.getElementById("cmddir").innerHTML = ":" + nowdir;
        cmdrun = "";
      } else {
        if (dir == "~") {
          nowdir = "";
          document.getElementById("cmddir").innerHTML = ":";
          cmdrun = "";
        } else {
          cmdrun = "没有这个目录";
        }
      }
    }
  }

  var cmdnr3 =
    cmdnr +
    '<a style="padding-left: 15px;"><font size="5" color="white">' +
    cmdnr2 +
    "</font></a></div>" +
    '<font size="5" color="white">' +
    cmdrun +
    "</font>";
  $("#nulldiv").append(cmdnr3);
  document.getElementById("cmdtext").value = "";

  if (cmdnr2 == "clear") {
    document.getElementById("nulldiv").innerHTML = "";
    cmdrun = "";
  }

  if (cmdrun == "执行中...") {
    setTimeout(function () {
      window.location.href = "/";
    }, 5000);
  }
}

function getTextSync(url) {
  var request = new XMLHttpRequest(); // 创建新请求
  request.open("GET", url, false); // 传递false实现同步
  request.send(); // 立即发送请求

  // 如果请求不是200 OK,就报错
  if (request.status !== 200) throw new Error(request.statusText);
  // 如果类型报错
  var type = request.getResponseHeader("Content-Type");
  // if(!type.match(/^text/))
  //     throw new Error("Expected textual response;got:"+type);
  return request.responseText;
}
