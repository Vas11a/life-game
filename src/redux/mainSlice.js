import { createSlice } from '@reduxjs/toolkit'
import { filed } from '../filed'
import { canBeBlack, canBeWhite } from '../functions'

const initialState = {
    filed: filed,
    changeArr: [],
    figures:{
        Glider: [[8, 9], [8, 10], [8, 11], [7, 11], [6, 10]],
        Pulsar: [[19, 16], [19, 17], [19, 18], [18, 17], [19, 22], [19, 23], [19, 24], [18, 23]],
        Gun: [[5, 3], [6, 3], [6, 4], [5, 4], [5, 13], [6, 13], [7, 13], [4, 14], [3, 15], [3, 16], [8, 14], [9, 15], [9, 16], [8, 18], [7, 19], [6, 19], [5, 19], [4, 18], [6, 17], [6, 20], [5, 23], [5, 24], [4, 24], [3, 24], [3, 23], [4, 23], [2, 25], [6, 25], [2, 27], [1, 27], [6, 27], [7, 27], [3, 37], [4, 37], [4, 38], [3, 38]],
        Accelator: [[27, 24], [27, 25], [25, 27], [24, 27], [23, 25], [25, 23], [22, 24], [21, 23], [20, 22], [24, 22], [23, 21], [22, 20], [22, 22], [23, 23], [18, 21], [18, 20], [20, 18], [21, 18]],
        Lighthouse: [[15, 18], [15, 19], [16, 18], [17, 21], [18, 21], [18, 20]],
        Ship: [[35, 13], [35, 15], [35, 16], [34, 12], [33, 13], [33, 14], [32, 14], [31, 16], [31, 17], [32, 18], [33, 18], [34, 18], [35, 18], [35, 20], [34, 20], [33, 20], [32, 20], [31, 21], [31, 22], [32, 24], [33, 24], [33, 25], [34, 26], [35, 25], [35, 23], [35, 22], [29, 18], [29, 19], [29, 20], [28, 21], [27, 20], [26, 19], [27, 18], [28, 17]],
    }
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        paintPart(state, action) {
            if (state.filed[action.payload[0]][action.payload[1]] === 'x') {
                state.filed[action.payload[0]][action.payload[1]] = ''
            } else {
                state.filed[action.payload[0]][action.payload[1]] = 'x'
            }
        },
        clearFiled(state) {
            state.changeArr = []
            state.filed = filed
        },
        startGame(state) {
            state.filed.forEach((elem, idxVer) => {
                elem.forEach((elem, idxHor) => {
                    if (elem === '') {
                        const resBl = canBeBlack(idxVer, idxHor, state.filed)
                        if (resBl === true) {
                           state.changeArr.push([idxVer, idxHor, 'b']) 
                        }
                    } else if (elem === 'x') {
                        const resWh = canBeWhite(idxVer, idxHor, state.filed)
                        if (resWh === true) {
                            state.changeArr.push([idxVer, idxHor, 'w'])
                        }
                    }
                })
            });
            state.changeArr.forEach(element => {
                
                if (element[2] === 'b') {
                    state.filed[element[0]][element[1]] = 'x'
                } else {
                    state.filed[element[0]][element[1]] = ''
                }
            });
        },
        writeFigure(state, action) {
        let drowArr = []
          if (action.payload === 'Accelator') {
            drowArr = state.figures.Accelator
          } else if (action.payload === 'Gun') {
            drowArr = state.figures.Gun
          } else if (action.payload === 'Pulsar') {
            drowArr = state.figures.Pulsar
          } else if (action.payload === 'Lighthouse') {
            drowArr = state.figures.Lighthouse
          } else if (action.payload === 'Glider') {
            drowArr = state.figures.Glider
          } else {
            drowArr = state.figures.Ship
          }
          drowArr.forEach(element => {
            state.filed[element[0]][element[1]] = 'x'
          });
            
        }
    },
})

export const { paintPart, startGame, clearFiled, writeFigure } = mainSlice.actions

export default mainSlice.reducer