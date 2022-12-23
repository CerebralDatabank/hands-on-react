import React, {Component} from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>This is a test: {this.props.testFunc()}</h1>;
  }
}

const Hello = props => {
  return <h1>This is a test: {props.num + 30000}</h1>;
};

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>
          <Welcome testFunc={() => "I am " + (1300 + 37)}/>
          <Hello num={1337} />
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the <i style={{ color: "SteelBlue" }}>{name}</i></h1>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App
