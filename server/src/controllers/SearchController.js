import { projectsService } from "../services/ProjectsService.js";
import { tradeService } from "../services/TradeService.js";
import BaseController from "../utils/BaseController.js";




export class SearchController extends BaseController{


    constructor(){
        super('api/search')
        this.router
        .get('', this.search)
    }
    
}