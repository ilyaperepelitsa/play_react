// function examples
handleMinusOne() {
  this.setState((prevState) =>{
    return {
      count: prevState.count - 1
    }
  })
}
