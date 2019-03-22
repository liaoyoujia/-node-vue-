<template>
    <div class="personal">
        <div class="infor_img">
            <img :src="user.avatar_url" alt="">
            <span>{{user.loginname}}</span>
        </div>
        <div class="point">
            <span>积分:</span><span>{{user.score}}</span>
        </div>
        <div class="github point">
            <span>Github:</span>
            <span>{{user.githubUsername}}</span>
        </div>
        <div class="reg_time point">
            <span>注册时间:</span><span> {{$moment(user.create_at, 'YYYY-MM-DD').fromNow()}}</span>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import {
        getUserByName
    } from '../util/api.js'
    export default {
        data() {
            return {
                user: {},
            }
        },
        props: {
            loginname: String
        },
        methods: {
            fetchData() {
                getUserByName(this.loginname).then(res => {
                    if (res.data) {
                        this.user = res.data.data
                        this.$bus.$emit('gainData',res.data.data)
                    }
                })

            }
        },
        mounted() {
            this.fetchData()
        }
    }
</script>

<style scoped lang='scss'>
    .personal {
        margin-top: 80px;
        width: 60%;
        margin: 0 auto;
        padding: 20px 20px 30px;
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
                margin-left: 26px;
            }
        }

        .point {
            display: flex;
            justify-content: flex-start;
            color: #42b983;
            font-weight: 600;

            span {
                margin-right: 8px;
            }
        }
    }
</style>