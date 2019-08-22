import { firestore } from '../../config/fbConfig';


export const createItem = (item) => {
  return (dispatch, getState) => {
    const authId = getState().firebase.auth.uid
    firestore.collection('users').doc(authId).collection('items').add({
      ...item,
      title: item.title,
      amount: item.amount,
      type: item.type,
      createdAt: new Date() 
    }).then(() => {
      dispatch({ type: 'CREATE_ITEM', item });
    }).catch((err) => {
      dispatch({ type: 'CREATE_ITEM_ERROR', err });
    })
  }
};

export const deleteItem = (itemId) => {
  return(dispatch, getState) => {
    const authId = getState().firebase.auth.uid;
    firestore.collection('users').doc(authId).collection('items').doc(`${itemId}`).delete(
    ).then(() => {
      dispatch({ type: 'ITEM_DELETED' });
    }).catch((err) => {
      dispatch({ type: 'ERROR_REMOVING_ITEM', err})
    })
  }
};