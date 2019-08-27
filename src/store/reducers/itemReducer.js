const initState = {
  items: []
}

const itemReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_ITEM':
      console.log('created project', action.item)
      return [
        ...state,
        action.item
      ]
    case 'CREATE_ITEM_ERROR':
      console.log('create item error', action.error)
      return state
    case 'SET_ITEMS':
      console.log('items set', action.items);
      return action.items
    case 'DELETE_ITEM':
      console.log('item deleted');
      return state.filter(({ id }) => id !== action.id);
    case 'ERROR_REMOVING_ITEM':
      console.log('error removing item', action.error);
      return state
    default:
      return state
  }
}

export default itemReducer;