import { TRANSLATE } from '../actions/translate.actions'

function translateReducer(state: any = {translate: {}, langs: []}, action: any) {

  switch (action.type) {
    case TRANSLATE.SETLANG:
      const newState = state.langs.map(item => {
        item.selected = item.label === action.lang
        return item
      })
      return Object.assign(newState, { translate: action.translate })

    case TRANSLATE.GETLANGS:
      return Object.assign({}, state, { langs: action.langs })

    default:
      return state
  }

}

export default translateReducer
