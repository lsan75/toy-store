import { TRANSLATE } from '../actions/translate.actions'
import { clone } from '../helpers/helpers'

function translateReducer(state: any = {translate: {}, langs: []}, action: any) {

  const newState = clone(state)

  switch (action.type) {
    case TRANSLATE.SETLANG:
      newState.langs.map(item => {
        item.selected = item.label === action.lang
        return item
      })
      return Object.assign(newState, { translate: action.translate })

    case TRANSLATE.GETLANGS:
      return Object.assign(newState, { langs: action.langs })

    default:
      return state
  }

}

export default translateReducer
