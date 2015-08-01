var ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

var { Card,CardHeader } = MUI;

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
            <IdeaList/>
        </div>
    );
  }
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    React.render(<App />, document.body);
  }
});
