import React from "react"
import withDarkThemeToggle from "../withDarkThemeToggle/withDarkThemeToggle"

import "./PriceTicker.scss"

const PriceTickerRow = ({ currency, price = "0.00" }) => {
  return (
    <div className="PriceTickerRow">
      <strong>{currency}:</strong> ${price}
    </div>
  )
}

class PriceTicker extends React.Component {
  constructor() {
    super()

    this.interval = null
    this.state = {
      prices: {
        BTC: "6,596",
        ETH: "210",
        LTC: "54.17"
      }
    }
  }

  updatePrices() {
    //ApiSvc call
    console.log("fetching latest prices:", new Date().toLocaleString())
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updatePrices(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { prices } = this.state
    return (
      <div className="PriceTickerThemeToggle PriceTicker">
        <PriceTickerRow currency="BTC" price={prices.BTC} />
        <PriceTickerRow currency="ETH" price={prices.ETH} />
        <PriceTickerRow currency="LTC" price={prices.LTC} />
        <button onClick={this.updatePrices} className="PriceTicker-btn">
          Refresh Prices
        </button>
      </div>
    )
  }
}

const PriceTickerWithDarkThemeHOC = withDarkThemeToggle(PriceTicker)
export default PriceTickerWithDarkThemeHOC
