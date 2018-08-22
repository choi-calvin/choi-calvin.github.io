import { Component } from 'react';

class BlinkingText extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true, text: this.props.text };
    this.blink = this.blink.bind(this);
  }

  blink() {
    var nextShowState = !this.state.showText;
    this.setState({ showText: nextShowState });
  }

  render() {
    return this.state.showText ? this.state.text : '';
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.showText !== this.state.showText;
  }

  componentDidUpdate() {
    setTimeout(this.blink, 500);
  }

  componentDidMount() {
    setTimeout(this.blink, 500);
  }
}

export default BlinkingText;