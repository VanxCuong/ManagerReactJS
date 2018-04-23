import React, { Component } from 'react'
import {connect} from 'react-redux';
class News extends Component {
  useEditStatus= ()=>{ 
    var {dispatch}=this.props;
    dispatch({type:'A'});
  }
  
  render() {

    return (
      <div>
        <h2>hihi</h2>
        
        <button onClick={()=>{this.useEditStatus()}}>button</button>
        
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.editStatus
  }
}
export default connect(mapStateToProps)(News)