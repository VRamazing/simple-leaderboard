function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Person = (props) =>
React.createElement("div", { className: "list__person" },
React.createElement("img", { className: "person__image", src: props.personImg }),
React.createElement("p", { className: "person__name" }, props.personName),
React.createElement("p", { className: "person__networth" },
props.personNetworth,
React.createElement("span", null, "B")));




Person.defaultProps = {
  personImg:
  'https://specials-images.forbesimg.com/imageserve/5ab944eda7ea432fbc1d2d9c/416x416.jpg?background=000000&cropX1=0&cropX2=400&cropY1=0&cropY2=400' };


const List = (props) =>
React.createElement("div", { className: "list" },
props.list.map((person) =>
React.createElement(Person, {
  personImg: person.squareImage,
  personName: person.name,
  personNetworth: person.worth / 1000 })));





const Header = () =>
React.createElement("div", { className: "header" },
React.createElement("img", {
  className: "header__icon",
  src: "https://user-images.githubusercontent.com/23297041/55285200-a24e9b00-538f-11e9-8990-d49a162824d1.png" }),

React.createElement("h1", { className: "header__title" }, "Forbes",

React.createElement("span", null, "Leaderboard")));




class LoadingIndicator extends React.Component {
  componentDidMount() {
    const options = {
      lines: 10,
      color: '#4b7bec',
      fadeColor: '#45aaf2' };

    const spinner = new Spinner(options).spin(this.indicator);
  }

  render() {
    return (
      React.createElement("div", { className: "loading-indicator", ref: ctx => this.indicator = ctx }));

  }}


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      list: [],
      loading: true });_defineProperty(this, "getForbesList",






    () => {
      fetch('https://forbes400.herokuapp.com/api/forbes400').
      then(res => res.json()).
      then(list => {
        this.setState({ list, loading: false });
      });
    });}componentDidMount() {this.getForbesList();}

  render() {
    return (
      React.createElement("div", { className: "app" },
      React.createElement(Header, null),
      this.state.loading && React.createElement(LoadingIndicator, null),
      React.createElement(List, { list: this.state.list })));


  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));