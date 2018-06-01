yarn init
yarn add b

// live-server public
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// babel src/playground/let-const.js --out-file=public/scripts/app.js --presets=env,react --watch


const appRoot = document.getElementById("app");

const app = {
  title: "Indecision App",
  subtitle: "Put thingy thingy thing",
  options: ["One", "Two"]
}


const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  e.target.elements.option.value = "";

  if (option){
    app.options.push(option);
  }
}

const template = (
  <div>
    <p>{app.options.length}</p>
    <form onSubmit = {onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add option</button>
    </form>
  </div>
)

ReactDOM.render(template, appRoot)
