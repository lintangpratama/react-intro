const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.gender),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello Pets!"),
    React.createElement(Pet, {name: "Popol", animal: "Dog", gender: "Male"}),
    React.createElement(Pet, {name: "Roro", animal: "Penguin", gender: "Female"}),
    React.createElement(Pet, {name: "Pupu", animal: "Cat", gender: "Male"}),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
