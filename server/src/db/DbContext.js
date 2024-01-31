import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

import { ProjectSchema } from '../models/Project.js';
import { PictureSchema } from '../models/Picture.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);


  Projects = mongoose.model('Project', ProjectSchema);
  Pictures = mongoose.model('Picture', PictureSchema);
}

export const dbContext = new DbContext()
