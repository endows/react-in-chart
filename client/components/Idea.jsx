var ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();
var { RaisedButton } = MUI;

Idea = React.createClass({
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
      return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
  },
  getInitialState: function() {
    return {yes_cnt: 1,no_cnt:1};
  },
  vote_yes() {
    if(localStorage[this.props.post._id] != 'voted'){
      this.setState({yes_cnt: this.state.yes_cnt + 1});
      localStorage[this.props.post._id] = 'voted'
    }
  },
  vote_no() {
    if(localStorage[this.props.post._id] != 'voted'){
      this.setState({no_cnt: this.state.no_cnt + 1});
      localStorage[this.props.post._id] = 'voted'
    }
  },
  render() {
    return (
      <div>
        <h1>{this.props.post.who}<small>の、</small></h1>

        <h1>{this.props.post.what}<small>問題を</small></h1>

        <h1>{this.props.post.keyword}<small>解決するアイディア</small></h1>

        <br />
        <br />
        <br />
        <p>Q.このアイディア、どうおもいますか？</p>



        <RaisedButton label="いいね！" secondary={true} onClick={this.vote_yes} class='btn btn-primary' ></RaisedButton>
        <RaisedButton label="わるいね！" primary={true} onClick={this.vote_no} class='btn btn-danger' ></RaisedButton>

        <Pie yes={this.state.yes_cnt} no={this.state.no_cnt} />
        <h3><small>いいね！といった人:</small>{this.state.yes_cnt}<small>人</small></h3>
        <h3><small>わるいね！といった人:</small>{this.state.no_cnt}<small>人</small></h3>
      </div>
    )
  }
});
