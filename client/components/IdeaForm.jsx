var { FloatingActionButton,ToggleStar,Dialog,FlatButton,TextField,FontIcon,IconButton } = MUI;

IdeaForm = React.createClass({
  getInitialState: function() {
    return {userInput: '',};
  },
  handleChange: function(e) {
    this.setState({userInput: e.target.value});
  },
  _show() {
    this.refs.idea_form_dialog.show();
  },
  _createIdea() {
    console.log(this.refs.who.getValue())
    Post.insert({
      who:this.refs.who.getValue(),
      how:this.refs.how.getValue(),
      what:this.refs.what.getValue(),
      keyword:this.refs.keyword.getValue(),
    })
    this.refs.idea_form_dialog.dismiss();
  },
  render() {
    let standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this._createIdea, ref: 'submit' }
    ];
    return (
        <div>
          <FloatingActionButton onClick={this._show}>
            <FontIcon className="material-icons">add</FontIcon>
          </FloatingActionButton>

          <p>{this.state.userInput}</p>
          <Dialog
            title="アイディア作成"
            actions={standardActions}
            ref="idea_form_dialog">
            <TextField ref='who' hintText="だれの、" value={this.state.userInput} onChange={this.handleChange}/><br/>
            <TextField ref='what' hintText="どんな問題を、" /><br/>
            <TextField ref='how' hintText="どうやって解決する？" />
            <TextField ref='keyword' hintText="解決のキーワード" />
          </Dialog>
        </div>
    );
  }
});
