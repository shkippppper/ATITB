<template lang="pug">
.def-button(@click="clicked")
    .button-container
        slot

</template>

<script>
export default {
  name: "DefaultButton",
  methods:{
    clicked(){
        this.$emit('clickedbtn')
    }
  }
};
</script>

<style scoped lang="scss">
.def-button {
    background-color: var(--shadow);
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    .button-container{
        transition: transform 0.1s linear;  
        padding: 10px 16px;
        font-size: 20px;
        line-height: 30px;
        border-radius: inherit;
        background-color: var(--background);
        transform: translate(-10px, -10px);
        color: var(--primary);

        &:hover{
            transform: translate(-6px, -6px);
            
        }
        
        &:active{
            transform: translate(0, 0);

        }
    }


}
</style>
