var App = React.createClass({
  render() {
    return <Idea/>
  }
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    React.render(<App />, document.body);
  }
});
