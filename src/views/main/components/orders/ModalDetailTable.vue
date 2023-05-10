<template>
    <b-modal ref="modalDetailTable" @hidden="$emit('hidden')" header-bg-variant="primary">
        <template #modal-header>
            <div class="clearfix">
                <div>
                    <span class="text-white"> <feather-icon icon="table" size="20"/> Table # {{dataOrders.table_number}}</span>
                </div>
            </div>
        </template>
        <b-table :fields="visibleFields" :items="dataOrders.order_list">

        </b-table>

        <template #modal-footer>
            <div class="clearfix">
                <b-button variant="outline-success" @click="$emit('hidden')"> Close </b-button>
            </div>
        </template>
    </b-modal>
</template>
<script>
import Fields from "@/views/main/components/fields/order-list.fields"
export default {
    mounted() {
        this.$refs.modalDetailTable.show()
        this.fields[4].visible = false
        Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
    },
    data() {
        return {
            fields: Fields,
        };
    },
    optionscomputed: {
        visibleFields() {
            this.fields.filter((val)=>{
                return val.visible == true ?? val
            })
        },
    
    },
    props: {
        dataOrders: {
            type: Array,
            default() {
                return [any];
            },
        },
    },
}
</script>