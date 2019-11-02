import hexRgb from 'hex-rgb'
import { RGBColor } from 'react-color'
import colors from 'nice-color-palettes'


const getRGBColorFromHexString = (color: string): RGBColor => {
  const rgb = hexRgb(color)
  return { r: rgb.red, g: rgb.green, b: rgb.blue, a: rgb.alpha }
}

export interface ICanvasState {
  text: string
  colorText: RGBColor
  anchor: number
  seed: number
  cellSize: number
  xColorsIdx: number
  lineHeight: number
  fontSize: number
  fontWeight: number
  letterSpacing: number
  fontIdx: number
}

type TActionSet = { type: 'SET', key: string, value: any }
type TActionXColorIdx = { type: 'SET_X_COLORS_IDX', xColorsIdx: number }
type TActionSetColorText = { type: 'SET_COLOR_TEXT', colorText: RGBColor }
type TAction = TActionSet | TActionXColorIdx | TActionSetColorText

export const initState: ICanvasState = {
  text: '홍길동',
  colorText: { r: 244, g: 244, b: 255, a: 1 },
  anchor: 0.5,
  seed: 10,
  cellSize: 80,
  xColorsIdx: 66,
  lineHeight: 0,
  fontSize: 190,
  fontWeight: 400,
  letterSpacing: 10,
  fontIdx: 11,
}

const reducer = (state: ICanvasState, action: TAction) => {
  switch (action.type) {
    case 'SET_X_COLORS_IDX':
      if (typeof action.xColorsIdx !== 'number') {
        console.warn("typeof action.xColorsIdx !== 'number'")
        return state
      }
      return {
        ...state,
        xColorsIdx: action.xColorsIdx,
        colorText: getRGBColorFromHexString(colors[action.xColorsIdx][3]),
      }
    case 'SET':
      if (action.value === state[action.key]) return state
      if (typeof action.value !== typeof state[action.key]) {
        console.warn(`Wrong type. ${action.key}: ${action.value}`)
      }

      return {
        ...state,
        [action.key]: action.value,
      }

    case 'SET_COLOR_TEXT':
      return {
        ...state,
        colorText: action.colorText,
      }
    default:
      return state
  }
}

export default reducer
