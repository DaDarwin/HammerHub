import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"


function _theStringFilter(projects, filter){//FIXME - 
  logger.log('filter:', filter)
  let filtered = []
  filtered.push(projects.filter( (project) => {
    logger.log(project)
    project.title.toLowerCase().includes(filter.toLowerCase())
  }))
  filtered.push(projects.filter( (project) => {
    project.description.toLowerCase().includes(filter.toLowerCase())
  }))
  return filtered
  // || project.pictures.forEach( picture => picture.description.toLowerCase().includes(filter.toLowerCase()))
}

function _theLicenseFilter(projects){
  logger.log('isLicensed Using')
  return projects.filter( (project) => {
    project.trade.isLicensed == true
  })
}


class ProjectsService {
  async getProjects(query, isLicensed) {//NOTE ask mick about counting number of times ReGex is found for searching through relevance
    let projects = await dbContext.Projects.find().populate('trade pictures')
    if(isLicensed){
      projects = _theLicenseFilter(projects)
    }
    if(query){
      projects =  _theStringFilter(projects, query)
    }
    logger.log('Filtered Projects:', projects)
    return projects
  }


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

  async editProject(projectId, projectData) {
    const originalProject = await this.getProjectById(projectId)
    originalProject.title = projectData.title ? projectData.title : originalProject.title
    originalProject.coverImg = projectData.coverImg ? projectData.coverImg : originalProject.coverImg
    originalProject.description = projectData.description ? projectData.description : originalProject.description
    await originalProject.save()
    return originalProject
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