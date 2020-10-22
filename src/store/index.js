import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //mock data before firestore
    user: {},
    project: {
      id: 0,
      name: "Mon Projet",
      branch: "master",
      delivery: moment("2020-10-28")
    },
    mods: [
      {
        id: 1,
        name: "Auth",
        descr: "Okokok c'est un module tout va bien",
        branch: "dev-auth",
        state:'doing',
        delivery: moment("2020-10-26"),
        tasks: {
          doing: [
            {
              id: 1,

              name: "Mise à jour de la base de données",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
            {
              id: 2,
              name: "Doing 2",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
          ],
          todo: [
            {
              id: 3,
              name: "Todo 1",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
            {
              id: 4,
              name: "Todo 2",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
            {
              id: 5,
              name: "Todo 3",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
            {
              id: 6,
              name: "Todo 4",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
          ],
          done: [
            {
              id: 7,
              name: "Done 1",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
          ],
        },
      },
      {
        id: 2,
        name: "Daemon",
        descr: "Okokok c'est un module aussi tout va bien",
        branch: "dev-daemon",
        state:'done',
        delivery: moment("2020-10-27"),
        tasks: {
          doing: [
            {
              id: 1,
              name: "Doing 1",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
            {
              id: 2,
              name: "Doing 2",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
          ],
          todo: [
            {
              id: 3,
              name: "Todo 1",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
            {
              id: 4,
              name: "Todo 2",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
            {
              id: 5,
              name: "Todo 3",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
            {
              id: 6,
              name: "Todo 4",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
          ],
          done: [
            {
              id: 7,
              name: "Done 1",
              descr:
                "Description de la tâche actuelle. Normalement cela ne devrait pas dépasser une certaine longueur ou alors je lui coupe alègrement le siffle",
            },
          ],
        },
      },
    ],
  },
  mutations: {
    setProject(state, project) {
      state.project = project
    },
    setModules(state, mods) {
      state.mods = mods
    }
  },
  actions: {

    login: () => {

    },
    logout: () => {

    },
  },
  modules: {
  }
})
