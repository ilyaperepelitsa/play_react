
const appRoot = document.getElementById("app");

const template = (
  <div>
    <form onSubmit = {onFormSu}>
      <input type="text" name="option"/>
      <button>Add option</button>
    </form>
  </div>
)

ReactDOM.render(template, appRoot)
