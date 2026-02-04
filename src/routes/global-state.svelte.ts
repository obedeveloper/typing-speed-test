import { createContext } from 'svelte';

export class MenuButton {
	open = $state(false);

	toggleItems() {
		this.open = !this.open;
	}

	hideItems() {
		this.open = false;
	}
}

export default new (class {
	difficultyMenu = new MenuButton();
	modeMenu = new MenuButton();
})();

class LevelAndMode {
	level = $state('');
	mode = $state('');
}

export const [getGlobalContext, setGlobalContext] = createContext<LevelAndMode>();
