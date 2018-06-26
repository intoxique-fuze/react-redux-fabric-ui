import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doRequest } from '../../store/ActionCreator/ActionCreator';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import DepartmentDropdown from '../Dropdowns/DepartmentDropdown';
import IdDropdown from '../Dropdowns/IdDropdown';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <DepartmentDropdown />
                
                <IdDropdown />
                
                <DefaultButton
                text="Show"
                onClick={() => this.props.doRequest({
                    id: this.props.id,
                })}
                />

                <DefaultButton
                text="Clear"
                onClick={() => this.props.clear()}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return  {
        id: state.selectedId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clear: () => {
            return dispatch({type: 'CLEAR'});
        },
        doRequest: (result) => dispatch(doRequest(result))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);