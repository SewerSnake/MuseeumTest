var reducer = function(state, action) {
  console.log('action: ', action.payload);
  console.log('state:', state);
  console.log('state.menu:', state.menu);
  var MENU_ID = 'fullmenu';
  switch (action.type) {
    case 'SET_MENU':
      return {
        menu: action.payload
      };

    case 'PLACE_ORDER':  //Update single drink
  //    var ourDrinks = Object.values(state.menu).filter((drink) => drink.cups > 0)

      // VILL VI KÖRA UPP NYA MENYN GENAST TILL APIN ELLER KANSKE FÖRST I SISTA 'PLACE ORDER' SKEDET.
      fetch('http://cities.jonkri.se/'+MENU_ID, {
        body: JSON.stringify({cafeMenu: state.menu}),
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
        menu: state.menu //
      };
    case 'UPDATE_DRINK':  //Update single drink
      return {
        //
      };
    case 'ADD_CUPS':
      var newMenu1 = Object.assign({}, state.menu, {
        [action.item]: Object.assign({}, state.menu[action.item], {
          cups: action.payload })
      })
      return {menu: newMenu1};

    case 'CHANGE_SUGAR':
      var newMenu = Object.assign({}, state.menu, {
        [action.item]: Object.assign({}, state.menu[action.item], { sugar: true})
      })

      // VILL VI KÖRA UPP NYA MENYN GENAST TILL APIN ELLER KANSKE FÖRST I SISTA 'PLACE ORDER' SKEDET.
      // fetch('http://cities.jonkri.se/'+'fullmenu', {
      //   body: JSON.stringify({cafeMenu: newMenu}),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   method: 'PUT'
      // }).then(response => response.json())
      //   .then(result => {
      //     console.log('PUT result: ', result);
      //     store.dispatch({ payload: result, type: 'UPDATE_DRINK' });
      //   })

      return {menu: newMenu};
    default: return state;
  }
};

module.exports = reducer;
