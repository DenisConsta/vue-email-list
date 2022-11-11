
const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailList: [],
      isLoaded: false,
      limit: 10
    }
  },
  methods: {

    getApi() {
      axios.get(this.apiUrl)
        .then(res => {
          this.emailList.push(res.data.response);
          if(this.emailList.length === this.limit) this.isLoaded = true;
        })
        .catch(err => {
          console.log(err.code);
        })
    },
    fillList(){
      for(let i=0; i<this.limit; i++){
        this.getApi();
      }
    }
  },
  mounted(){
    this.fillList();
  }
}).mount('#app');