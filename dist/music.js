const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "演员",
        artist: '薛之谦',
        url: 'http://music.163.com/song/media/outer/url?id=32507038.mp3',
        url: 'http://music.163.com/song/media/outer/url?id=32507038.mp3',
        cover: 'http://p2.music.126.net/qpvBqYIqkRhO9Ry2qOCdJQ==/2942293117852634.jpg',
      
      },
      {
        name: '刚刚好',
        artist: '薛之谦',
        url: 'http://music.163.com/song/media/outer/url?id=415792881.mp3',
        cover: 'http://p1.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg',
      },
      {
        name: '暧昧',
        artist: '薛之谦',
        url: 'http://music.163.com/song/media/outer/url?id=471385043.mp3',
        cover: 'http://p2.music.126.net/fNbj5uDwltSDLbETdnEYYQ==/109951163069265719.jpg',
      },
	  {
        name: "你还要我怎样",
        artist: '薛之谦',
        url: 'http://music.163.com/song/media/outer/url?id=27955653.mp3',
        cover: 'http://p1.music.126.net/WPHmBisDxnoF4DrBLKwl3Q==/109951163169021112.jpg',
      },
	  {
        name: "不染",
        artist: '毛不易',
        url: 'http://music.163.com/song/media/outer/url?id=536099160.mp3',
        cover: 'http://p1.music.126.net/gEia-o05FSas8uJos54Sug==/109951163456726954.jpg',
      }
    ]
});