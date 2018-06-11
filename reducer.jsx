var reducer = function(state, action) {
  console.log('action: ', action.payload);
  console.log('state:', state);
  console.log('state.menu:', state.menu);
  var MENU_ID = 'fullmenu';
  switch (action.type) {
    case 'SET_MENU':
      console.log('SETMENU, payload: ', action.payload);
      return {
        menu: action.payload
      };
    case 'PLACE_ORDER':
      fetch('http://cities.jonkri.se/'+MENU_ID, {
        body: JSON.stringify({originalMenu: state.menu}),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      }).then(response => response.json())
        .then(result => {
          console.log('PUT result: ', result);
      //    store.dispatch({ payload: result, type: 'UPDATE_DRINK' });
        })
      return {
        menu: state.menu
      };
    case 'ADD_CUPS':
      var newMenu1 = Object.assign({}, state.menu, {
        [action.item]: Object.assign({}, state.menu[action.item], {
          cups: action.payload })
      })
      return {
        menu: newMenu1
      };
    case 'CHANGE_SUGAR':
      var newMenu = Object.assign({}, state.menu, {
        [action.item]: Object.assign({}, state.menu[action.item], { sugar: action.payload})
      })
      return {
        menu: newMenu
      };
    default: return state;
  }
};

module.exports = reducer;
