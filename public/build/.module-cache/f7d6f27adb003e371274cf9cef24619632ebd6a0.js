var Player = function(options){
  this.config = {}
  this.defaults = {
    high_def: 'http://videos.thisisepic.com/88bce6ad-a343-4fb0-8df1-66471545ae96/high.mp4',
    low_def: '',
    poster: '',
  }
  for (var key in options){
    this.defaults[key] = options[key]
  }
  this.setVideo = function(video){
    this.video = video
    return this
  }
}

var VideoPlayer = React.createClass({displayName: "VideoPlayer",
  getDefaultProps: function(){
    return {
      high_def: 'http://videos.thisisepic.com/88bce6ad-a343-4fb0-8df1-66471545ae96/high.mp4',
      low_def: '',
      poster: '',
    }
  },
  getInitialState: function(){
    return {
      player: {}
    }
  },
  componentDidMount: function(){
    var video = this.refs.video
    var player = new Player(this.props.options)
    this.setState({

    })
  },
  render: function(){
    return (
      React.createElement("div", {className: "video_player"}, 
        React.createElement("video", {ref: "video", src: "http://videos.thisisepic.com/88bce6ad-a343-4fb0-8df1-66471545ae96/high.mp4"})
      )
    )
  }
})