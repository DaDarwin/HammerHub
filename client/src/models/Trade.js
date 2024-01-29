

export class Trade {

    constructor(data) {

        this.trade = data.trade
        this.extraInfo = data.extraInfo

        this.isLicensed = data.isLicensed
        this.archived = data.archived

        this.profileId = data.profileId
        this.profile = data.profile

        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
}