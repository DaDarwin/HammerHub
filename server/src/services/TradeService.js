import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"

class TradeService{
    getTradeProjects(id) {
        const projects = dbContext.
    }

    async deleteTrade(id, userId) {
        const trade =  await this.getTrade(id)
        if(userId != trade.profileId){
            throw new Forbidden('Get out of here')
        }
        trade.archived = !trade.archived
        await trade.save()
        //TODO call the delete Project function for all projects of the trade
    }
    async editTrade(id, payload, userId) {
        const trade = await this.getTrade(id)
        if(userId != trade.profileId){
            throw new Forbidden('Get out of here')
        }
        trade.extraInfo = payload.extraInfo? payload.extraInfo : trade.extraInfo
        trade.isLicensed = payload.isLicensed != undefined? payload.isLicensed : trade.isLicensed

        return trade
    }
    
    async createTrade(payload, userId){
        payload.profileId = userId
        return await dbContext.Trade.create(payload)

    }

    async getTrade(id){
        const trade = await dbContext.Trade.findById(id)
        if(!trade.id){
            throw new BadRequest(`No Trade wit id: ${id}`)
        }
        return trade
    }
 
}


export const tradeService = new TradeService()