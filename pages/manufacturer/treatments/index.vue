<template>
  <page-layout :create="false" :loading="loading" title="Treatments">
    <template slot="content">
      <a-tabs :animated="false">
        <a-tab-pane key="1" tab="New Requests">
          <new-request />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Pending"> <in-progress /> </a-tab-pane>
        <a-tab-pane key="3" tab="Complete">4</a-tab-pane>
        <a-tab-pane key="4" tab="All"> 4</a-tab-pane>
      </a-tabs>
    </template>
  </page-layout>
</template>
<script>
import PageLayout from '~/components/layout/PageLayout'
import newRequests from '~/components/root/manufacturer/treatments/listing/NewRequest'
import inProgress from '~/components/root/manufacturer/treatments/listing/InProgress'
export default {
  components: {
    'page-layout': PageLayout,
    'new-request': newRequests,
    'in-progress': inProgress,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {},
}
</script>
