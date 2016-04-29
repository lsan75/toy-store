import {TRANSLATE} from '../actions/translate.actions'

function translateReducer(state: any = {}, action: any) {

  switch (action.type) {
    case TRANSLATE.SETLANG:
      return action.translate

    default:
      return state
  }

}

export default translateReducer
