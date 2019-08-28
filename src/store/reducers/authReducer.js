const initState = {}

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        uid: action.uid
      }
    case 'LOGOUT_SUCCESS':
      console.log('logout success');
      return {}
    default:
      return state
  }
}

export default authReducer