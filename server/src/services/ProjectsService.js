import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"


// function _theStringFilter(projects, filter){/ 
//   logger.log('filter:', filter)
//   let filtered = []
//   filtered.push(projects.filter( (project) => {
//     logger.log(project)
//     project.title.toLowerCase().includes(filter.toLowerCase())
//   }))
//   filtered.push(projects.filter( (project) => {
//     project.description.toLowerCase().includes(filter.toLowerCase())
//   }))
//   return filtered
//   // || project.pictures.forEach( picture => picture.description.toLowerCase().includes(filter.toLowerCase()))
// }

// function _theLicenseFilter(projects){
//   logger.log('isLicensed Using')
//   return projects.filter( (project) => {
//     project.trade.isLicensed == true
//   })
// }


class ProjectsService {
  // async getProjects(query, isLicensed) {// ask mick about counting number of times ReGex is found for searching through relevance
  //   let projects = await dbContext.Projects.find().populate('trade pictures')
  //   if(isLicensed){
  //     projects = _theLicenseFilter(projects)
  //   }
  //   if(query){
  //     projects =  _theStringFilter(projects, query)
  //   }
  //   logger.log('Filtered Projects:', projects)
  //   return projects
  // }

  async search(search) {
    // let filter = {}
    // logger.log(filter)
    // isLicensed? filter.isLicensed = true : ''
    // // type? filter.workType = type : ''
    // const unfilteredTrades = await dbContext.Trade.find(query).populate('projects')
    // logger.log('trades:', unfilteredTrades)

    // // let projects = await dbContext.Projects.find({tradeId: unfilteredTrades.map( trade => trade.id)})
    // // logger.log('projects:', projects)

    // // let filter2 = {}
    // // isLicensed ? filter2.projectId = projects.map(project => project._id) : ''
    // unfilteredTrades.projects.map(project => project._id)

    // search? filter2.description = {regex: search} : ''
    // let pictures = await dbContext.Pictures.find(filter2)
    // logger.log('pictures:', pictures)

    // projects = projects.filter(project => {
    //     project.description == search || project.title == search || pictures.map(picture => picture.projectId).includes(project.id)
    // })

    // const trades = unfilteredTrades.filter( trade => {
    //     trade.extraInfo == search || projects.map(project => project.tradeId).includes(trade.id)
    // })
    // logger.log('trades again:',trades, 'projects again', projects)

    // return trades

    return dbContext.Projects.find({ $or: [{ description: { $regex: search } }, { title: { $regex: search } }] })



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
    originalProject.trade = projectData.trade ? projectData.trade : originalProject.trade
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