

  /* 
   C A S E 1
  <div id="Parent">
    <div id="Child">
        <h1>Hello World from H1</h1>
    </div>
</div> 

  C A S E 2

   <div id="Parent">
    <div id="Child">
        <h1>Hello World from H1</h1>
        <h2>Hello World from H1</h2>
    </div>
</div> 

*/


const xyz = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement(
    "div",
    { id: "Child" },
    [React.createElement("h1", {}, "Hello World from H1"),React.createElement("h2", {}, "Hello World from H2 ")]
  )
);


<div>hkjfhldflkk</div>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(xyz);