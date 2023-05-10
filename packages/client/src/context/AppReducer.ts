// There's two main ways of making reducers, which should I use?
// Actions vs Partial State
const AppReducer = (state: any, action: any) => {
  switch (action.type) {
    case "login":
      console.log("reducer login");
  }
};
