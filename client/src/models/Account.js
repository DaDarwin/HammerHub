export class Account {
  constructor(data) {
    this.id = data.id || data._id
    this.email = data.email
    this.phone = data.phone
    this.name = data.name
    this.businessName = data.businessName
    this.picture = data.picture
    this.location = data.location
    this.instagram = data.instagram
    this.twitter = data.twitter
    this.facebook = data.facebook
    this.linkedin = data.linkedin
    this.testimonials = data.testimonials
    this.resume = data.resume
    this.license = data.license
    this.userName = data.userName
    this.aboutMe = data.aboutMe
    this.projects = []

    // TODO add additional properties if needed
  }
}
