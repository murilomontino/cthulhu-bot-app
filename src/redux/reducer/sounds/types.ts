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
    url?: string|undefined,
    icon?: string|undefined,
    categoria?: Array<string>|undefined 
}

// State Type

export interface SoundState {
    readonly sounds: Sound[]
}