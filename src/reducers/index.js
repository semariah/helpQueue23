import selectedTicketReducer from './selectedTicketReducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  selectedTicket: selectedTicketReducer,
  masterTicketList: ticketListReducer
});

export default rootReducer;