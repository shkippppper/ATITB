<template lang="pug">
.flip-card(@click="flipCard" :class="{ 'is-flipped': isFlipped, 'never-flipped' : isNeverFlipped}")
    .flip-card-inner
        .flip-card-front
            .front(name="front")
                img(:src="data.image" alt="Hero Image")
                .name {{ data.name }}
        .flip-card-back
            .back(name="back")

                .stats
                    div Attack Damage: 
                    div {{ data.attackDmg }}

                .stats
                    div Attack Speed: 
                    div {{ data.attackSpeed }}

                .stats
                    div Movement Speed: 
                    div {{ data.moveSpeed }}

                .stats
                    div Crit Percentage: 
                    div {{ data.critChance }}

                .stats
                    div Crit Damage: 
                    div {{ data.critDmg }}

                .stats
                    div Special Damage: 
                    div {{ data.specialDmg }}

                .stats
                    div Special Cooldown: 
                    div {{ data.specialCd }}

                .stats
                    div Hit Invulnerability: 
                    div {{ data.hitInv }}

                .stats
                    div Dash Cooldown: 
                    div {{ data.dashCd }}

                .stats
                    div Dash Invulnerability: 
                    div {{ data.dashInv }}

                .stats
                    div Starting Hp: 
                    div {{ data.startingHp }}



        
</template>


<script>
export default{
    name: "EchoesDetailedCard",
    props: {
        data: Object
    },
    data() {
        return {
            isFlipped: true,
            isNeverFlipped: true,
        }
    },
    methods: {
        flipCard() {
            this.isFlipped = !this.isFlipped;
            this.isNeverFlipped = false
        }
    },
}

</script>

<style lang="scss" scoped>

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.flip-card {
    perspective: 1000px;
    max-width: 200px;
    max-height: 300px;
    cursor: pointer;
    &.never-flipped {
        animation: scale 2s infinite ease-in-out;
    }
    &.is-flipped .flip-card-inner {
        transform: rotateY(180deg);
    }

    .flip-card-inner {
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;

    }

    .flip-card-back {
        transform: rotateY(180deg);
    }

    .front,
    .back{
        background-color: var(--tertiary);
        color: var(--background);
        border: 1px black solid;
        height: 250px;
        width: 200px;
        padding: 5px;
        .name{
            text-align: center;
            font-weight: 600;
        }
        img{
            display: flex;
            padding: 35px;
            margin: 0 auto;
        }

        .stats{
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            display: flex;
            justify-content: space-between;
        }
    }

    .back{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }
    
}
</style>
