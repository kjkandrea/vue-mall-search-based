<template>
  <div v-if="data.length > 0">
    <check-buttons
      ref="checkButtons"
      v-for="(item, idx) in data"
      :key="idx"
      :data="item"
      v-model="checkedFilter[item.name]"
      @check="bindFilterData"
    />
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  PropSync,
  Watch,
  Ref,
} from "vue-property-decorator";
import CheckButtons from "../../common/inputs/CheckButtons.vue";
import { Filter, RequestFilter } from "../../../types/model";
import { objectMap } from "../../../utils";
import { InstanceFilter } from "../../../types/instance";

@Component({
  components: { CheckButtons },
})
export default class ProductFilter extends Vue {
  @Prop({ required: true })
  private readonly data!: Filter[];
  @PropSync("filter", { required: true })
  private filterSync!: RequestFilter;
  @Ref()
  private readonly checkButtons!: CheckButtons[];

  private checkedFilter: InstanceFilter = {};

  @Watch("data")
  changedData(value: Filter[]): void {
    if (value.length > 0) this.initFilter();
  }

  @Watch("filterSync")
  changedDefaultFilter(val: RequestFilter): void {
    this.checkedFilter = objectMap<string, string[]>(val, (value) =>
      value.split(",")
    );
    this.$nextTick(() => {
      this.checkButtons.forEach((component) => component.initDefaultValue());
    });
  }

  private initFilter() {
    Object.assign(
      this.checkedFilter,
      ...this.data.map(({ name }) => ({ [name]: [] }))
    );
  }

  private bindFilterData() {
    const mappedFilter = objectMap<string[], string>(
      this.checkedFilter,
      (value) => value.toLocaleString()
    );

    Object.keys(mappedFilter).forEach((key) => {
      if (!mappedFilter[key]) delete mappedFilter[key];
    });

    Object.assign(this.filterSync, mappedFilter);
    this.$emit("change:query");
  }
}
</script>

<style scoped>
div {
  margin-top: 5px;
}
</style>
