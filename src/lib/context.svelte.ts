import { createContext } from 'svelte';
import type { Level, Mode } from './types';

interface SettingsParams {
	randomLevel: Level;
	randomMode: Mode;
}

export class Settings {
	private difficulty: Level;
	mode: Mode;
	levelUpdated = $state(false);

	constructor(params: SettingsParams) {
		const { randomLevel, randomMode } = params;
		this.difficulty = $state(randomLevel);
		this.mode = $state(randomMode);
	}

	set level(value: Level) {
		this.levelUpdated = true;
		this.difficulty = value;
	}

	get level() {
		return this.difficulty;
	}
}

export class Passage {
	value: string;

	constructor(passage: string) {
		this.value = $state(passage);
	}
}

export const [getSettings, setSettings] = createContext<Settings>();
export const [getPassage, setPassage] = createContext<Passage>();
