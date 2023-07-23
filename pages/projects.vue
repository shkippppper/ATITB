<template lang="pug">
.content 
    FilterComponent.filter-component
</template>

<script>
import FilterComponent from "../components/Projects/FilterComponent.vue"

export default {
    name: "ProjectsPage",
    components: {
        FilterComponent,
    }
    
};
</script>

<style scoped lang="scss">
.content{
    background: var(--background);
    width: 100vw;
    height: 100vh;
    .filter-component{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
}

</style>
