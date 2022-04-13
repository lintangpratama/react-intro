import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Hello Pets!"),
//     React.createElement(Pet, {
//       name: "Popol",
//       animal: "Dog",
//       gender: "Male",
//     }),
//     React.createElement(Pet, {
//       name: "Roro",
//       animal: "Penguin",
//       gender: "Female",
//     }),
//     React.createElement(Pet, {
//       name: "Pupu",
//       animal: "Cat",
//       gender: "Male",
//     }),
//   ]);
// };


// The code above is same as
const App = () => {
  return (
    <div>
      <h1>Hello Pets!</h1>
      <SearchParams />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
