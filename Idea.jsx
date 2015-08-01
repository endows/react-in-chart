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
        <h1>プログラミングを勉強中の人</h1>
        <span>の、</span>
        <h1>モチベが沸かない</h1>
        <span>問題を</span>
        <h1>美少女で</h1>
        <span>解決するアイディア</span>
        <RaisedButton onClick={this.vote_yes} label="いいね" secondary={true} />
        <RaisedButton onClick={this.vote_no} label="わるいね" primary={true} />

        <Pie yes={this.state.yes_cnt} no={this.state.no_cnt} />
      </div>
    )
  },
  componentDidMount() {
  }
});
