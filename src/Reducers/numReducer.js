const numInitialState = ["Màn Hình","Chuột","Bàn Phím"];
const num = (state = numInitialState, action) => {
        switch (action.type) {
            // type=B => state gốc giữ nguyên. mảng num giữ nguyên và thêm mới phần tử newItem ( truền vào action.)
            case "B": return [...state,action.newItem];
            // khi type= C => trang thái gốc giữ nguyên,  và return về 1 trang thái mới.  => num(state) thay đổi. . trả về mảng num và trong num ko có giá trị truyền vào.
            case "C": return [state.filter((value,key)=>value!==action.index)];
            default: return state
      }
  }
  export default num;