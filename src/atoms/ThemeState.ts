import { atom } from "recoil"
import { THEMES } from "../constants/themes"
import { STORAGE_KEYS } from "../constants/storageKeys"

export const ThemeState = atom({
    key: 'Theme',
    default: localStorage.getItem(STORAGE_KEYS.THEME) || THEMES.DARK
})

