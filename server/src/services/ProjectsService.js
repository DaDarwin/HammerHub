import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class ProjectsService {

  async getProjectById(projectId) {
    const project = await dbContext.Projects.findById(projectId).populate('creator', 'name picture')

    if (!project) {
      throw new BadRequest(`Invalid id: ${projectId}`)
    }
    return project
  }

  async createProject(projectData) {
    const project = await dbContext.Projects.create(projectData)
    await project.populate('creator', 'name picture')
    return project
  }



}
export const projectsService = new ProjectsService()