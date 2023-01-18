
<template>
    <div class="send-message">
        <v-form
        class="footer-wrap"
        @submit.prevent="onSubmit"
      >
            <div class="tool-box">
                <div class="btn-upload" id="file-uploader"><v-icon icon="md:file_upload"></v-icon>
                    <input class="btn-upload-input" type="file" />
                </div>
                <!-- <label id="filepic" for="fileupload" class="btn-upload"></label>
                <input type="file" onclick="changeDropFalse()" id="fileupload" name="fileupload"> -->
 
            <!-- <div class="switch-toggle-m" style="display: none;">
                <label>
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div> -->
            <v-spacer></v-spacer>
            <v-btn type="submit" prepend-icon="md:logout" class="btn-leave" id="btns_sumit">
                结束
            </v-btn>

        </div>

        <div class="chat-box">
                <input type="text" class="inputbox" label="Label" />
                <v-btn type="submit" icon="md:send" class="btn-send" id="btns_sumit"></v-btn>
        </div>
    </v-form> 
    </div> 
</template>
<script setup lang="ts">
function onSubmit(){
    console.log('send message')
}
</script>
<style lang="scss" scoped>
.send-message{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .footer-wrap{
        border-radius: 15px 15px 0 0;
        height: calc(100% - 5px);
        background-image: linear-gradient(to left, #426796, #6c8cbd);
        padding: 15px;
        .tool-box{
        display: flex;
            .btn-upload{
                padding: 8px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background:#fff;
                color:#a0c3e5;
                input{
                    opacity: 0;
                    position:absolute;
                    top: 0;
                    left: 0;
                }
            }
            .btn-leave{
                padding:8px 20px;
                color: #fff;
                background: linear-gradient(to left, #62aada, #4385bd);
                border-radius: 50px;
            }

        }
        .chat-box{
            display: flex;
            margin-top:8px;

            .inputbox{
                flex-grow:1;
                margin-right:8px;
                padding:8px 20px;
                color: #426796;
                background: #fff;
                border-radius: 50px;
                &:focus{
                    outline: none;
                }
            }
            .btn-send{
                padding: 8px;
                width: 40px;
                height: 40px;
                color: #fff;
                background: #a0c3e5;
                border-radius: 20px;

            }
        }
        }
    }
</style>