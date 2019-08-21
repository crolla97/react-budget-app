const initState = {
  items: [
    {id: '1', title: 'Car Payment', type: 'expense', amount: '233'},
    {id: '2', title: 'Home Insurance', type: 'expense', amount: '20'},
    {id: '3', title: 'Dantes', type: 'income', amount: '70'}
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
    default:
      return state
  }
}

export default itemReducer;