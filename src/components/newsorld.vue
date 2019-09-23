<template>
<div id="box">
    <button v-on:click='href'>跳转界面</button>
    <router-view></router-view>
</div>

</template>  
<script>
export default {
    name:"newworld",
    methods:{
        href:function(){
            this.$router.push('./hello')

        }
    }
}
</script>