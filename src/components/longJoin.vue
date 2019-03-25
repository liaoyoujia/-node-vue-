<template>
    <div class="create"  v-if="data">
        <h4>最近参与的话题</h4>
        <p v-for="(item ,index) in data" :key="index" v-html="item.content"></p>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        data() {
            return {}
        },

        props: ['content'],
        computed: {
            data() {
                if (this.content.recent_topics) {
                    return this.content.recent_topics
                }
                return false
            }
        }
    }
</script>

<style scoped lang='scss'>
    .create {
        padding: 20px 20px 30px;
        margin: 30px 0;
        width: 100%;
        box-sizing: border-box;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

        h4 {
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #eee;
        }

        p {
            font-size: 16px;
            height: 30px;
            line-height: 30px;
            color: #42b983;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

    }
</style>