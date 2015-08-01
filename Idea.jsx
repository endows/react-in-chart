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
        <p>who</p>
        <p>who</p>
        <p>who</p>
        <button onClick={this.vote_yes}>Good!</button>
        <button onClick={this.vote_no}>Bad!</button>
        <p>{this.state.yes_cnt}</p>
        <Pie yes={this.state.yes_cnt} no={this.state.no_cnt} />
      </div>
    )
  },
  componentDidMount() {
  }
});
