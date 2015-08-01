

var App = React.createClass({

  render() {
    return (
        <div>
            <Idea/>
        </div>
    );
  }
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    React.render(<App />, document.body);
  }
});
