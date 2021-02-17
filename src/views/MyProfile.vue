<template>
<div class="div__start">
    <img class="img__myProfile" src="https://cdn.igromania.ru/mnt/news/7/6/b/a/7/6/86257/6122e9f65da7ef05_1920xH.jpg" alt="">
    <div class="div__name">
        <p><strong>{{userPersonal.name + ' ' + userPersonal.surName}}</strong></p>
        <p>Why quarrel if you can be friends</p>
        <p class="lastChild__divName">Online</p>
    </div>
    <button class="edit__button">Edit page</button>


    <div class="div__info">
        <div class="friend">
            <img class="div__info__img" :src="iconFriends" alt="">
            <span>{{userPersonal.friends.length}}</span>
        </div>
        <div class="city">
            <img class="div__info__img" :src="iconCity" alt="">
            <span>{{userPersonal.location}} </span>
        </div>
        <div class="subscribers">
            <img class="div__info__img" :src="iconSub" alt="">
            <span>124464345 subscribers</span>
        </div>
        <div class="div__info__details">
            <a href="#">
                <img class="div__info__img" :src="iconDetails" alt="">
                <span>More details</span>
            </a>
        </div>
    </div>
    <div class="album">
        <div class="album__title">
            <p>PHOTOS 
                <span>{{numderOfPhotos}}</span>
            </p>
            <a href="#">Show all</a>
        </div>
        <div class="album__photo">
            <!-- <img :src="imgAlbum1" alt="">
            <img :src="imgAlbum2" alt="">
            <img :src="imgAlbum3" alt="">
            <img :src="imgAlbum4" alt=""> -->
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="write__something">
        <div>
            <img class="write__something__title" src="https://cdn.igromania.ru/mnt/news/7/6/b/a/7/6/86257/6122e9f65da7ef05_1920xH.jpg" alt="">
        </div>
        <input type="text" placeholder="Write something">
        <a href=""> <img :src="iconWrSum" alt=""></a>
    </div>
</div>
</template>

<script>
export default {
name: "MyProfile",
  props: ['userPersonal'],
data() {
    return {
        iconFriends: require('@/assets/user-alt-solid.svg'),
        iconCity: require('@/assets/home-solid.svg'),
        iconSub: require('@/assets/wifi-solid.svg'),
        iconDetails: require('@/assets/info-circle-solid.svg'),
        numderOfPhotos: 31,
        imgAlbum1: require('@/assets/album/1.jpg'),
        iconWrSum: require('@/assets/images-regular.svg')
        // imgAlbum2: require('@/assets/album/2.jpg'),
        // imgAlbum3: require('@/assets/album/3.jpeg'),
        // imgAlbum4: require('@/assets/album/4.jpg')
    }
}
}
</script>

<style scoped>
.div__start {
    display:flex;
    flex-wrap: wrap;
    padding: 10px;
}
.img__myProfile {
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 50%;

    margin-right: 10px;
}
.div__name {
    text-align: left;
}
.div__name p {
    margin: 6px 0;
}
.lastChild__divName {
    margin-top: 4px;
    color: #9094b8;
}
.edit__button {
    width: 100%;
    height: 36px;
    margin-top: 15px;
    margin-bottom: 20px;
    border: none; 
    outline: none;
    color: #3f8ae5;
    border-radius: 10px;
    font-weight: 600;
}
.div__info {
    width: 100%;
    text-align: left;
    border-bottom: 1px solid #ebebec;
}
.div__info div {
    margin-bottom: 10px;
}

.div__info__img {
    width: 17px;
    height: 17px;
    margin-right: 20px;
    
}

.div__info__details span {
    color: #4986cc;
}
.div__info__details a {
    text-decoration: none;
}
 
.album {
    width: 100%;
}

.album__title {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
}

.album__title a{
    display: inline-block;
    text-decoration: none;
    color: #4986cc;
}

.album__title p{
    margin: 0;
    font-weight: 600;
}

.album__title span{
    font-weight: 400;
    color: grey;
}

.album__photo {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    width: 100%;
    border-bottom: 10px solid #e4e6e9;
}

.album__photo div {
    height: 50px;
    width: 24%;
    background-color: green;
    margin-right: 2px;
    border-radius: 5%;
    
}

.write__something {
    width: 100%;
    display: flex;  
    margin: 10px 0;
    border-bottom: 10px solid #e4e6e9;
    padding-bottom: 10px;
}

.write__something__title {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.write__something img {
    width: 30px;
    height: 30px;
}
.write__something input {
    width: 75%;
    margin: 0 10px;
    border-radius: 10px;
    border: none;
    background: #ebedf0;
    padding-left: 10px;
}
</style>