<template>
  <div class="card">

    <el-table 
      :data="projects.slice(0, itemLimit)" 
      class="table table-hover table-striped" 
      header-row-class-name="thead-light">
      <el-table-column 
        label="Name  /  Company" 
        prop="name" 
        sortable>
        <template v-slot="{row}">
          <div class="sh-vflex">
            <div>
              <img 
                :src="row.img" 
                alt="Image placeholder" 
                class="mr-r-20 rounded-circle" 
                width="40px">
            </div>
            <div><a href="/ui/members/view">{{ row.name }}</a> <br> {{ row.company }}</div>
          </div>
        </template>
      </el-table-column>

      <el-table-column 
        label="Plan  /  Price" 
        prop="amount" 
        sortable>
        <template v-slot="{row}">
          <div class="float-left">{{ row.price }}</div> <div class="float-right text-muted">{{ row.amount }}</div>
        </template>
      </el-table-column>

      <el-table-column 
        label="Payment Method" 
        prop="method" 
        sortable>
        <template v-slot="{row}">
          {{ row.method }}
        </template>
      </el-table-column>

      <el-table-column 
        v-if="showModal" 
        label="Status" 
        prop="status">
        <template v-slot="{row}">

          <UnconfirmedModal />

        </template>
      </el-table-column>
      <el-table-column 
        v-else 
        label="Status" 
        prop="status" 
        sortable>
        <template v-slot="{row}">
          {{ row.status }}
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from 'element-ui'
import UnconfirmedModal from '~/components/shack/UnconfirmedModal'

export default {
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    UnconfirmedModal
  },
  props: {
    itemLimit: {
      type: Number,
      default: 9
    },
    showModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modals: {
        classic: false,
        notice: false,
        form: false
      },
      projects: [
        {
          img: '/img/placeholder.jpg',
          name: 'Dami Famuyibo',
          price: 'The Executive',
          amount: '$25 USD',
          company: 'Outside Insight',
          method: 'Credit Card',
          status: 'Connected'
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Vera Chryls',
          price: 'The Startupper',
          amount: '$18 USD',
          company: 'Hux',
          method: '-',
          status: 'Connected'
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Muriel Silktry',
          price: 'Trial Membership',
          amount: '$31 USD',
          company: 'Sky High Co',
          method: 'Credit Card',
          status: 'Connected'
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Micheal Dean',
          price: 'The Executive',
          amount: '$44 USD',
          company: 'Capital Market Inc',
          method: 'Credit Card',
          status: 'Not Connected'
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Peter Parkins',
          price: 'The Marketer',
          amount: '$22 USD',
          company: 'Apex Minions ',
          method: '-',
          status: 'Connected'
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Jeff Bean',
          price: 'Free',
          amount: '$25 USD',
          company: 'Capital Market Inc',
          method: 'Credit Card',
          status: 'Not Connected'
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Peter Mutch',
          price: 'The Executive',
          amount: '$18 USD',
          company: '',
          method: 'Credit Card',
          status: 'Not Connected'
        }
      ],
      currentPage: 1
    }
  }
}
</script>
