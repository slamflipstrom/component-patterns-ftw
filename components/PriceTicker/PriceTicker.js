import React from "react";

// import "./PriceTicker.scss";

class PriceTicker extends React.Component {
  constructor() {
    super();

    this.interval = null;
    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    // this.props.getPrices(["BTC-USD", "ETH-USD", "SALT-USD", "LTC-USD"]);
    // this.interval = setInterval(() => {
    //   this.setState({ time: Date.now() });
    //   this.props.getPrices(["BTC-USD", "ETH-USD", "SALT-USD", "LTC-USD"]);
    // }, this.props.updateFrequency ? this.props.updateFrequency : 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={"PriceTicker"}>
        <div className="PriceTicker-row">HI GUYS</div>
      </div>
    );
  }
}

export default PriceTicker;
