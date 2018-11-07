<template>
	<div id="app">
	  <meheader></meheader>
	  <router-view></router-view>
	</div>
</template>

<script>
	import meheader from '@/components/AboutXY/About'
export default {
  name: 'About',
  data () {
    return {
      
    }
  },
  components: {
    meheader
  }
}
</script>

<style scoped>
	#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-link-active{
  color: #FD8F24;
}
.pd10{
	margin: 0 15%;
}
.ul li{
	padding: 1rem;
	float: left;
	margin-right: 3%;
}
</style>