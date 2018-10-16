import React from "react"
import "../withDarkThemeToggle/withDarkThemeToggle.scss"

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
    const isEnabled = this.state.darkTheme ? "-enabled" : ""
    return (
      <div
        onClick={this.toggleDarkMode}
        className={`DarkThemeToggle${isEnabled}`}
      >
        {this.props.children()}
      </div>
    )
  }
}

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

    // this.interval = null
    this.state = {
      prices: {}
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
    return (
      <div className="PriceTicker">
        <PriceTickerRow currency="BTC" />
        <PriceTickerRow currency="ETH" />
        <PriceTickerRow currency="LTC" />
        <button onClick={this.updatePrices} className="PriceTicker-btn">
          Refresh Prices
        </button>
      </div>
    )
  }
}

const PriceTickerWithDarkThemeRenderProps = () => (
  <WithDarkThemeToggle>{() => <PriceTicker />}</WithDarkThemeToggle>
)

export default PriceTickerWithDarkThemeRenderProps