var posts=["2023/08/06/hello-world/","2025/08/29/Github_Pages/","2025/08/18/HJX_C/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };