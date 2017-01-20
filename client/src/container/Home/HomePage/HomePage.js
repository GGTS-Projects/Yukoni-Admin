import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      HomePage
    </div>
  )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
