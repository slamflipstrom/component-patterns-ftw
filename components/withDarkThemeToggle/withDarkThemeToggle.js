import React from "react"
import "./withDarkThemeToggle.scss"

const withDarkThemeToggle = WrappedComponent => {
  return class extends React.Component {
    state = {
      darkTheme: false,
    }

    toggleDarkMode = e => {
      e.preventDefault()

      this.setState({
        darkTheme: !this.state.darkTheme,
      })
    }

    render() {
      const isEnabled = this.state.darkTheme ? "-enabled" : ""
      return (
        <div onClick={this.toggleDarkMode} className={`DarkThemeToggle${isEnabled}`}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default withDarkThemeToggle
