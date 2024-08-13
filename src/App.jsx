import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "youssef bouslimi",
        bio: "likes to sleep",
        imgSrc: "/picture.jpg",
        profession: "professional sleeper",
      },
      shows: false,
      mountedTime: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

  render() {
    const { Person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={Person.imgSrc} alt={Person.fullName} />
            <h1> {Person.fullName} </h1>
            <p> {Person.bio} </p>
            <p>{Person.profession}</p>
          </div>
        )}
        <p>Time since mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
