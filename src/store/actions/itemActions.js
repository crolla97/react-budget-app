import { firestore } from '../../config/fbConfig';

// ADD_ITEM
export const addItem = (item) => ({
  type: 'CREATE_ITEM',
  item
});

export const startAddItem = (itemData = {}) => {
  return (dispatch, getState) => {
    const authId = getState().auth.uid;
    const {
      title = '',
      amount = 0,
      type = '',
      createdAt = 0
    } = itemData;
    const item = { title, amount: parseInt(amount), type, createdAt: createdAt.unix() }
    firestore.collection('users').doc(authId).collection('items').add({
      item})
      .then((docRef) => {
        dispatch(addItem({
          id: docRef.id,
          ...item
        }));
      })
  }
};

// DELETE_ITEM

export const deleteItem = ({ id }) => ({
  type: 'DELETE_ITEM',
  id
})

export const startDeleteItem = ({ id }) => {
  return(dispatch, getState) => {
    const authId = getState().auth.uid;
    firestore.collection('users').doc(authId).collection('items').doc(`${id}`).delete().then(() => {
      dispatch(deleteItem({ id }));
    });
  };
};

// SET_ITEMS
export const setItems = (items) => ({
  type: 'SET_ITEMS',
  items
});

export const startSetItems = () => {
  return (dispatch, getState) => {
    const authId = getState().auth.uid;
    return firestore.collection('users').doc(authId).collection('items')
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