import React from "react"

import "./PriceTicker.scss"

class PriceTickerCompound extends React.Component {
  static Row = ({ currency, prices }) => (
    <li className="PriceTickerRow">
      <strong>{currency}:</strong> ${prices[currency]}
    </li>
  )
  static Button = ({ children, onClick }) => (
    <button onClick={onClick} className="PriceTicker-btn">
      {children}
    </button>
  )

  constructor() {
    super()

    this.state = {
      prices: {
        BTC: "6,593",
        ETH: "208"
      }
    }
  }

  updatePrices() {
    //ApiSvc call
    console.log("fetching latest prices:", new Date().toLocaleString())
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.updatePrices(), 5000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  render() {
    const { children } = this.props
    return (
      <div className="PriceTicker">
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            onClick: this.updatePrices,
            prices: this.state.prices
          })
        })}
      </div>
    )
  }
}

export default PriceTickerCompound
