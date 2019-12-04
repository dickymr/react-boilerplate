import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../redux/actions/main';

import Home from '../pages/Home';

// const NoMatch = () => <div>404 Not Found</div>;

class Main extends Component {
  componentDidMount() {
    this.props.actionsMain.data_api();
  }

  render() {
    console.log(this.props);

    return (
      <div className="main-panel">
        <div className="content-container">
          <Home />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    main: state.main
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actionsMain: bindActionCreators(mainActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
