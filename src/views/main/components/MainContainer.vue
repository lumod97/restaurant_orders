<template>
  <b-row>
    <b-col cols="4" class="mb-3" v-for="(order, index) in orders_data" :key="index">
      <b-card class="h-100 table-container" footer-class="mb-0 mt-auto" no-body header-bg-variant="primary">
        <template #header>
          <div class="clearfix">
            <div class="float-start">
              <span class="text-white">
                <feather-icon icon="table" size="20" /> Table #{{
                  order.table_number
                }}
              </span>
            </div>
            <div class="float-end">
              <span class="text-white">
                S/{{ setTotal(order.order_list) }}
              </span>
              <span class=" ms-2 text-white cursor-pointer" v-b-tooltip.hover.right="'See details'" @click="openDetailTable(order)">
                <feather-icon icon="external-link" size="20"/>
              </span>
            </div>
          </div>
        </template>
        <b-table
          :fields="fields"
          responsive
          :items="order.order_list"
          show-empty
          sticky-header
          hover
        >
        </b-table>
        <template #footer>
          <div class="clearfix mb-0 mt-auto">
            <b-button variant="outline-success" class="float-end">
              <span> ATTEND </span>
            </b-button>
          </div>
        </template>
      </b-card>
    </b-col>
    <modal-detail-table v-if="modal_detail_table" :dataOrders="orders_detail" @hidden="closeDetailTable()"/>
  </b-row>
</template>

<script>
import Fields from "@/views/main/components/fields/order-list.fields";
import Data from "@/views/main/components/data/orders.data";
import ModalDetailTable from "@/views/main/components/orders/ModalDetailTable.vue"
export default {
  components: {
    ModalDetailTable
  },
  data() {
    return {
      orders_detail: [],
      orders_data: Data,
      fields: Fields,
      modal_detail_table: false,
    };
  },
  methods: {
    openDetailTable(orders_detail){
      this.orders_detail = orders_detail
      this.modal_detail_table = true
    },
    closeDetailTable(){
      this.orders_detail = []
      this.modal_detail_table = false
    },
    setTotal(foods) {
      let totalPrice = 0;
      const prices = foods.map((val) => {
        return (totalPrice = totalPrice + parseFloat(val.price));
      });
      return totalPrice.toFixed(2);
    },
  },
};
</script>