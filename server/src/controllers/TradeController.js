import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { tradeService } from "../services/TradeService.js";




export class TradeController extends BaseController{
    constructor(){
        super('api/trades')
        this.router
        .get('/:id', this.getTrade)
        .get(':id/projects', this.getTradeProjects)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createTrade)
        .put('/:id', this.editTrade)
        .delete('/:id', this.deleteTrade)
    }
    async getTradeProjects(req, res, next) {
        try {
            res.send(await tradeService.getTradeProjects(req.params.id))
        } 
        catch (error) {
        next(error)    
        }
    }
    async deleteTrade(req, res, next) {
        try {
            res.send(await tradeService.deleteTrade(req.params.id, req.userInfo.id))
        } 
        catch (error) {
        next(error)    
        }
    }
    async editTrade(req, res, next) {
        try {
            res.send(await tradeService.editTrade(req.params.id, req.body, req.userInfo.id))
        } 
        catch (error) {
        next(error)    
        }
    }
    async createTrade(req, res, next) {
        try {
            res.send(await tradeService.createTrade(req.body, req.userInfo.id))
        } 
        catch (error) {
        next(error)    
        }
    }
    async getTrade(req, res, next) {
        try {
            res.send(await tradeService.getTrade(req.params.id))
        } 
        catch (error) {
        next(error)    
        }
    }
}