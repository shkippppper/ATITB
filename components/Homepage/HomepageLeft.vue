<template lang="pug">
.content-container
    .main-text HI!
    .main-text I'm Akaki.
    .secondrady-text I take immense pride in crafting highly engaging, intuitive, and performance-optimized Single Page Applications (SPAs) and JAMstack websites. In this rapidly evolving digital landscape, I believe in keeping pace with the latest trends and continuously expanding my skill set.
    DefaultButton(@clickedbtn="changePage") asd

</template>

<script>
import DefaultButton from "~/components/UI/DefaultButton"

export default{
    name: 'HomepageLeft',
    components: {
        DefaultButton
    },
    methods: {
        changePage(){
            this.$router.push({ name: 'projects' });
        }
    }
}

</script>

<style scoped lang="scss">
.content-container{
    .main-text{
        color: var(--tertiary);
        font-weight: 600;
        font-size: 60px;
        line-height: 72px;
    }
}


</style>