<template>
  <div class="result">
    <ul v-if="data.length > 0">
      <li v-for="(item, idx) in data" :key="idx">
        <product-item :data="item" />
      </li>
    </ul>
    <div v-else class="no-result">
      <p><strong>검색결과</strong>가 없습니다.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Product } from "../../types/model";
import ProductItem from "./result/ProductItem.vue";
@Component({
  components: { ProductItem },
})
export default class SearchResult extends Vue {
  @Prop({ required: true })
  private readonly data!: Product[];
}
</script>

<style scoped>
.no-result {
  padding: 3rem;
  margin-top: 10px;
  border: 1px dashed #ddd;
}

ul li {
  list-style: none;
}
</style>
