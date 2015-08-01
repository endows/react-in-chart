Idea = React.createClass({
  vote() {
    console.log('index')
  },
  render() {
    return (
      <div>
        <p>who</p>
        <p>who</p>
        <p>who</p>
        <button onClick={this.vote}>Good!</button>
        <button>Bad!</button>
        <Pie yes='1' no='2' />
      </div>
    )
  },
  componentDidMount() {
  }
});
