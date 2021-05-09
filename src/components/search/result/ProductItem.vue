<template>
  <div class="product">
    <a class="image-link" :href="data.productUrl">
      <img :src="data.imageUrl" alt />
    </a>
    <div class="detail">
      <a class="title" :href="data.productUrl">{{ data.title }}</a>
      <strong class="price">
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

<style>
.product {
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ddd;
}

.image-link {
  position: relative;
  display: block;
  overflow: hidden;
  width: 128px;
  height: 128px;
  margin-right: 15px;
}

.image-link img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

.detail {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.detail .title {
  margin-bottom: 5px;
  font-size: 1.125rem;
  line-height: 1.3;
  color: #333;
  text-decoration: none;
}

.detail .price {
  font-weight: 400;
}

.detail .price data {
  font-weight: 600;
}
</style>
