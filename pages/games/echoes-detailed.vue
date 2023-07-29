<template lang="pug">
.asd 
    EchoesDetailedCard(v-for="hero in heroesData" :data="hero" :key="hero.id")
</template>

<script>
import EchoesDetailedCard from "~/components/Detailed/EchoesDetailedCard.vue"
import gamedata from "../../data/echoes/heroes"

export default {
    components: {
        EchoesDetailedCard
    },
    data(){
        return{
            heroesData: gamedata
        }
    }
    
};
</script>

<style scoped lang="scss"></style>
