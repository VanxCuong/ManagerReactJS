import editStatusReducer from "./Reducers/editStatusReducer";
import numReducer from "./Reducers/numReducer";

var redux=require("redux");
// var oldState={
//     num:["Màn Hình","Chuột","Bàn Phím"],
//     editStatus:true
//   }
//   var reducer1=(state=oldState,action)=>{
//     switch (action.type){
//       // type=A => thay đổi editStatus = đối lập vs chính nó.
//       case "A": return {...state,editStatus:!state.editStatus};
//       // type=B => state gốc giữ nguyên. mảng num giữ nguyên và thêm mới phần tử newItem ( truền vào action.)
//       case "B": return {...state,num:[...state.num,action.newItem,action.newItem],editStatus:!state.editStatus};
//       // khi type= C => trang thái gốc giữ nguyên,  và return về 1 trang thái mới.  => num(state) thay đổi. . trả về mảng num và trong num ko có giá trị truyền vào.
//       case "C": return {...state,num:state.num.filter((value,key)=>value!==action.index)};
//       default: 
//         return state;
//     }
//   }
  // Tách 2 reducer
//   const numInitialState = ["Màn Hình","Chuột","Bàn Phím"];
//   const num = (state = numInitialState, action) => {
//         switch (action.type) {
//             // type=B => state gốc giữ nguyên. mảng num giữ nguyên và thêm mới phần tử newItem ( truền vào action.)
//             case "B": return [...state,action.newItem];
//             // khi type= C => trang thái gốc giữ nguyên,  và return về 1 trang thái mới.  => num(state) thay đổi. . trả về mảng num và trong num ko có giá trị truyền vào.
//             case "C": return [state.filter((value,key)=>value!==action.index)];
//             default: return state
//       }
//   }
//   const editStatusInitialState = false;
//     const editStatus = (state = editStatusInitialState, action) => {
//       switch (action.type) {
//           case "A": return !state;
//           default:
//               return state
//       }
//   }
  // Kết thúc tách 2 reducer
  // Kết hợp reducer
  const allreducers=redux.combineReducers({
      num:numReducer,
      editStatus:editStatusReducer
  })
  var store1=redux.createStore(allreducers);
  // Theo dõi thay đổi store
  store1.subscribe(()=>{
    console.log(JSON.stringify(store1.getState()));
    
  })
 

  export default store1;