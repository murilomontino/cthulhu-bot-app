import { store, persistedStore } from './store'
import actions from './reducer/reducerSounds/actions'

interface sound {
    id: number,
    title: string,
    url?: string|undefined,
    icon?: string|undefined,
    categoria?: Array<string>|undefined 
}

interface actionFunction {
    type: string,
    sound:sound,
    drawerIsOpen: boolean
}

interface sounds{
    sounds: [sound]
}

interface drawer {
    drawerIsOpen: boolean
}

interface state {
	soundPadReducer: sounds,
    drawerReducer: drawer
}

export {
	persistedStore,
	store,
	actions,
	actionFunction, 
	sound,
	state
}




