
const appRoot = document.getElementById("app");

const app = {
  title: "Indecision App",
  s
}


const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option){
    c
  }
}

const template = (
  <div>
    <form onSubmit = {onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add option</button>
    </form>
  </div>
)

ReactDOM.render(template, appRoot)
