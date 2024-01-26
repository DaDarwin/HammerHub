export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.phone = data.phone
    this.name = data.name
    this.picture = data.picture
    this.location = data.location
    this.instagram = data.instagram
    this.twitter = data.twitter
    this.facebook = data.facebook
    this.testimonials = data.testimonials
    this.resume = data.resume
    this.userName = data.userName
    this.aboutMe = data.aboutMe
    // TODO add additional properties if needed
  }
}
