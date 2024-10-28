export const productMixin = {
  data() {
    return {
      products: ["Monitör", "Klavye", "Masa", "Kitap", "Şişe", "Hard disk"],
      searchText: ""
    }
  },
  computed: {
    filtered() {
      return this.products.filter((item) => {
        return item.match(this.searchText)
      })
    }
  },
  created() {
    console.log("mixin created")
  },
}