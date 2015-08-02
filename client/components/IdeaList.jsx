var { Card,CardHeader } = MUI;

IdeaList = React.createClass({
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="プログラミング勉強中の人の、モチベが上がらない問題を、美少女で解決するアイディア"
            subtitle="Subtitle"
          />
        </Card>
        <Card>
          <CardHeader
            title="ツイッタラーの出会い不足を、ツイート解析で解決するアイディア"
            subtitle="Subtitle"
          />
        </Card>
      </div>
    )
  }
});
