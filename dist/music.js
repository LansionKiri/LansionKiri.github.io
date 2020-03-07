const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "刚刚好",
        artist: '薛之谦',
        url: 'http://m10.music.126.net/20200308003119/3c9ceb3163411333adc661c19b549cac/ymusic/632f/4aed/a5ac/aa14f1a96651ac1b45a24663b1ec108e.mp3',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
    ]
});