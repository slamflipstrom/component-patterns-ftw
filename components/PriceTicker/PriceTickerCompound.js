import React from "react"

import {
  PriceTickerStyled,
  PriceTickerRowStyled,
  PriceTickerBtnStyled
} from "./styles.js"

class PriceTickerCompound extends React.Component {
  static Row = ({ currency, prices }) => (
    <PriceTickerRowStyled>
      <strong>{currency}:</strong> ${prices[currency]}
    </PriceTickerRowStyled>
  )
  static Button = ({ children, onClick }) => (
    <PriceTickerBtnStyled onClick={onClick}>{children}</PriceTickerBtnStyled>
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
      <PriceTickerStyled>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            onClick: this.updatePrices,
            prices: this.state.prices
          })
        })}
      </PriceTickerStyled>
    )
  }
}

export default PriceTickerCompound
