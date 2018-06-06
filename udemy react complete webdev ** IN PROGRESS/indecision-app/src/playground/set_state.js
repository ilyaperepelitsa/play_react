// function examples
handleMinusOne() {
  this.setState((prevState) => {
    return {
      count: prevState.count - 1
    }
  })
}


handleReset() {
  this.setState(() => {
    return {
      count: 0
    }
  })
}
