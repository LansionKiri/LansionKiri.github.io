const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
	loop: 'all',
    order: 'random',
    preload: 'auto',
	volume: 0.7,            <!-- 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效-->
    mutex: true,            <!-- 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 -->
    listFolded: false,      <!-- 列表默认折叠， false表示不折叠-->
    listMaxHeight: '120px', <!-- 列表最大高度，超出此高度将有滚动条-->
    lrcType: 0,             <!-- 歌词类型，0表示不显示歌词-->
    audio: [
      {
        name: "演员",
        artist: '薛之谦',
        url: 'https://m701.music.126.net/20200309161103/4fc0f7101027f32b629f8083c7ba6e9d/jdyyaac/5358/0609/5409/d2c0282f3c1c160c13f9cc4684aa9853.m4a',
        cover: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2268073604,4172593995&fm=26&gp=0.jpg',
      }
    ]
});