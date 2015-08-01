var App = React.createClass({
  render() {
    return <Pie yes="12" no="9"/>
  }
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    React.render(<App />, document.body);
  }
});
