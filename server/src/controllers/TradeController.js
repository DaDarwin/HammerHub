import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { tradeService } from "../services/TradeService.js";
import { logger } from "../utils/Logger.js";




export class TradeController extends BaseController {
    constructor() {
        super('api/trades')
        this.router
        .get('', this.getTrades)
        .get('/:id', this.getTrade)
        // .get(':id/projects', this.getTradeProjects)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createTrade)
        .put('/:id', this.editTrade)
        .delete('/:id', this.deleteTrade)
    }
    async getTrades(req, res, next) {
        try {
            logger.log(req)
            res.send(await tradeService.getTrades(new RegExp(req.query.search, 'ig'), req.query.isLicensed))
        } 
        catch (error) {
            next(error)
        }
    }
    // async getTradeProjects(req, res, next) {
    //     try {
    //         res.send(await tradeService.getTradeProjects(req.params.id))
    //     } 
    //     catch (error) {
    //     next(error)    
    //     }
    // }
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
            res.send(await tradeService.getTradeById(req.params.id))
        }
        catch (error) {
            next(error)
        }
    }

    async getAllTrades(request, response, next) {
        try {
            const trades = await tradeService.getAllTrades()
            response.send(trades)
        } catch (error) {
            next(error)
        }
    }
}