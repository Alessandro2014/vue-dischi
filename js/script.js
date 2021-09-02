console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: '',
  },
  methods: {
    converteString(album){
    let stringDate = album.year;
    let num = Number(stringDate);
    console.log(num);
    return num;
    },

    orderedDate() {
      
    }
  },
  created() {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((res) => {
      const response = res.data.response;
      this.albums = response;
    });
  },
});