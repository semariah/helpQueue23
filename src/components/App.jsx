import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      // masterTicketList: {},
      selectedTicket: null
    };
    // this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime() {
    // var newMasterTicketList = Object.assign({}, this.props.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTicketList: newMasterTicketList});
  }

  // handleAddingNewTicketToList(newTicket){
  //   var newTicketId = v4()
  //   var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
  //     [newTicketId]: newTicket
  //   });
  //   newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
  //   this.setState({masterTicketList: newMasterTicketList});
  // }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  render(){
    // console.log(this.props.masterTicketList);
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl />} />
          <Route path='/admin' render={(props)=><Admin ticketList={this.props.masterTicketList} currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

// The key(s) are React props. The value(s) are the Redux state items we're mapping to those props.
const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  
  
  };
}

export default withRouter(connect(mapStateToProps)(App));


App.PropTypes = {
  masterTicketList: PropTypes.object
}