import React from "react"

import styled from "styled-components"

import {
  PriceTickerStyled,
  PriceTickerRowStyled,
  PriceTickerBtnStyled
} from "./styles.js"

export const WithDarkTheme = styled.div`
  background-color: rgb(36, 38, 38);
  color: whitesmoke;
  filter: invert(1);
`

class WithDarkThemeToggle extends React.Component {
  state = {
    darkTheme: false
  }

  toggleDarkMode = e => {
    e.preventDefault()

    this.setState({
      darkTheme: !this.state.darkTheme
    })
  }

  render() {
    const { darkTheme } = this.state
    return (
      <React.Fragment>
        {darkTheme ? (
          <WithDarkTheme onClick={this.toggleDarkMode}>
            {this.props.render()}
          </WithDarkTheme>
        ) : (
          <div onClick={this.toggleDarkMode}>{this.props.render()}</div>
        )}
      </React.Fragment>
    )
  }
}

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

    // this.interval = null
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

  // componentDidMount() {
  //   this.interval = setInterval(() => this.updatePrices(), 5000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  render() {
    const { prices } = this.state
    return (
      <PriceTickerStyled>
        <PriceTickerRow currency="BTC" price={prices.BTC} />
        <PriceTickerRow currency="ETH" price={prices.ETH} />
        <PriceTickerRow currency="LTC" price={prices.LTC} />
        <PriceTickerBtnStyled onClick={this.updatePrices}>
          Refresh Prices
        </PriceTickerBtnStyled>
      </PriceTickerStyled>
    )
  }
}

const PriceTickerWithDarkThemeRenderProps = () => (
  <WithDarkThemeToggle render={() => <PriceTicker />} />
)

export default PriceTickerWithDarkThemeRenderProps
