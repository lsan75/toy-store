import {TRANSLATE} from '../actions/translate.actions'

function translateReducer(state: any = {translate: {}, langs: []}, action: any) {
  let newState
  switch (action.type) {
    case TRANSLATE.SETLANG:
      newState = JSON.parse( JSON.stringify(state) )
      return Object.assign({}, newState, { translate: action.translate })

    case TRANSLATE.SELECTLANG:
      newState = JSON.parse( JSON.stringify(state) )
      newState.langs.map(item => {
        item.selected = item.label === action.lang
        return item
      })
      return Object.assign({}, newState)

    case TRANSLATE.GETLANGS:
      newState = JSON.parse( JSON.stringify(state) )
      return Object.assign({}, newState, { langs: action.langs })

    default:
      return state
  }

}

export default translateReducer
