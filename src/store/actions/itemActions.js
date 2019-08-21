import { firestore } from '../../config/fbConfig';


export const createItem = (item) => {
  return (dispatch, getState) => {
    const authId = getState().firebase.auth.uid
    firestore.collection('users').doc(authId).collection('items').add({
      ...item,
      title: item.title,
      amount: item.amount,
      type: item.type
    }).then(() => {
      dispatch({ type: 'CREATE_ITEM', item })
    }).catch((err) => {
      dispatch({ type: 'CREATE_ITEM_ERROR', err });
    })
  }
};