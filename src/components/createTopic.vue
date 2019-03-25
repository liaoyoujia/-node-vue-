<template>
    <div class="topic">
        <ul>
            <li>最近参与的话题</li>
            <li v-for="(item,index) in topic" :key="index" >
                <router-link :to="'/user/'+item.author.loginname"><img :src="item.author.avatar_url" alt=""></router-link>
                 <router-link :to="'/topic/'+item.id"><span class="content">{{item.title}}</span></router-link>
                <span class="time">{{$moment(item.last_reply_at, 'YYYY-MM-DD').fromNow()}}</span>
            </li>
        </ul>


    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        data() {
            return {
                topic:[]
            }
        },
        created() {
            this.$bus.$on('gainData', (data) => {
                this.topic = data.recent_replies
                console.log(data,3213123);
                
               
            })
        }
    }
</script>

<style scoped lang='scss'>
 a {
        display: block;
    }

    .topic {
        width: 60%;
        margin: 20px auto 20px;
        padding: 20px 20px 60px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

        ul {
            list-style: none;

            li:first-child {
                font-weight: 600;
            }

            li {
                display: flex;
                justify-content: flex-start;
                border-bottom: 1px solid #ccc;
                align-items: center;
                height: 70px;
                line-height: 70px;

                img {
                    width: 50px;
                    height: 50px;
                    display: block;
                    border-radius: 6px;
                }

                span.content {
                    color: #42b983;
                    font-weight: 600;
                    width: 85%;
                    margin-left: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                span.time {
                    float: right;
                }


            }
        }
    }
</style>