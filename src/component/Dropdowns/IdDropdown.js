import React, { Component } from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { connect } from 'react-redux';


class IdDropdown extends Component {
    render() {
        // Check if Department has been selected or not
        let disabled = this.props.dep === null ? true : false;
        let result =  this.props.dep === null ? [] : this.props.data[this.props.dep];
        return (
            <div>
                <Dropdown style={{width: 300}}
                onChanged={this.props.selectId}
                placeHolder="Select an Id"
                options={result.map(item => {
                    return {
                        key:item, 
                        text: item
                    }})
                }
                disabled={disabled}
                />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        data: state.data,
        dep: state.selectedDepartement,
        id: state.selectedId
    }
}
  
  
const mapDispatchToProps = dispatch => {
    return {
        selectId: (item) => {
            console.log(item);
            return dispatch({type: 'SELECT_ID', text: item.key});
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(IdDropdown);
