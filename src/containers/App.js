import React, { Component } from 'react';
import './App.css';
import { Menu } from './menu';
import { PaneContainer } from './pane';
import { TerminalContainer } from './terminal';
import isMobile from './mobile';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { terminalText: '' };

    this.changeTerminal = this.changeTerminal.bind(this);
  }

  changeTerminal(terminalText) {
    this.setState({ terminalText: terminalText });
  }

  render() {
    let terminal = <div></div>;
    if (!isMobile()) {
      terminal = <TerminalContainer text={this.state.terminalText} />;
    }

    return (
      <div className="App">
        {terminal}
        <section className="container">
          <div className="row">
            <Menu onMenuButtonHover={this.changeTerminal} />
            <PaneContainer onContactButtonHover={this.changeTerminal} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
