const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "演员",
        artist: '朴树',
        url: 'http://m10.music.126.net/20200308000137/c73d0d86c2ac3207a93e3dd9295a9385/ymusic/e7c5/84f9/897e/a897fda63f7e9f788eac7abbc0bf8602.mp3',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
    ]
});