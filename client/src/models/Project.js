



export class Project {

    constructor(data) {
        this.trade = data.trade
        this.title = data.title
        this.type = data.type
        this.archived = data.archived
        this.coverImg = data.coverImg
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
    }
}