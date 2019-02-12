import React, {Fragment} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import PlantingMonth from './PlantingMonth';
import ViewMonth from './ViewMonth';
import ViewVeg from './ViewVeg';
import MyGarden from './MyGarden';

import { getUserVeges } from '../api/vegs';
import { getMonths } from '../api/months'
import { getMonthVeges } from '../api/months'


class Table extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      months: [],
      month: {},
      userVeges: [],
      veg: {},
      redirect: undefined,
      setVeg: {}
    }
    this.getMonths = this.getMonths.bind(this)
  }

  componentDidMount(){
    this.getMonths()
    getUserVeges(this.props.user).then(veges => {
      this.setState({userVeges: veges})
    })
  }

  getMonths(){
    getMonths().then(months => {
      this.setState({months: months})
    })
  }

  handleClick = (month) => {
    getMonthVeges(month).then(monthVeges => {
      console.log(monthVeges)
        this.setState({
        monthVeges: monthVeges,
        month: month,
        redirect: 'month'
        })
      }
    )
  }

  setVeg = (veg) => {
    this.setState({
      veg: veg,
      redirect: 'veg'
    })
    
  }
    
    render(){
    console.log(this.state.monthVeges)
    const monthsArr = this.state.months
    return(
      <Router>
         <Fragment>
        <div className='table'>
          <div className='header-grid'>
            <div className='grid12'>
              {monthsArr.map((month, i) => 
                <button onClick={this.handleClick.bind(this, month)} 
                    className='month-letter heartbeat' key={i}
                    >
                  
                    <div className={`${month.season} table-header`}>
                      {month.name.charAt(0)}
                    </div>
                </button> 
              )}
            </div>  
          </div>
    
          <div className='plantingMonths'> 
            <div className='grid12'>
              {monthsArr.map((month, i) => 
                <div key={i} className={`${month.name} plantingMonths-header`}>
                
                  <PlantingMonth show={month.show} id={month.id}/>
                </div>
                )}
            </div> 
          </div>
        </div>
        <div className='contents'>
        <MyGarden 
          user={this.props.user}
          userVeges={this.state.userVeges}
          month={this.state.month}
          setVeg={this.setVeg}
          monthVeges={this.state.monthVeges}
          veg={this.state.veg}
        />
        {this.state.redirect === 'month' &&
            <ViewMonth
            monthVeges={this.state.monthVeges}
            userVeges={this.state.userVeges}
            month={this.state.month}/>
          || this.state.redirect === 'veg' &&
          <ViewVeg
            user={this.props.user}
            userVeges={this.state.userVeges}
            setVeg={this.setVeg}
            veg={this.state.veg}
            />
          }
        </div>
      </Fragment>
      </Router>
    )
  }
}

export default Table