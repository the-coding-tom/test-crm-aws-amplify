<template>
  <div class="card">

    <el-table 
      :data="projects.slice(0, itemLimit)" 
      class="table table-hover table-striped table-responsive" 
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
            <div><a href="javascript:void(0)">{{ row.name }}</a> <br> {{ row.company }}</div>
          </div>
        </template>
      </el-table-column>

      <el-table-column 
        label="Member ID" 
        prop="member_id" 
        sortable>
        <template v-slot="{row}">
          <div class="float-left">{{ row.member_id }}</div>
        </template>
      </el-table-column>

      <el-table-column 
        label="Timestamp: Check-in / Check-out" 
        min-width="100px" 
        prop="method" 
        sortable>
        <template v-slot="{row}">
          {{ row.method }}
        </template>
      </el-table-column>

      <el-table-column 
        label="Check" 
        prop="status" 
        sortable>
        <template v-slot="{row}">
          <!-- {{row.status}} -->
          <base-button 
            v-if="row.status" 
            type="success">Check-in</base-button>
          <base-button 
            v-else 
            type="orange">Check-Out</base-button>
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
          member_id: '10671241',
          company: 'Outside Insight',
          method: 'Today, 10:52am  /  —',
          status: false
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Vera Chryls',
          price: 'The Startupper',
          member_id: '10675541',
          company: 'Hux',
          method: '-',
          status: false
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Muriel Silktry',
          price: 'Trial Membership',
          member_id: '10125541',
          company: 'Sky High Co',
          method: 'Today, 10:52am  /  —',
          status: false
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Micheal Dean',
          price: 'The Executive',
          member_id: '10670941',
          company: 'Capital Market Inc',
          method: 'Today, 10:52am  /  —',
          status: true
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Peter Parkins',
          price: 'The Marketer',
          member_id: '10671209',
          company: 'Apex Minions ',
          method: '-',
          status: false
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Jeff Bean',
          price: 'Free',
          member_id: '10675541',
          company: 'Capital Market Inc',
          method: 'Today, 10:52am  /  —',
          status: true
        },

        {
          img: '/img/placeholder.jpg',
          name: 'Peter Mutch',
          price: 'The Executive',
          member_id: '10125541',
          company: '',
          method: 'Today, 10:52am  /  —',
          status: true
        }
      ],
      currentPage: 1
    }
  }
}
</script>
