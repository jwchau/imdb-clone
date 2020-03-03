import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>footer</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);