import BaseController from "../utils/BaseController.js"
import { projectsService } from "../services/ProjectsService.js"
import { Auth0Provider } from "@bcwdev/auth0provider"
import { picturesService } from "../services/PicturesService.js"


export class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .get(`/:projectId`, this.getProjectById)
      .get(`/:albumId/pictures`, this.getPicturesInProject)
      .get('', this.search)
      .get(`/:projectId/pictures`, this.getPicturesInProject)

      .use(Auth0Provider.getAuthorizedUserInfo)

      .post('', this.createProject)
      .put(`/:projectId`, this.editProject)
      .delete(`/:projectId`, this.archiveProject)


  }
  // async getProjects(req, res, next) {
  //   try {
  //     res.send(await projectsService.getProjects(req.query.search, req.query.isLicensed))
  //   } 
  //   catch (error) {
  //     next(error)
  //   }
  // }

  async search(req, res, next) {
    try {
        res.send(await projectsService.search(new RegExp(req.query.search, 'ig')))
    } 
    catch (error) {
        next(error)
    }
}

  async getProjectById(request, response, next) {
    try {
      const projectId = request.params.projectId
      const project = await projectsService.getProjectById(projectId)
      response.send(project)
    } catch (error) {
      next(error)
    }
  }
  async getPicturesInProject(request, response, next) {
    try {
      const projectId = request.params.projectId
      const project = await picturesService.getPicturesInProject(projectId)
    } catch (error) {
      next(error)
    }
  }

  async createProject(request, response, next) {
    try {
      const projectData = request.body
      const userId = request.userInfo.id
      projectData.creatorId = userId
      const project = await projectsService.createProject(projectData)
      response.send(project)
    } catch (error) {
      next(error)
    }
  }
  async editProject(request, response, next) {
    try {
      const projectId = request.params.projectId
      const projectData = request.body
      const project = await projectsService.editProject(projectId, projectData)
      response.send(project)
    } catch (error) {
      next(error)
    }
  }
  async archiveProject(request, response, next) {
    try {
      const projectId = request.params.projectId
      const userId = request.userInfo.id
      const project = await projectsService.archiveProject(projectId, userId)
      response.send(project)
    } catch (error) {
      next(error)
    }
  }


}

