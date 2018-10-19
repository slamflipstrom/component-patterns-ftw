import React from "react"
import PropTypes from "prop-types"

class withTooltip extends React.Component {
  state = {
    open: false
  }

  toggleOpen = e => {
    e.preventDefault()

    this.setState({
      open: !this.state.open
    })
  }

  closeTip = e => {
    const { id } = this.props
    if (
      !e.target.id ||
      (e.target.id !== `tooltip-${id}-button` &&
        e.target.id !== `tooltip-${id}-contents`)
    ) {
      this.setState({
        open: false
      })
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener("click", this.closeTip)
  }

  componentDidMount = () => {
    // make sure clicking anywhere outside the tooltip closes it
    document.addEventListener("click", this.closeTip)
  }

  render() {
    const { open } = this.state
    const { className, contents, direction, id } = this.props
    return (
      <React.Fragment>
        {this.props.children}
        <span
          className={`Tooltip ${className || ""}`}
          id={id}
          aria-live="polite"
          role="tooltip"
        >
          <button
            className={`Tooltip-icon ${open ? "is-open" : ""}`}
            id={`tooltip-${id}-button`}
            onClick={this.toggleOpen}
            aria-controls={`tooltip-${id}-contents`}
            aria-expanded={open}
          />
          {open && (
            <div
              className={`Tooltip-body Tooltip-body--${direction}`}
              id={`tooltip-${id}-contents`}
            >
              {this.props.header ? <h6>{this.props.header}</h6> : null}
              <div className="Tooltip-body-text">{contents}</div>
            </div>
          )}
        </span>
      </React.Fragment>
    )
  }
}

withTooltip.propTypes = {
  className: PropTypes.string,
  contents: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  direction: PropTypes.oneOf(["top", "bottom", "right", "left"]),
  header: PropTypes.string,
  id: PropTypes.string
}

withTooltip.defaultProps = {
  direction: "right"
}

export default withTooltip
