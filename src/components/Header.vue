<template>
	<div>
		<div class="header" id="header">
			<div class="title"><h1>腾讯动漫</h1></div>
			<div class="left">
				<router-link class="search" to="/search"></router-link>
				<a href="#" class="menu" @click="isNavShow"></a>
			</div>

		</div>
		<div class="nav" v-if="navShow">
			<ul class="clearfix">
				<li>
					<router-link to="">
						<div></div>
						<span>首页</span></router-link>
				</li>
				<li>
					<router-link to="">
						<div></div>
						<span>收藏</span></router-link>
				</li>
				<li>
					<router-link to="">
						<div></div>
						<span>历史</span></router-link>
				</li>
				<li>
					<router-link to="">
						<div></div>
						<span>分类</span></router-link>
				</li>
				<li>
					<router-link to="">
						<div></div>
						<span>排行</span></router-link>
				</li>
				<li>
					<router-link to="">
						<div></div>
						<span>反馈</span></router-link>
				</li>
			</ul>
			<a href="#" class="minezone"></a>
		</div>

	</div>
</template>

<script>

export default {
  name: 'Header',
  data: function () {
    return {
      navShow: false
    }
  },
  methods: {
    isNavShow: function () {
      if (this.navShow == false) {
        this.navShow = true
      } else {
        this.navShow = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
	.header {
		height: .425rem;
		background: white;
		padding-top: .1rem;
		box-sizing: border-box;
		h1{
			text-indent: -9999px;
		}
		.title{
			width: 1rem;
			height: .25rem;
			background: url("../assets/index.png") no-repeat -0.01rem -0.64rem;
			background-size: 2.76rem 1.4rem;
		}

	}

	.nav {
		height: 1.7rem;
		z-index: 152;
		background-color: #F5F5EE;
		padding-bottom: 0.75rem;
		border-bottom: 0.025rem solid #ff9a6a;
		text-align: center;
		box-sizing: border-box;
		position: absolute;
		top: .425rem;
		left: 0;
		width: 100%;

		ul {
			display: flex;
			flex-wrap: wrap;
			padding: .1rem 0 .05rem 0;
			li {
				width: 33%;

				div {
					margin: 0 auto;
					width: .375rem;
					height: .375rem;
					background: url("../assets/index.png") no-repeat -1.415rem -1.065rem;
					background-size: 2.96rem 1.4rem;
				}

				&:nth-of-type(1) div {
					background-position: -1.225rem -0.5rem;
				}
				&:nth-of-type(2) div {
					background-position: -1.63rem -0.5rem;
				}
				&:nth-of-type(3) div {
					background-position: -2.0rem -0.5rem;
				}
				&:nth-of-type(4) div {
					background-position: -2.4rem -0.5rem;
				}
				&:nth-of-type(5) div {
					background-position: -0rem -1.03rem;
				}
				&:nth-of-type(6) div {
					background-position: -0.375rem -1.03rem;
				}
			}
		}

		.minezone{
			display: block;
			width: 2.5rem;
			height: .4rem;
			background: url("../assets/index.png") no-repeat 0 0;
			background-size: 2.46rem 1.2rem;
			margin: 0 auto;
		}
	}

	.title {
		float: left;

	}

	.left {
		float: right;
		display: flex;
		justify-content: center;
		align-items: center;
		a{
			margin: 0 .08rem;
		}
	}

	.search {

		background: url("../assets/index.png") no-repeat -1.415rem -1.065rem;
		background-size: 2.9rem 1.38rem;
		width: .23rem;
		height: .23rem;
	}

	.menu {

		background: url("../assets/index.png") no-repeat -1.095rem -1.065rem;
		background-size: 2.96rem 1.38rem;
		width: .23rem;
		height: .23rem;

	}
</style>
