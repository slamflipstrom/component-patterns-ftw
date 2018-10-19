import React from "react"
import styled from "styled-components"

export const WithDarkTheme = styled.div`
  background-color: rgb(36, 38, 38);
  color: whitesmoke;
  filter: invert(1);
`

const withDarkThemeToggle = WrappedComponent => {
  return class extends React.Component {
    state = {
      withDarkTheme: false
    }

    toggleDarkMode = e => {
      e.preventDefault()

      this.setState({
        withDarkTheme: !this.state.withDarkTheme
      })
    }

    render() {
      const { withDarkTheme } = this.state
      return (
        <React.Fragment>
          {withDarkTheme ? (
            <WithDarkTheme onClick={this.toggleDarkMode}>
              <WrappedComponent {...this.props} />
            </WithDarkTheme>
          ) : (
            <div onClick={this.toggleDarkMode}>
              <WrappedComponent {...this.props} />
            </div>
          )}
        </React.Fragment>
      )
    }
  }
}

export default withDarkThemeToggle
