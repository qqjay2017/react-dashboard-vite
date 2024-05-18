// import './jfDarkTheme/jfDarkThemeGlobal.less'
// import './jfLightTheme/jfLightThemeGlobal.less'

import { DashBoardTheme, jfDarkTheme } from './jfDarkTheme'
import { jfLightTheme } from './jfLightTheme'

export * from './jfDarkTheme'
export * from './jfLightTheme'

export const themesMap: Record<string, DashBoardTheme> = {
    jfDarkTheme,
    jfLightTheme
}