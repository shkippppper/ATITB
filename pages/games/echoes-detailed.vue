<template lang="pug">
.asd 
    EchoesDetailedCard(:data="")
    img(:src="cardData.image")
</template>

<script>
import EchoesDetailedCard from "~/components/Detailed/EchoesDetailedCard.vue"
import image from "~/Games/expert_druid.png"

export default {
    components: {
        EchoesDetailedCard
    },
    data() {
        return {
            cardData:{
                image: image,
                name: "Expert Druid",
                dmg: "123"
            }
        }
    },
};
</script>

<style scoped lang="scss"></style>
