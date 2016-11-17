import { TRANSLATE } from '../actions/translate.actions'

function translateReducer(state: any = {translate: {}, langs: []}, action: any) {

  switch (action.type) {
    case TRANSLATE.SETLANG:

      const langs = state.langs.map(item => {
        const newItem = Object.assign({}, item)
        newItem.selected = newItem.label === action.lang
        return newItem
      })
      return Object.assign({}, state, { langs }, { translate: action.translate })

    case TRANSLATE.GETLANGS:
      return Object.assign({}, state, { langs: action.langs })

    default:
      return state
  }

}

export default translateReducer
