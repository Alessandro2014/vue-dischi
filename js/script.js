console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
    selecteGenre: 'All',
  },
  computed: {
    orderedAlbums(){
      return this.albums.sort((a, b) => a.year - b.year);
    },
    genreList(){
      const list = [];
      this.albums.forEach(album => {
        if (!list.includes(album.genre)) list.push(album.genre);
      });
      return list;
    },
    filteredAlbums(){
      const albums = this.orderedAlbums;
      if (this.selecteGenre === 'All') return albums;
      return albums.filter((album) => album.genre === this.selecteGenre);
    },
  },
  methods: {},
  created() {
    axios
    .get('https://flynn.boolean.careers/exercises/api/array/music')
    .then((res) => {
      const response = res.data.response;
      this.albums = response;
    });
  },
});