// live-server public

console.log("App.js is running")

var template =
    <div>
      <h1>This is JSX. Does this change?</h1>
      <p> Some paragraph</p>          </div>
var appRoot = document.getElementById("app");


ReactDOM.render(template, appRoot)