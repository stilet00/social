export default class Comment {
    constructor(user, description, postAuthorId, postId) {
        this.author = user.name + ' ' + user.surName;
        this.authorId = user.id;
        this.postId = postId
        this.postAuthor = postAuthorId;
        this.photo = user.thumbnail;
        this.time = new Date().getTime();
        this.description = description || null;
    }

}
