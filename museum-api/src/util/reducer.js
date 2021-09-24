// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_LOADING": {
//       return { ...state, loading: true };
//     }
//     case "SET_OBJECTS": {
//       return {
//         ...state,
//         loading: false,
//         // data.objects
//         objects: action.payload.objects,
//       };
//     }
//     case "HANDLE_SEARCH": {
//       return { ...state, query: action.payload };
//     }
//     case "REMOVE_OBJECT" : {
//       const newObjects = state.objects.filter(
//         (object) => object.objectID !== action.payload
//       );
//       return {
//         ...state,
//         objects: newObjects,
//       }
//     }
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return { ...state, loading: true };
    }
    case "SET_FOODS": {
      return {
        ...state,
        loading: false,
        //data.nbPages
        // nbPages: action.payload.nbPages,
        //data.hits
        foods: action.payload.foods,
      };
    }
    case "HANDLE_SEARCH": {
      return { ...state, query: action.payload};
    }
    case "REMOVE_POST": {
      const newFoods = state.foods.filter(
        (food) => food.objectID !== action.payload
      );
      return {
        ...state,
        foods: newFoods,
      };
    }
    // case "HANDLE_PAGE": {
    //   let newPage = state.page
    //   if (action.payload === "inc") {
    //     newPage = state.page + 1;
    //     if (newPage + 1 > state.nbPages) {
    //       newPage = 0;
    //     }
    //   } else {
    //     newPage = state.page - 1;
    //     if (newPage < 0) {
    //       newPage = state.nbPages - 1;
    //     }
    //   }
    //   return {
    //     ...state,
    //     page: newPage,
    //   }
    // }
  }
};
//   }
// };
