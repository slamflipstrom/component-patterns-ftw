import React from "react"

import "./PriceTicker.scss"

const PriceTickerRow = ({ currency, price = "0.00" }) => {
  return (
    <div className="PriceTickerRow">
      {currency}: ${price}
    </div>
  )
}

class PriceTicker extends React.Component {
  constructor() {
    super()

    this.interval = null
    this.state = {
      prices: {},
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
    return (
      <div className="PriceTicker">
        <PriceTickerRow currency="BTC" />
        <PriceTickerRow currency="ETH" />
        <PriceTickerRow currency="LTC" />
      </div>
    )
  }
}

export default PriceTicker
