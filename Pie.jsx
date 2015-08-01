Pie = React.createClass({
  render() {
    return <canvas height="500" id="sample" width="500"></canvas>
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

    var myDoughnut = new Chart(document.getElementById("sample").getContext("2d")).Doughnut(doughnutData);
  }
});
