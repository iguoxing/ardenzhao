<template>
  <div class="index mobile">
        <header class="navbar cleared top clearfix active">
            <div class="container">
                <div class="bar-item left"><span class="icon-logo left logo">
                        <img src="../../assets/img/logo_name_white.png">
                    </span></div>
            </div>
        </header>

        <div class="mtBack"></div>

        <div class="mtIndexTitle">
            <p class="bigTitle">你的名字是你的个人品牌</p>
            <p class="smallTitle">致力于用技术为个人品牌赋能
            </p>
        </div>

        <div class="footer-aboutUs">
            <router-link to="/about">
                <label class="btn btn-primary btn-radius login tmClickAboutUs">关于我们</label>
            </router-link>
        </div>

        <footer class="footer active">
            <div class="bar-item copy-right">@{{year}} ZhaoGuoxing Inc.晋ICP备2020012780号</div>
        </footer>

    </div>
</template>

<script>
export default {
    // 接受父组件的值
    props: {
      'year': Number
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/mobile/css/style.css";

.mtIndexTitle {
    margin-top: -110px;
}

.mtBack {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-Index: 0;
    border: none;
    opacity: 0.75;
    background: url("../../assets/mobile/img/backImage.jpg") no-repeat 0px 0px;
    background-size: cover;
}
</style>
