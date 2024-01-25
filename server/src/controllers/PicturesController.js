import auth0provider, { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { picturesService } from "../services/PicturesService.js";

export class PicturesController extends BaseController {
    constructor() {
        super('api/pictures')
        this.router
            .use(auth0provider.getAuthorizedUserInfo)
            .post('', this.createPicture)
            .delete('/:pictureId', this.deletePicture)
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

    async deletePicture(request, response, next) {
        try {
            const pictureId = request.params.pictureId
            const userId = request.userInfo.id
            const picture = await picturesService.deletePicture(pictureId, userId)
            response.send(picture)

        } catch (error) {
            next(error)
        }
    }
}