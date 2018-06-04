// yarn init
// yarn add babel-preset-react
// yarn add babel-preset-env

// live-server public
// babel src/app.js --out-file=public/app.js --presets=env,react --watch

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// babel src/playground/let-const.js --out-file=public/scripts/app.js --presets=env,react --watch


const appRoot = document.getElementById("app");

var user = {
  age:23,
  name: "Peter",
  message: "Pewpew"
}

var template = (
  <div>
    #
    <h1>{user.name ? user.name: "Anonymous"}</h1>
  </div>
)

ReactDOM.render(template, appRoot)
