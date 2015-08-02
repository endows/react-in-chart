var ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

var { Card,CardHeader,AppBar,FontIcon,LeftNav,MenuItem,FloatingActionButton } = MUI;
menuItems = [
  { route: 'get-started', text: '自分の投稿したアイディア' },
  { route: 'customization', text: 'アンケート結果を見る' },
  { route: 'components', text: 'ご意見' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/callemall/material-ui',
     text: 'GitHub'
  },
  {
     text: 'Disabled',
     disabled: true
  },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://www.google.com',
     text: 'Disabled Link',
     disabled: true
  },
];


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
  _toggle() {
    this.refs.leftNav.toggle()
  },
  render() {

    return (
        <div>
          <AppBar
            title="iSeed"
            iconClassNameRight='muidocs-icon-navigation-expand-more' />
            <IdeaList posts={this.data.posts}/>
            <IdeaForm/>
            <FloatingActionButton onClick={this._toggle} secondary={true}>
              <FontIcon className="material-icons">menu</FontIcon>
            </FloatingActionButton>
            <LeftNav ref="leftNav" docked={false} menuItems={menuItems}/>
        </div>
    );
  }
});
FlowRouter.route('/', {
    action: function(params, queryParams) {
      React.render(<App />, document.body);
    }
});

postObj = {
  who:'ano',
  what:'kono',
  how:'sono',
  keyword:'sono',
}

FlowRouter.route('/idea/:_id', {
    action: function(params, queryParams) {
      React.render(<Idea post={postObj}/>, document.body);
    }
});
