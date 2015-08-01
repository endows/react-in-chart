Idea = React.createClass({
  getInitialState: function() {
    return {count: 3};
  },
  vote() {
    this.setState({count: this.state.count + 1});
  },
  render() {
    console.log(this.state.count)
    return (
      <div>
        <p>who</p>
        <p>who</p>
        <p>who</p>
        <button onClick={this.vote}>Good!</button>
        <button>Bad!</button>
        <p>{this.state.count}</p>
        <Pie yes={this.state.count} no='1' />
      </div>
    )
  },
  componentDidMount() {
  }
});
