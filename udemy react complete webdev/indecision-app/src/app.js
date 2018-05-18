
const appRoot = document.getElementById("app");

const onFormSubmit = (e) => {
  e.preventDefault();
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
