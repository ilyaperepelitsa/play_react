class Header extends React.Component {
  render(){
    return(
    <div>
      <h1>Header thing</h1>
      <Paragraph/>
    </div>)
  }
}

class Paragraph extends React.Component {
  render(){
    return(
    <div>
      <p>Thingy thingy blah blah</p>
    </div>)
  }
}

const jsx = (
  <div>
    <Header />
    <Paragraph />
  </div>
)


ReactDOM.render(<Header, document.getElementById("app"))
