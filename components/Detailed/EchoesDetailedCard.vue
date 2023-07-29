<template lang="pug">
.echo-card-container
    .echo-card
        .asd 
</template>


<script>
export default{
    name: "EchoesDetailedCard",
    props: {
        data: Object
    }
}

</script>

<style scoped lang="scss">
.echo-card-container{
    max-width: 300px;
    max-height: 400px;
    border: 1px black solid;
    .echo-card{
        width: 100%;
        height: 100%;
        
    }
}
</style>