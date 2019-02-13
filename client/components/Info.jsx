import React, {Fragment} from 'react'

class Info extends React.Component{
constructor(props){
  super(props)
  this.state = {
    user: this.props.user
  }
}

  render(){
    const {veg} = this.props
    return Object.keys(veg).length == 0 ? (
      <Fragment>
        <img className="icon" src="/images/information.png" alt=""/>
        <div className='info-box'>
        <br/>
        <h2>Click on a veg</h2>
        </div>
      </Fragment>
    ) :
      <Fragment>
        <img className="icon" src="/images/information.png" alt=""/>
        <div className='info-box'>
          <br/>
          <h2>{veg.name}</h2>
          <br/>
          <h4>Tips</h4>
          <p>{veg.tips}</p>
          <br/>
          <h4>Plant spacing</h4>
          <p>{veg.spaceplants}</p>
          <button className='button' onClick={()=>this.props.addToGarden(veg)}>
            Add to garden
          </button>
        </div>
      </Fragment>
  }
}
export default Info
