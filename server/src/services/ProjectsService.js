import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"


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

  async editProject(projectData) {
    //TODO finish after the controller function is written
  }
  async archiveProject(projectId, userId) {
    const projectToArchive = await this.getProjectById(projectId)
    if (projectToArchive.creatorId != userId)
      throw new Forbidden('Not your project to delete')
    projectToArchive.archived = !projectToArchive.archived
    await projectToArchive.save()
    return projectToArchive
  }

}
export const projectsService = new ProjectsService()