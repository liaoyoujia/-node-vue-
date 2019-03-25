<template>
    <div class="infor">
        <div class="infor_img">
            <img :src="data.author.avatar_url" alt="" v-if="data">
            <span v-if="data">{{data.author.loginname}}</span>
        </div>
        <div class="point">
            <span>积分:</span><span>&nbsp;{{data.reply_count}}</span>
        </div>
        <div class="github point">
            <span>Github:</span>
            <span v-if="data">&nbsp;{{data.author.loginname}}</span>
        </div>
        <div class="reg_time point">
            <span>注册时间:</span><span v-if="data"> {{$moment(data.create_at, 'YYYY-MM-DD').fromNow()}}</span>
        </div>
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
                return this.content
            }
        }
    }
</script>

<style scoped lang='scss'>
    .infor {
        padding: 20px 20px 30px;
        margin: 30px 0;
        width: 100%;
        box-sizing: border-box;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

        .infor_img {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            img {
                width: 60px;
                height: 60px;
                border-radius: 6px;
            }

            span {
                color: #42b983;
                font-weight: 600;
                margin-left: 24px;
            }

            .name {
                margin-left: 10px;
            }
        }

        .point {
            display: flex;
            justify-content: flex-start;
            color: #42b983;
            font-weight: 600;
            margin-top: 6px;

            span {
                margin-right: 8px;
            }
        }
    }
</style>