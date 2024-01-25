import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { projectsService } from "./ProjectsService.js"

class PicturesService {

    async deletePicture(pictureId, userId) {
        const pictureToDelete = await this.getPictureById(pictureId);

        if (pictureToDelete.creatorId != userId) {
            throw new Forbidden("not yours to delete ma'am");
        }

        await pictureToDelete.deleteOne();
        return `${pictureToDelete} has been deleted`;
    }


    async getPictureById(pictureId) {
        const picture = await dbContext.Pictures.findById(pictureId).populate('creator', 'name picture')

        if (!picture) {
            throw new BadRequest(`Invalid id: ${pictureId}`)
        }
        return picture
    }

    async getPicturesInProject(projectId) {
        const pictures = await dbContext.Pictures.find({ projectId: projectId }).populate('creator', 'name picture')
        return pictures
    }

    async createPicture(pictureData) {
        const project = await projectsService.getProjectById(pictureData.projectId)

        if (project.archived) {
            throw new BadRequest(`${project.title} has been archived, you can not post additional pictures to it`)
        }

        const picture = await dbContext.Pictures.create(pictureData)
        await picture.populate('creator', 'name picture')
        return picture
    }
}

export const picturesService = new PicturesService()