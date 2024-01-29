import { api } from "./AxiosService"
import { Trade } from "../models/Trade"
import { AppState } from "../AppState"

class TradesService {

  async createTrade(tradeData) {
    const response = await api.post('api/trades')
    console.log('creating trade', response.data)
    const newTrade = new Trade(response.data)
    AppState.trades.push(newTrade)
  }

}

export const tradesService = new TradesService()