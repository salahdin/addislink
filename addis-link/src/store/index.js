import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


require('firebase/auth')


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imgUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                id: '1121',
                title: 'test',
                date: '2017-07-17',
                description: '',
                location: '',
            },
            {
                imgUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                id: '1123',
                title: 'test',
                date: '2017-07-17',
                description: '',
                location: '',
            },
            {
                imgUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
                id: '11122',
                title: 'test',
                date: '2017-07-17',
                description: '',
                location: '',
            },

        ],
        user: null
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser(state, payload) {
            state.user = payload
        }

    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imgUrl: payload.imgUrl,
                description: payload.description,
                date: payload.date
            }

            commit('createMeetup', meetup)
        },
        signupUser({ commit }, payload) {
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    userCreds => {
                        const newUser = {
                            id: userCreds.user.uid,
                            regMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        console.log(error)
                    }

                )
        },
        signinUser({ commit }, payload) {
            return new Promise((resolve, reject) => {
                firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                    .then((userCreds) => {
                        const User = {
                            id: userCreds.user.uid,
                            regMeetups: []
                        }
                        commit('setUser', User)

                    }).then((response) => {
                        resolve(response)
                    })
                    .catch((error) => {
                        console.log(error)
                        reject(error)
                    })

                })
            }
        },
        getters: {
            loadedMeetups(state) {
                return state.loadedMeetups.sort((meetupA, meetupB) => {
                    return meetupA.date > meetupB.date
                })
            },
            loadedMeetup(state) {
                return (meetupId) => {
                    var t = state.loadedMeetups.filter(function (item) {
                        return item['id'] === meetupId
                    })
                    return t[0]
                }
            },
            loadedMeetupnew(state) {
                return (meetupId) => {
                    return {
                        id2: '1233',
                        list: state,
                        id: meetupId
                    }
                }
            },
            user(state) {
                return state.user
            }
        }


    })