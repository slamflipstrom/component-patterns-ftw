import React from "react"

import { PriceTickerStyled, PriceTickerRowStyled } from "./styles.js"

const PriceTickerRow = ({ currency, price = "0.00" }) => {
  return (
    <PriceTickerRowStyled>
      <strong>{currency}:</strong> ${price}
    </PriceTickerRowStyled>
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
      <PriceTickerStyled>
        <PriceTickerRow currency="BTC" price={prices.BTC} />
        <PriceTickerRow currency="ETH" price={prices.ETH} />
        <PriceTickerRow currency="LTC" price={prices.LTC} />
      </PriceTickerStyled>
    )
  }
}

export default PriceTicker
