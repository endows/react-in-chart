var ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

var { Card,CardHeader,AppBar } = MUI;

Post = new Mongo.Collection('posts')


var App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {posts: Post.find().fetch()};
  },
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
            <IdeaList posts={this.data.posts}/>
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
