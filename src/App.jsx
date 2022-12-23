function App() {
  const name = "StarGazers";
  const desc = "intergalactic alliance";
  let underlined = {
    textDecoration: "underline"
  };
  return (
    <hgroup>
      <h1>Meet the <span style={{color: "#1E90FF", fontWeight: "bold"}}>{name}</span></h1>
      <p>Members of an <b style={underlined}>{desc}</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      <p><button onClick={() => alert("Yay button!!")}>Button!</button></p>
    </hgroup>
  )
}
export default App
