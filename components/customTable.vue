<template>
  <div class="table_container">
    <table class="table">
      <thead class="thead_container">
        <th class="t_item_header t_item" v-for="item in theadArr">
            {{ item }}
        </th>
      </thead>
      <tbody class="tbody_container">
      <tr class="tr_container" v-for="unit in paginatedData">
        <td class="t_item_body t_item" v-for="info in unit">
          <div class="t_item_text">
          {{ info }}
          </div>
        </td>
        <slot name='extraBtn' v-bind:unit="unit"></slot>
        <slot name='extraBtnSec' v-bind:unit="unit"></slot>
      </tr>
      </tbody>
    </table>
    <div class="pagination_container" v-if="list.length >= size">
      <BaseButton @click="prevPage" :nameBtn="prevNameBtn" :disabled="pageNumber===0"/>
      <BaseButton @click="nextPage" :nameBtn="nextNameBtn" :disabled="pageNumber >= pageCount - 1"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'customTable',
  components: {},
  props: {
    theadArr: {
      type: Array,
      default: () => [],
    },
    list: {
      type: Array,
      default: () => [],
    },
    size: {
      type: Number,
      required: false,
      default: 5
    },
  },
  data() {
    return {
      prevNameBtn: 'Назад',
      nextNameBtn: 'Вперед',
      pageNumber: 0,
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed: {
    pageCount() {
      let l = this.list.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.list.slice(start, end);
    }
  },
}
</script>

<style scoped>
.table_container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.table {
  border: 1px none rgb(0, 52, 52);
  border-collapse: collapse;
  width: 100%;
}


.thead_container {
  display: flex;
  background: rgb(0, 119, 119);
  height: 50px;
  border: 1px none rgb(0, 52, 52);
  border-bottom-style: solid;
}

.t_item {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px none rgb(0, 52, 52);
  border-right-style: solid;
  width: 25%;
}

.t_item_text {
  padding: 7px;
}

.t_item:last-child {
  border-right-style: none;
}
.tr_container {
  display: flex;
  background: rgb(0, 175, 175);
  border: 1px none rgb(0, 52, 52);
  border-bottom-style: solid;
  min-height: 50px;
}

.tr_container:last-child {
  border: none;
}

.t_item_header {
  color: whitesmoke;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 15px;
  font-weight: 700;
}

.t_item_body {
  color: black;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 15px;
  word-break: break-word;
}

.pagination_container {
  display: flex;
  gap: 25px;
}
</style>
