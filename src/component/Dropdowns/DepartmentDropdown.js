import React, { Component } from 'react';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { connect } from 'react-redux';


class DepartmentDropdown extends Component {
    render() {
        return (
            <div>
                <Dropdown style={{width: 300}}
                onChanged={this.props.selectDepartment}
                placeHolder="Select an Department"
                options={this.props.departement.map(item => {
                    return {
                        key:item, 
                        text: item
                    }})
                }
                />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
      departement: Object.keys(state.data),
      dep: state.selectedDepartement,
    }
}
  
  
const mapDispatchToProps = dispatch => {
    return {
        selectDepartment: (item) => {
            console.log(item);
            return dispatch({type: 'SELECT_DEPARTMENT', text: item.key});
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentDropdown);
