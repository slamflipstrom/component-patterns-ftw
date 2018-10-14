import React from "react"

import "../../styles.scss"

const PriceTickerRow = ({ currency, price = "0.00" }) => {
  return (
    <div>
      {currency}: {price}
    </div>
  )
}

class PriceTicker extends React.Component {
  constructor() {
    super()

    this.interval = null
    this.state = {
      time: Date.now(),
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="PriceTicker">
        <PriceTickerRow currency="BTC" className="PriceTicker-row" />
        <PriceTickerRow currency="ETH" className="PriceTicker-row" />
        <PriceTickerRow currency="LTC" className="PriceTicker-row" />
      </div>
    )
  }
}

export default PriceTicker
