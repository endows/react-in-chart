var {
  Card,
  CardHeader
} = MUI;

IdeaList = React.createClass({
  render() {
    return (
      <div>
        {this.props.posts.map(function (p,i) {
          let title = `${p.who}の、${p.what}を、${p.keyword}で解決するアイディア`
          return(
            <Card>
              <CardHeader subtitle="Subtitle" title={title}/>
            </Card>
          )
        })}
      </div>
    )
  }
});
