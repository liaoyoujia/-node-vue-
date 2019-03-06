<template>
    <div class="item_home">
        <el-tabs v-model="tab" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all">全部</el-tab-pane>
            <el-tab-pane label="精华" name="good">精华</el-tab-pane>
            <el-tab-pane label="分享" name="share">分享</el-tab-pane>
            <el-tab-pane label="问答" name="ask">问答</el-tab-pane>
            <el-tab-pane label="招聘" name="job">招聘</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script type='text/ecmascript-6'>
    import {
        getTopics
    } from '../util/api.js'
import { setTimeout } from 'timers';

    export default {
        data() {
            return {
                page: 1,
                limit: 20,
                tab: "all",
                store: {},
                list: []
            }
        },
        methods: {
            handleClick() {
                if(!this.store[this.tab]){
                   this.limit=20,
                   this.list=[]
                   this.getData()              
                }else{
                   this.limit=this.store[this.tab].limit
                   this.list=this.store[this.tab].data 
                }
            },
            getData() {
                let {page,limit,tab} = this
                getTopics({page,limit,tab}).then((res) => {
                    if (res && res.data) {
                        this.limit = +10
                        let data = res.data
                        this.list = data.data
                        this.store[this.tab] = {
                            limit: this.limit,
                            data: data.data
                        }
                    }
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped lang='scss'>
    .item_home {
        width: 900px;
        margin: 40px auto 0;
        box-sizing: border-box;
        padding: 20px 30px;
        height: 800px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
</style>