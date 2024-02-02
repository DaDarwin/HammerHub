import { AppState } from "../AppState"
import { Account } from "../models/Account"
import { Project } from "../models/Project"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class SearchService{

    async getProfiles(){
        AppState.projects = []
        // const res = await api.get('api/profiles')
        // AppState.profiles = res.data.map(profile => new Account(profile))
        this.getProjects()
    }

    async getProjects(){
        const res = await api.get('api/projects')
        const projects = res.data.map(project => new Project(project))
        // for(let i = 0; i < AppState.profiles.length; i++){
        //     AppState.profiles[i].projects = projects.filter(project => project.creatorId == AppState.profiles[i].id)
        AppState.projects = projects
    }

    async getSearch(search){
        const res = await api.get(`api/projects?search=${search}`)
        logger.log(res)
        AppState.projects = res.data.map(project=> new Project(project))
        logger.log(AppState.projects)
    }

}

export const searchService = new SearchService()