var ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

var { RaisedButton } = MUI;
window.RaisedButton = RaisedButton

var App = React.createClass({
  childContextTypes: {
      muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
      return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
  },
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
