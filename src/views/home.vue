<template>
    <div class="item_home">
        <el-tabs v-model="tab" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all">
                <Content :list="list"></Content>
            </el-tab-pane>
            <el-tab-pane label="精华" name="good">
                <Content :list="list"></Content>
            </el-tab-pane>
            <el-tab-pane label="分享" name="share">
                <Content :list="list"></Content>
            </el-tab-pane>
            <el-tab-pane label="问答" name="ask">
                <Content :list="list"></Content>
            </el-tab-pane>
            <el-tab-pane label="招聘" name="job">
                <Content :list="list"></Content>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script type='text/ecmascript-6'>
    import {
        getTopics
    } from '../util/api.js'
    import Content from '../components/content'

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
                if (!this.store[this.tab]) {
                    this.limit = 20,
                        this.list = []
                    this.getData()
                } else {
                    this.limit = this.store[this.tab].limit
                    this.list = this.store[this.tab].data
                }
            },
            getData() {
                let {
                    page,
                    limit,
                    tab
                } = this
                getTopics({
                    page,
                    limit,
                    tab
                }).then((res) => {
                    if (res && res.data) {
                        this.limit += 10
                        let data = res.data
                        this.list = data.data

                        this.store[this.tab] = {
                            limit: this.limit,
                            data: data.data
                        }
                    }


                })
            },
            scrollMethod() {
                const scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
                const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                const clintHeight = document.documentElement.clientHeight;
                if (scrollTop + clintHeight >= scrollHeight) {
                    this.getData()
                }
            }

        },
        components: {
            Content
        },
        created() {
            this.getData(),
                window.addEventListener('scroll', this.scrollMethod)
        },
        destroyed() {
            window.removeEventListener("scroll", this.scrollMethod);
        },
    }
</script>

<style scoped lang='scss'>
    .item_home {
        width: 900px;
        margin: 40px auto 0;
        box-sizing: border-box;
        padding: 20px 30px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
</style>