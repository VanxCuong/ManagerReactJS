const editStatusInitialState = false;
const  editStatus = (state = editStatusInitialState, action) => {
      switch (action.type) {
          case "A": return !state;
          default:
              return state
      }
  }
export default editStatus;