<template>
  <page-layout :loading="loading" title="Organizations">
    <template slot="content">
      <a-table
        :columns="columns"
        :scroll="{ x: true }"
        :data-source="datasource"
      >
        <template slot="action" slot-scope="action">
          <a-button type="link" @click="goto(`/organizations/${action.globalId}`)"
            ><a-icon type="edit"
          /></a-button>

          <!-- <a-button
            type="link"
            @click="goto(`/organizations/${action.id}`)"
            ><a-icon type="edit"
          /></a-button> -->
        </template>
      </a-table>
    </template>
  </page-layout>
</template>
<script>
import OrganizationServicesServices from '~/services/API/OrganizationServices'
// import { success } from '~/services/Helpers/notifications'
import routeHelpers from '~/mixins/route-helpers'

import PageLayout from '~/components/layout/PageLayout'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'Phone',
    key: 'phone',
    dataIndex: 'phone',
  },
  {
    title: 'Address',
    key: 'address',
    dataIndex: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
]
export default {
  components: { 'page-layout': PageLayout },
  mixins: [routeHelpers],
  data() {
    return {
      datasource: [],
      columns,
      loading: true,
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    fetch() {
      OrganizationServicesServices.get()
        .then((response) => {
          this.datasource = response.data
        })
        .finally(() => (this.loading = false))
    },
    // remove(id) {
    //   OrganizationServicesServices.destroy(id).then((response) => {
    //     success(this, { message: response.message })
    //     this.fetch()
    //   })
    // },
  },
}
</script>