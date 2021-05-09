<template>
  <div>
    <a :href="data.productUrl">
      <img :src="data.imageUrl" alt />
    </a>
    <div>
      <a :href="data.productUrl">{{ data.title }}</a>
      <strong>
        <data title="price" :value="data.price">
          {{ data.price }}
        </data>
        원
      </strong>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Product } from "../../../types";

@Component
export default class ProductItem extends Vue {
  @Prop({ required: true })
  private readonly data!: Product;
}
</script>
