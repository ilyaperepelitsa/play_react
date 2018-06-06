class Header extends React.Component {
  render(){
    return
    <div>
      <h1>Header thing</h1>
    </div>
  }
}

class Paragraph extends React.Component {
  render(){
    return
    <div>
      <p>Thingy thingy blah blah</h1>
    </div>
  }
}

const jsx = (
  <div>
    <h1>pewpew</h1>
    <Header />
  </div>
)


ReactDOM.render(jsx, document.getElementById("app"))
