<template>
    <div class="item_header">
        <div class="main_header">
            <img src="../assets/image/cnodejs.svg" alt="">
            <p @click="handDialog">关于</p>
        </div>
        <el-dialog title="关于本项目" :visible.sync="dialogVisible" width="30%">
            <p><span>作者：</span><span>溯夜</span></p>
            <p><span>源码：</span><span>github</span></p>
            <p>技术栈：</p>
            <ul>
                <li>Vue</li>
                <li>Vue Router</li>
                <li>ElementUi</li>
                <li>Axios</li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>


    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
        data() {
            return {
                dialogVisible: false
            }
        },
        methods: {
            handDialog() {
                this.dialogVisible = !this.dialogVisible
            }
        }

    }
</script>

<style scoped lang='scss'>
    .item_header {
        width: 100%;
        background-color: #444;

        .main_header {
            width: 1200px;
            margin: 0 auto;
            height: 50px;
            display: flex;
            justify-content: space-between;

            img {
                width: 120px;
                height: 50px;
            }

            p {
                color: #fff;
                line-height: 50px;
                cursor: pointer;
                font-size: 15px;
                font-weight: bold;
            }
        }

    }
</style>


<style  lang='scss'>
.item_header{
    .el-dialog__wrapper {
        font-family: '微软雅黑';

        .el-dialog__header {
            text-align: center;
        }

        .el-dialog__body {
            // padding-top: 20px !important;
            padding:20px 10px;

            p {
                padding-left: 30px;
                line-height: 28px;
            }
            ul{
                padding-left:108px;
                li{
                    line-height:24px;
                }
            }
        }
    }
}
</style>