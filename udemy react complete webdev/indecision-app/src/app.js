
const appRoot = document.getElementById("app");


const post = {
  title: "This is a tutorial nonsense",
  // subtitle: "I wouldn",
  subtitle: "I wouldn't really look into it. It's pretty long",
  some_num: 3
}
const template3 = (
  <div>
    <h1>{post.title}</h1>
    {(post.subtitle && post.subtitle.length > 10) && <p>{post.subtitle}</p>}
    <p>{post.some_num >= 30 ? "big number" : "Small number"}</p>
  </div>
)
const addOne = () => {
  count ++
  console.log("+1", count)
}

const minusOne = () => {
  count --
  console.log("-1", count)
}

const reset = () => {
  console.log("reset")
}
var count = 0;

const template4 = (
  <div>
    <h1>Count: {count} </h1>
    <button id = "my-id"
            className = "button"
            onClick = {addOne}>+1</button>
    <button id = "my-id"
            className = "button"
            onClick = {minusOne}>-1</button>
    <button id = "my-id"
            className = "button"
            onClick = {reset}>Reset</button>
  </div>
)




ReactDOM.render(template4, appRoot)
