import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { TradeSchema } from '../models/Trade.js';
import { ProjectSchema } from '../models/Project.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Trade = mongoose.model('Trade', TradeSchema);

  Projects = mongoose.model('Project', ProjectSchema);
}

export const dbContext = new DbContext()
