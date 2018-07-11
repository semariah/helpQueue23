import selectedTicketReducer from '../../reducers/selectedTicketReducer';

describe('selectedTicketReducer', () => {
  test('should return default state if no action is recogonized', () => {
    expect(selectedTicketReducer({}, { type: null})).toEqual({});
  });

  test('should record which ticket has been selected', () => {
    expect(selectedTicketReducer({}, {type: 'SELECT_TICKET', ticketId: 1})).toEqual(1);
  });

});