var { FloatingActionButton,ToggleStar,Dialog,FlatButton,TextField } = MUI;

IdeaForm = React.createClass({
  _show() {
    this.refs.idea_form_dialog.show();
  },
  render() {
    let standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onTouchTap: this._onDialogSubmit, ref: 'submit' }
    ];
    return (
        <div>
          <FloatingActionButton onClick={this._show}/>

          <Dialog
            title="アイディア作成"
            actions={standardActions}
            ref="idea_form_dialog">
            <TextField hintText="だれの、" /><br/>
            <TextField hintText="どんな問題を、" /><br/>
            <TextField hintText="どうやって解決するアイディア？" />
          </Dialog>
        </div>
    );
  }
});
