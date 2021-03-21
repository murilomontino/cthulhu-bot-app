export type Sound =  {
    id: number,
    title?: string,
    url?: string|undefined,
    icon?: string|undefined,
    categoria?: Array<string>|undefined 
}

export interface SoundState {
    sounds: Sound[]
}

export type StateReducer = {
	soundPadReducer: {
        sounds: Sound[]
    }
}

export interface ActionSound {
	type: string,
	sound?: Sound
}
