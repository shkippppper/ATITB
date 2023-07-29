<template lang="pug">
.project-listing-card-container
    .image
        img(:src="data.image", alt="Project Image")
        .year {{ data.year }}
        .tags
            .tag(v-for="tag in data.tags") {{ tag }}
    .title {{ data.title }}
    .description {{ data.description }}
</template>

<script>
export default {
    props: {
        data: Object,
    },
};
</script>

<style scoped lang="scss">
.project-listing-card-container {
    max-width: 400px;
    max-height: 400px;
    overflow: hidden;
    border: 0.2px var(--primary) solid;
    box-shadow: 0.1px 1px 10px var(--shadow);
    border-radius: 10px;
    width: 100%;
    height: 100%;

    .image {
        position: relative;
        height: 100%;
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            cursor: pointer;
        }
        .tags {
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: row;
            .tag {
                margin: 5px;
                display: block;
                padding: 8px 10px;
                background: var(--primary);
                color: var(--background);
                border-radius: 50px;
                font-size: 12px;
                line-height: 18px;
                font-weight: 600;
                cursor: pointer;
            }
        }
        .year {
            position: absolute;
            background: var(--primary);
            color: var(--background);
            padding: 2px 6px;
            border-radius: 50px;
            top: 0;
            right: 0;
            margin: 5px;
            font-size: 14px;
            line-height: 20px;
            font-weight: 800px;
        }
    }

    .title {
        width: 100%;
        border-top: 0.2px var(--primary) solid;
        border-bottom: 0.2px var(--primary) solid;
        padding: 10px;
        font-size: 18px;
        line-height: 24px;
        font-weight: 600px;
        text-align: center;
        color: var(--primary);
        cursor: pointer;
    }
    .description {
        padding: 10px;

        text-align: center;
        font-size: 12px;
        line-height: 18px;
        color: var(--primary);
    }
}
</style>