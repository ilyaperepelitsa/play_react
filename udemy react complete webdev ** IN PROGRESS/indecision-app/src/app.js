let visibility = false;

const render = () =>
  {
    const jsx = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick = >
        {visibility ? "Hide details" : "Show details"}
      </button>
    </div>
  );
    ReactDOM.render(jsx, document.getElementById("app"))
  }

render()
