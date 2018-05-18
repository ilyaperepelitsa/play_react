// live-server public

console.log("App.js is running")

var template =
    <div>
      <h1>This is JSX. Does this change?</h1>
      <p> Some paragraph</p>
      <ol>
        <li>Pew</li>
        <li>PEWPEWPEW</li>
      </ol>
    </div>

var userName = "Ilya"
var userAge = 29
var userLocation = "New York, NY"

var user = {
  name: "Ilya Perepelitsa",
  age: 29,
  location: "New York, NY"
}

function getLocation(location){
  if (location){
    return <p>Location: {location}</p>;
  }
}


var template2 =
    <div>
      <h1>{user.name ? user.name : "Anonymous"}</h1>
      {(user.age && user.age >= 18) && <p>Age (grown-up): {user.age}</p>}
      {getLocation(user.location)}
    </div>
var appRoot = document.getElementById("app");


var post = {
  title: "This is a tutorial nonsense",
  subtitle: "I wouldn't really look into it",
  some_num: 30
}
var template3 = 





ReactDOM.render(template2, appRoot)
