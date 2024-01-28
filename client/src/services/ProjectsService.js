import { AppState } from "../AppState"
import { Project } from "../models/Project"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
class ProjectsService {

  async createProject(projectData) {
    const response = await api.post('api/projects', projectData)
    console.log('getting project', response.data)
    const newProject = new Project(response.data)
    console.log('new project', newProject)
    //FIXME appstate.push is not a function? 
    //FIXME trade is null in response.
    AppState.projects.push(newProject)
    // AppState.projects.push(new Project(response.data))
  }

}

export const projectsService = new ProjectsService()