<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>邮件安全演练</title>
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      font-family: "Microsoft Yahei", sans-serif;
      max-width: 720px;
      margin: 60px auto;
      padding: 0 20px;
    }
    .notice {
      background-color: #e8f4ff;
      border: 1px solid #94c8ef;
      border-radius: 10px;
      padding: 24px;
    }
    h2 {
      margin-top: 0;
    }
  </style>
</head>
<body>
  <div class="notice">
    <h2>【正式告知：邮件安全演练】</h2>
    <p>本次为预先通知的网络安全演练。访问将记录访问时间、公网 IP，仅用于统计访问量，演练结束后统一删除全部数据。</p >
    <div id="result"></div>
  </div>

  <script>
    async function startTrack() {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        const ip = ipData.ip;

        const res = await fetch("/api/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ip: ip,
            time: new Date().toISOString()
          })
        });

        const data = await res.json();
        document.getElementById("result").innerHTML =
          `总点击次数：${data.totalClick}<br>独立访问人数：${data.uniqueCount}`;
      } catch (err) {
        document.getElementById("result").innerText = "记录失败";
      }
    }
    startTrack();
  </script>
</body>
</html>
