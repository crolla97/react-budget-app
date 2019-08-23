const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}

const itemReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_ITEM':
      console.log('created project', action.item)
      return state
    case 'CREATE_ITEM_ERROR':
      console.log('create item error', action.error)
      return state
    case 'ITEM_DELETED':
      console.log('item deleted');
      return state
    case 'ERROR_REMOVING_ITEM':
      console.log('error removing item', action.error);
      return state
    default:
      return state
  }
}

export default itemReducer;