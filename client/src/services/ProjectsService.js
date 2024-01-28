import { AppState } from "../AppState"
import { Project } from "../models/Project"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
class ProjectsService {

  async createProject(projectData) {
    const response = await api.post('api/projects', projectData)
    console.log('new post', response.data)
    AppState.projects.push(new Project(response.data))
  }

}

export const projectsService = new ProjectsService()