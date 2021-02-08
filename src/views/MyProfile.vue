<template>
<div class="div__start">
<img class="img__myProfile" src="https://cdn.igromania.ru/mnt/news/7/6/b/a/7/6/86257/6122e9f65da7ef05_1920xH.jpg" alt="">
<div class="div__name">
<p><strong>Iron Man</strong></p>
<p>Why quarrel if you can be friends</p>
<p class="lastChild__divName">Online</p>
</div>
<button class="edit__button">Edit page</button>


<div class="div__info">
    <div class="friend">
        <img :src="iconFriends" alt="">
        <span>{{numberOfFriends}}</span>
    </div>
    <div class="city">
        <img src="" alt="">
        <span></span>
    </div>
    <div class="subscribers">
        <img src="" alt="">
        <span></span>
    </div>
</div>
</div>
</template>

<script>
export default {
name: "MyProfile",
data() {
    return {
        iconFriends: require('@/assets/friend.png'),
        numberOfFriends: 100495 
    }
}
}
</script>

<style scoped>
.div__start {
    display:flex;
    flex-wrap: wrap;
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
    border: none; 
    outline: none;
    color: #3f8ae5;
    border-radius: 10px;
    font-weight: 600;
}
.div__info {
   
}
</style>