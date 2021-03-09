export interface sound {
    id: number,
    title: string,
    url?: string|undefined,
    icon?: string|undefined,
    categoria?: Array<string>|undefined 
}

export interface actionFunction {
    type: string,
    sound:sound
}

interface sounds{
    sounds: [sound]
}

export interface state {
	soundPadReducer: sounds
}