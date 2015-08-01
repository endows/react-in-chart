Idea = React.createClass({
  getInitialState: function() {
    return {yes_cnt: 1,no_cnt:1};
  },
  vote_yes() {
    this.setState({yes_cnt: this.state.yes_cnt + 1});
  },
  vote_no() {
    this.setState({no_cnt: this.state.no_cnt + 1});
  },
  render() {
    return (
      <div>
        <h1>プログラミングを勉強中の人<small>の、</small></h1>

        <h1>モチベが沸かない<small>問題を</small></h1>

        <h1>美少女で<small>解決するアイディア</small></h1>

        <br />
        <br />
        <br />
        <p>Q.このアイディア、どうおもいますか？</p>

        <RaisedButton onClick={this.vote_yes} label="いいね" secondary={true} />
        <RaisedButton onClick={this.vote_no} label="わるいね" primary={true} />

        <Pie yes={this.state.yes_cnt} no={this.state.no_cnt} />
        <h3><small>いいね！といった人:</small>{this.state.yes_cnt}<small>人</small></h3>
        <h3><small>わるいね！といった人:</small>{this.state.no_cnt}<small>人</small></h3>
      </div>
    )
  },
  componentDidMount() {
  }
});
