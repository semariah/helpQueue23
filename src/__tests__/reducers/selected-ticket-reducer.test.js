import selectedTicketReducer from '../../reducers/selectedTicketReducer';
import constants from '../../constants';
const { c } = constants;


describe('selectedTicketReducer', () => {
  test('should return default state if no action is recogonized', () => {
    expect(selectedTicketReducer({}, { type: null})).toEqual({});
  });

  test('should record which ticket has been selected', () => {
    expect(selectedTicketReducer({}, {type: c.SELECT_TICKET, ticketId: 1})).toEqual(1);
  });

});
