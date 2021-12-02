import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {
                id: uuidv4(),
                img: 'sncrs.png',
                name: 'Vivamus mauris',
                about: `Обувь, предназначенная для стройки
                жилых помещений и предприятий.`, 
                description: {
                    size: '36-46',
                    color: 'black',
                    requirements: 'something here',
                    material: 'Резина, металл',
                    shoesTop: 'black',
                    rodoshe: 'black',
                    insole: 'black',
                    rodosheSet: 'black'
                }, 
            },
            {
                id: uuidv4(),
                img: 'sncrs2.png',
                name: 'Vivamus mauris',
                about: `Обувь, предназначенная для стройки
                жилых помещений и предприятий.`, 
                description: {
                    size: '36-46',
                    color: 'black',
                    requirements: 'something here',
                    material: 'Резина, металл',
                    shoesTop: 'black',
                    rodoshe: 'black',
                    insole: 'black',
                    rodosheSet: 'black'
                },
            },
            {
                id: uuidv4(),
                img: 'sncrs3.png',
                name: 'Vivamus mauris',
                about: `Обувь, предназначенная для стройки
                жилых помещений и предприятий.`, 
                description: {
                    size: '36-46',
                    color: 'black',
                    requirements: 'something here',
                    material: 'Резина, металл',
                    shoesTop: 'black',
                    rodoshe: 'black',
                    insole: 'black',
                    rodosheSet: 'black'
                },
            },
            {
                id: uuidv4(),
                img: 'sncrs4.png',
                name: 'Vivamus mauris',
                about: `Обувь, предназначенная для стройки
                жилых помещений и предприятий.`, 
                description: {
                    size: '36-46',
                    color: 'black',
                    requirements: 'something here',
                    material: 'Резина, металл',
                    shoesTop: 'black',
                    rodoshe: 'black',
                    insole: 'black',
                    rodosheSet: 'black'
                },
            },
            {
                id: uuidv4(),
                img: 'sncrs5.png',
                name: 'Vivamus mauris',
                about: `Обувь, предназначенная для стройки
                жилых помещений и предприятий.`, 
                description: {
                    size: '36-46',
                    color: 'black',
                    requirements: 'something here',
                    material: 'Резина, металл',
                    shoesTop: 'black',
                    rodoshe: 'black',
                    insole: 'black',
                    rodosheSet: 'black'
                },
            },
            {
                id: uuidv4(),
                img: 'sncrs6.png',
                name: 'Vivamus mauris',
                about: `Обувь, предназначенная для стройки
                жилых помещений и предприятий.`, 
                description: {
                    size: '36-46',
                    color: 'black',
                    requirements: 'something here',
                    material: 'Резина, металл',
                    shoesTop: 'black',
                    rodoshe: 'black',
                    insole: 'black',
                    rodosheSet: 'black'
                },
            }
        ],
        prefers: [
            {
                id: uuidv4(),
                img: 'pref1.png',
                title: "Более 25 лет на рынке",
                description: `Обувь, предназначенная для стройки
                жилых помещений и предприятий.`
            },
            {
                id: uuidv4(),
                img: 'pref2.png',
                title: "Современная техника",
                description: `Обувь, предназначенная для стройки
                жилых помещений и предприятий.`
            },
            {
                id: uuidv4(),
                img: 'pref3.png',
                title: "Круглогодичный цикл",
                description: `Обувь, предназначенная для стройки
                жилых помещений и предприятий.`
            },
        ],
        animation: {
            sideBar: false,
        }
    },
        
    getters: {
        products: state => state.products,
        prefers: state => state.prefers,
        sideBar: state => state.sideBar
    },
    mutations: {
        openMenu(state, data) {
            state.animation.sideBar = !state.animation.sideBar
            let body = document.querySelector('body')

            if(state.animation.sideBar) {
                body.style.overflow = 'hidden'
            } else {
                body.style.overflowY = 'scroll'
            }
        }
    },
    actions: {
        openMenu({ commit }, data) {
            commit('openMenu', data)
        },
    },
})