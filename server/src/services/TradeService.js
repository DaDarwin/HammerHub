import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"

class TradeService{
    
    
    // async getTradeProjects(id) {
    //     return await dbContext.Projects.find({tradeId: id})
    // }

    async deleteTrade(id, userId) {
        const trade =  await this.getTrade(id)
        if(userId != trade.profileId){
            throw new Forbidden('Get out of here')
        }
        trade.archived = !trade.archived
        await trade.save()
        return `Trade ${trade.workType} deleted`
    }
    async editTrade(id, payload, userId) {
        const trade = await this.getTrade(id)
        if(userId != trade.profileId){
            throw new Forbidden('Get out of here')
        }
        trade.extraInfo = payload.extraInfo? payload.extraInfo : trade.extraInfo
        trade.isLicensed = payload.isLicensed != undefined? payload.isLicensed : trade.isLicensed

        await trade.save()

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
        await trade.populate('projects')
        return trade
    }
 
}


export const tradeService = new TradeService()