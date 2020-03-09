const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "演员",
        artist: '薛之谦',
        url: 'https://m701.music.126.net/20200309161103/4fc0f7101027f32b629f8083c7ba6e9d/jdyyaac/5358/0609/5409/d2c0282f3c1c160c13f9cc4684aa9853.m4a',
        cover: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2755361489,642864069&fm=26&gp=0.jpg',
      }
    ]
});