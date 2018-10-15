import React from "react"

import "./darkThemeToggle.scss"

function withDarkThemeToggle(Component) {
  return class DarkThemeToggle extends React.Component {
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
      const isEnabled = this.state.darkTheme ? ".enabled" : ""
      return (
        <span
          onClick={this.toggleDarkMode}
          className={`DarkThemeToggle${isEnabled}`}
          {...this.props}
        >
          {this.props.children}
        </span>
      )
    }
  }
}

export default withDarkThemeToggle
