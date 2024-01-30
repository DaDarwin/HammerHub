import { AppState } from "../AppState"
import { Project } from "../models/Project"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
class ProjectsService {

  async createProject(projectData) {
    const response = await api.post('api/projects', projectData)
    console.log('getting project', response.data)
    const newProject = new Project(response.data)
    AppState.projects = newProject
  }

}

export const projectsService = new ProjectsService()