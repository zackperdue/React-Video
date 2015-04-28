var Player = function(options){
  this.config = {}
  this.defaults = {
    highQuality: 'http://videos.thisisepic.com/88bce6ad-a343-4fb0-8df1-66471545ae96/high.mp4',
    lowQuality: '',
    initialQuality: 'highQuality',
    poster: '',
  }
  for (var key in options){
    this.config[key] = this.defaults[key]
    this.config[key] = options[key]
  }
  delete this.defaults
  this.setVideo = function(video){
    this.video = video
    return this
  }
  this.getInitialQualityMedia = function(){
    return this.config[this.config['initialQuality']]
  }
  this.setVideoSource = function(quality, time){
    var time = null
    var source = this.config[quality]
    this.video.src = source
    return this
  }

  console.log(this.video)
  console.log(this.getInitialQualityMedia())
  this.setVideoSource(this.getInitialQualityMedia())
}

var VideoPlayer = React.createClass({displayName: "VideoPlayer",
  getInitialState: function(){
    return {
      player: {}
    }
  },
  componentDidMount: function(){
    var video = React.findDOMNode(this.refs.video)
    var player = new Player(this.props.options)
    player.setVideo(video)
    this.setState({
      player: player
    })
  },
  render: function(){
    return (
      React.createElement("div", {className: "video_player"}, 
        React.createElement("video", {ref: "video"})
      )
    )
  }
})