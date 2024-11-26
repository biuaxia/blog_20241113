var posts=["2024/11/15/Windows-10-获取当前壁纸和锁屏.html","2024/11/26/hello-world.html","2024/11/19/风灵月影更新日志.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };