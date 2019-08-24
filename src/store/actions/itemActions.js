import { firestore } from '../../config/fbConfig';

// ADD_ITEM
export const addItem = (item) => ({
  type: 'CREATE_ITEM',
  item
})

export const startAddItem = (itemData = {}) => {
  return (dispatch, getState) => {
    // const authId = getState().firebase.auth.uid
    const {
      title = '',
      amount = 0,
      type = '',
      createdAt = 0
    } = itemData;
    const item = { title, amount, type, createdAt }
    firestore.collection('users').doc('4IfTXZrtCmPzFK0urNkarHkePve2').collection('items').add({
      item})
      .then((docRef) => {
        dispatch(addItem({
          id: docRef.id,
          ...item
        }));
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

// SET_ITEMS
export const setItems = (items) => ({
  type: 'SET_ITEMS',
  items
});

export const startSetItems = () => {
  return (dispatch, getState) => {
    const uid = '4IfTXZrtCmPzFK0urNkarHkePve2';
    return firestore.collection('users').doc(uid).collection('items')
    .get()
    .then((queryDocumentSnapshot) => {
      const items = []
      queryDocumentSnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          title: doc.data().item.title,
          amount: doc.data().item.amount,
          type: doc.data().item.type,
          createdAt: doc.data().item.createdAt
        });
      });

      dispatch(setItems(items))
    });
  };
};