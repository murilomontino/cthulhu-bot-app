// Action Types
export enum SoundsTypes  {
	addSound = 'SOUND/ADD',
	removeSound = 'SOUND/REMOVE',
	reset = 'SOUND/RESET',
}

// Data Types

export type Sound =  {
    id: number,
    title?: string,
    url?: string,
    icon?: string,
    categoria?: Array<string>
}

// State Type

export interface SoundState {
    sounds: Sound[]
}