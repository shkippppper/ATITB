<template lang="pug">
div
    .projects-listing
        ProjectsListingCard.card(v-for="project in projects", :key="project.id" :data="project")
</template>

<script>
import projects from '../../data/projects';
import ProjectsListingCard from './ProjectsListingCard.vue';

export default {
    name: "FilterComponent",
    components: {
        ProjectsListingCard,
    },
    data() {
        return {
            projects,
        };
    },

};
</script>

<style scoped lang="scss">
.projects-listing{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    max-width: 1216px;
    grid-gap: 40px;
}

</style>
  