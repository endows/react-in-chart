var {
  Card,
  CardHeader
} = MUI;

IdeaList = React.createClass({
  render() {
    return (
      <div>
        {this.props.posts.map(function (object,i) {
          return(
            <Card>
              <CardHeader subtitle="Subtitle" title="プログラミング勉強中の人の、モチベが上がらない問題を、美少女で解決するアイディア"/>
            </Card>
          )
        })}
      </div>
    )
  }
});
