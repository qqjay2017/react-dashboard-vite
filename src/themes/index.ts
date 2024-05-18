// import './jfDarkTheme/jfDarkThemeGlobal.less'
// import './jfLightTheme/jfLightThemeGlobal.less'

import { DashBoardTheme, jfDarkTheme } from './jfDarkTheme'
import { jfGreenTheme } from './jfGreenTheme'
import { jfLightTheme } from './jfLightTheme'


export * from './jfDarkTheme'
export * from './jfLightTheme'
export * from "./jfGreenTheme"

export const themesMap: Record<string, DashBoardTheme> = {
    jfDarkTheme,
    jfLightTheme,
    jfGreenTheme
}