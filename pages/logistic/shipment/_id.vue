<template>
  <page-layout :create="false" :loading="loading" title="Shipment Status">
    <template slot="content">
      <div class="grey-card enrollment-page">
        <a-card class="default-border-radius ant-card">
          <a-tabs :tab-position="mode">
            <a-tab-pane :key="1" tab=" Pickup Shipment">
              <pickup v-if="isEmpty(pickupShipment)" :scheduling="entity" />

              <pickup-detail
                v-else
                :scheduling="entity"
                :shipment="pickupShipment"
              />
            </a-tab-pane>
            <a-tab-pane :key="2" tab="Deliver Shipment">
              <delivery
                v-if="isEmpty(deliveryShipment)"
                :shipment="deliveryShipment"
                :scheduling="entity"
              />

              <delivery-detail
                v-else
                :scheduling="entity"
                :shipment="deliveryShipment"
              />
            </a-tab-pane>
          </a-tabs>
        </a-card>
      </div>
    </template>
  </page-layout>
</template>
<script>
import PageLayout from '~/components/layout/PageLayout'
import pickup from '~/components/root/logistic/shipment/pickup'
import delivery from '~/components/root/logistic/shipment/delivery'
import pickupDetail from '~/components/root/logistic/shipment/pickup/Detail'
import deliveryDetail from '~/components/root/logistic/shipment/delivery/Detail'
import withFetch from '~/mixins/with-fetch'
import SchedulingServices from '~/services/API/SchedulingServices'
import { isEmpty } from '~/services/Utilities'
export default {
  components: {
    'page-layout': PageLayout,
    'pickup-detail': pickupDetail,
    'delivery-detail': deliveryDetail,
    delivery,
    pickup,
  },
  mixins: [withFetch],
  data() {
    return {
      loading: false,
      mode: 'left',
      fetchMethod: SchedulingServices.getDetailById,
      schedule: null,
      pickupShipment: null,
      deliveryShipment: null,
    }
  },
  methods: {
    beforeFetch() {
      this.loading = true
    },
    afterFetch() {
      this.schedule = this.entity
      this.markShipmentFlags()
    },
    markShipmentFlags() {
      const schedule = this.schedule

      if (!isEmpty(schedule)) {
        schedule.shipments.forEach((shipment) => {
          if (!isEmpty(shipment.pickupAt)) {
            this.pickupShipment = shipment
          }
          if (!isEmpty(shipment.deliveryAt)) {
            this.deliveryShipment = shipment
          }
        })
      }
    },
  },
}
</script>
