<template>
  <div>
    {{title}}
    <el-input @keydown.enter.native="change" :placeholder="success" v-model="input1" class="search">
    </el-input>
  </div>
</template>

<script>
export default {
  props: {
    title:{
        type: String,
        require: true
    },
    success:{
        type:String,
        require:true
    }
  },
  data() {
    return {
      input1: "",
    };
  },
  methods:{
    change(){
        console.log(this.input1);
        this.$emit('change',this.input1)
        this.input1 = ''
    }
  }
};
</script>

<style scoped>
.search {
  height: 30px;
  width: 204px;
}
</style>
