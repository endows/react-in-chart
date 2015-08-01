Pie = React.createClass({
  shouldComponentUpdate(nextProps) {
    this.myDoughnut.segments[0].value = nextProps.yes
    this.myDoughnut.segments[1].value = nextProps.no
    this.myDoughnut.update()
    // var doughnutData = [
    //   {
    //     value: nextProps.yes,
    //     color: "#aaf2fb"
    //   }, {
    //     value: nextProps.no,
    //     color: "#ffb6b9"
    //   }
    // ];
    //
    // var myDoughnut = new Chart(document.getElementById("sample").getContext("2d")).Doughnut(doughnutData);
    return true

  },
  render() {
    return (<div><p>Pie.jsx:{this.props.yes}</p><canvas height="500" id="sample" width="500"></canvas></div>)
  },
  componentDidMount() {
    var doughnutData = [
      {
        value: this.props.yes,
        color: "#aaf2fb"
      }, {
        value: this.props.no,
        color: "#ffb6b9"
      }
    ];

    this.myDoughnut = new Chart(document.getElementById("sample").getContext("2d")).Doughnut(doughnutData);
  }
});
