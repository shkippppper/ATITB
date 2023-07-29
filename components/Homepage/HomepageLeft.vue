<template lang="pug">
.content-container
    .main-text HI!
    .main-text I'm Akaki.
    .secondrary-text I am a front-end developer with a passion for building user friendly and performant SPAs and JAMstack sites.
    .buttons
        DefaultButton.default-button Play My Games
        DefaultButton.default-button Discover My Projects


</template>

<script>
import DefaultButton from "~/components/UI/DefaultButton"

export default{
    name: 'HomepageLeft',
    components: {
        DefaultButton
    }
}

</script>

<style scoped lang="scss">
.content-container{
    .main-text{
        color: var(--tertiary);
        margin: 20px 0;
        font-weight: 700;
        font-size: 60px;
        line-height: 82px;
    }

    .secondrary-text{
        color: var(--tertiary);
        margin: 20px 0;
        font-weight: 400;
        font-size: 30px;
        line-height: 42px;
    }
    .buttons{
        margin: 50px 0;
        display: flex;
        gap: 30px;
    }
    .default-button{

    }
}


</style>