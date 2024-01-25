import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { picturesService } from "../services/PicturesService.js";

export class PicturesController extends BaseController {
    constructor() {
        super('api/pictures')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createPicture)
    }

    async createPicture(request, response, next) {
        try {
            const pictureData = request.body
            pictureData.creatorId = request.userInfo.id
            const picture = await picturesService.createPicture(pictureData)
            response.send(picture)
        } catch (error) {
            next(error)
        }
    }
}