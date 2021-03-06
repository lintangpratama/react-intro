// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("h3", {}, props.animal),
//     React.createElement("h3", {}, props.gender),
//   ]);
// };

// The code above is same as
const Pet = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.animal}</h2>
            <h3>{props.gender}</h3>
        </div>
    );
  };

export default Pet;