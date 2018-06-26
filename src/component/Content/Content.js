import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Content.css';

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div style={{display: this.props.showLoading? 'block' : 'none',}}> Loading ... </div>
                <img src={this.props.imgUrl} alt="dummy Img" className='contentImg'/>
                <div className='details'>
                    <span>ID: {this.props.id}</span>
                    <span>Name: {this.props.firstName} {this.props.lastName}</span>
                </div>
            </div>    
        );
    }
}

const mapStateToProps = state => {
    return  {
        showLoading: state.showLoading,
        firstName: state.firstName,
        lastName: state.lastName,
        imgUrl: state.imgUrl,
        id: state.selectedId
    }
}

export default connect(mapStateToProps)(Content);