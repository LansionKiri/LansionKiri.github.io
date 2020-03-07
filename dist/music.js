const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
	loop: 'all',            <!-- 音频循环播放, 可选值: 'all', 'one', 'none'-->
    order: 'random',        <!-- 音频循环顺序, 可选值: 'list', 'random'-->
    preload: 'auto',        <!-- 预加载，可选值: 'none', 'metadata', 'auto'-->
    volume: 0.7,            <!-- 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效-->
    mutex: true,            <!-- 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 -->
    listFolded: false,      <!-- 列表默认折叠， false表示不折叠-->
    listMaxHeight: '120px', <!-- 列表最大高度，超出此高度将有滚动条-->
    lrcType: 0,             <!-- 歌词类型，0表示不显示歌词-->
    audio: [
	{
        name: "刚刚好",
        artist: '薛之谦',
        url: 'http://m10.music.126.net/20200308003119/3c9ceb3163411333adc661c19b549cac/ymusic/632f/4aed/a5ac/aa14f1a96651ac1b45a24663b1ec108e.mp3',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
	{
		name: "演员",
        artist: '薛之谦',
        url: 'http://m10.music.126.net/20200308004951/2a6dc74acd6cda054d8577da0f555a51/ymusic/e7c5/84f9/897e/a897fda63f7e9f788eac7abbc0bf8602.mp3',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
	},
	{
		name: "演员",
        artist: '薛之谦',
        url: 'http://m10.music.126.net/20200308005026/0751ab939ea15d822905c397b5728823/ymusic/25b9/3a30/8c18/a293afa71168120a616434a2a21d97ef.mp3',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
	}
    ]
});