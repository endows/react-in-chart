var ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

var { Card,CardHeader,AppBar } = MUI;

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
          <AppBar
            title="iSeed"
            iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <IdeaList/>
            <IdeaForm/>
        </div>
    );
  }
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    React.render(<App />, document.body);
  }
});
