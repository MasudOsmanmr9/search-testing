<template>
  <div class="hello">
    <h1>hy this is search page</h1>
    <b-form  @submit.prevent="searchFunc()">
       <b-row>
        <b-col cols='3' >
          <b-form-input v-model="product" placeholder="Product"></b-form-input>
        </b-col>
        <b-col cols='3'>
          <b-form-input v-model="price" placeholder="price"></b-form-input>
        </b-col>
        <b-col cols='3'>
          <b-form-input v-model="qunatity" placeholder="quantity"></b-form-input>
        </b-col>
        <b-col cols='3'>
          <b-button  size="md" type="submit" variant="success" class="social-connect-link-button mb-4">
              Search
          </b-button>
        </b-col>
    </b-row>
    </b-form >
   




  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  props: {
    msg: String
  },
  data(){
    return{
      product:'',
      price:'',
      qunatity:''
    }
  },
  methods:{
    searchFunc(){                        
        let productSearchKey = this.product.trim().replace(/\s+/g, '-')       
        let priceSearchKey = this.price
        let qunatitySearchKey = this.qunatity
        this.$router.push({ path: `/search/${productSearchKey}/${priceSearchKey}/${qunatitySearchKey}` }) 
      }
  },
  created(){
    // this.$route.params.product.replace(/\-+/g, ' ');
    let tmpproduct = this.$route.params.product

    tmpproduct != ''? this.product = tmpproduct.replace(/-+/g, ' ') : this.product = '';
    this.price = this.$route.params.price
    this.qunatity = this.$route.params.qty
    if(this.product != '' && this.price != '' && this.qunatity != ''){
      this.searchFunc();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
