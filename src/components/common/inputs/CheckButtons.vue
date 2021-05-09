<template>
  <dl>
    <dt>{{ data.title }}</dt>
    <dd>
      <check-button :data="data.options" />
    </dd>
  </dl>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CheckButton from "./CheckButton.vue";
import { Filter } from "../../../types";
@Component({
  components: { CheckButton },
})
export default class CheckButtons extends Vue {
  @Prop({ required: true })
  private readonly data!: Filter;
}
</script>

<style scoped>
dl {
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0.5rem 0;
  font-size: 0.875rem;
}

dt {
  width: 60px;
  font-weight: 600;
}
</style>
