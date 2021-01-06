<template>
  <div class="index">
        <header class="navbar cleared top clearfix active">
            <div class="container containerHead">
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
            <div class="bar-item copy-right">@2020 ZhaoGuoxing Inc. 晋ICP备2020012780号</div>
            <!-- <div class="bar-item copy-right"></div> -->
        </footer>

    </div>
</template>

<style scoped>
@import "../../assets/pc/css/style.css";

.mtIndexTitle {
    margin-top: -.93rem;
}

.container{width: 11.6rem;}

.mtBack {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-Index: 0;
    border: none;
    opacity: 0.75;
    background: url("../../assets/pc/img/backImage.jpg") no-repeat 0 0;
    background-size: cover;
}
</style>
