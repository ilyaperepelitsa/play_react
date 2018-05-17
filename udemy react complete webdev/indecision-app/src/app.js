// live-server public

console.log("App.js is running")

// var template =
//     <div>
//       <h1>This is JSX. Does this change?</h1>
//       <p> Some paragraph</p>
//       <ol>
//         <li>Pew</li>
//         <li>PEWPEWPEW</li>
//       </ol>
//     </div>
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
      {user.a}
      {getLocation(user.location)}
    </div>
var appRoot = document.getElementById("app");


ReactDOM.render(template2, appRoot)
