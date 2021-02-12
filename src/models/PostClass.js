export default class Post {
    constructor(user, description) {
        this.author = user.name + ' ' + user.surName;
        this.authorId = user.id;
        this.photo = user.thumbnail;
        this.date = this.getTime();
        this.time = new Date().getTime();
        this.description = description || null;
        this.comments = [];
        this.likedUsers = [];
    }
    getTime() {
        let date = new Date();
        let time = date.getHours() + ':' + (date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes())
        let day = date.getDate()<10?('0'+date.getDate()):date.getDate();
        let month = date.getMonth()<10?('0'+(date.getMonth()+1)):date.getMonth()+1;
        let year = date.getFullYear();
        return `${time} - ${day}/${month}/${year}`
    }
}