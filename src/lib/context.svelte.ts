import { createContext } from 'svelte';
import type { Level, Mode } from './types';
import { testData } from './data.svelte';

interface SettingsParams {
	randomLevel: Level;
	randomMode: Mode;
}

export class Settings {
	private difficulty: Level;
	private _mode_: Mode;
	levelUpdated = $state(false);

	constructor(params: SettingsParams) {
		const { randomLevel, randomMode } = params;
		this.difficulty = $state(randomLevel);
		this._mode_ = $state(randomMode);
	}

	set level(value: Level) {
		if (value !== this.difficulty) {
			this.levelUpdated = true;
			this.difficulty = value;

			testData.restart();
		}
	}

	set mode(value: Mode) {
		if (value !== this._mode_) {
			this._mode_ = value;
			testData.restart();
		}
	}

	get level() {
		return this.difficulty;
	}

	get mode() {
		return this._mode_;
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
