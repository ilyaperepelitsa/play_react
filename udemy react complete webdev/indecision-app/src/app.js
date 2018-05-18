
const appRoot = document.getElementById("app");

const onFormSubmit = (e) => {
  
}

const template = (
  <div>
    <form onSubmit = {onFormSubmit()}>
      <input type="text" name="option"/>
      <button>Add option</button>
    </form>
  </div>
)

ReactDOM.render(template, appRoot)
