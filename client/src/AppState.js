import { reactive } from 'vue'
import { Project } from './models/Project.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /**@type {Project[]} */
  projects: [],

  /**@type {Project{}} */
  activeProject: {}
})
