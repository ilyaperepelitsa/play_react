let visibility = false;

const toggleVisibility = () =>
  {
    visibility = !visibility;
    render();
  }

const render = () =>
  {
    const jsx = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick = {toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {vi}
    </div>
    );
    ReactDOM.render(jsx, document.getElementById("app"))
  }

render()
