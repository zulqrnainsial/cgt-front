<template>
  <div>
    <a-form :form="form" :layout="formLayout" @submit="onSubmit">
      <LookupsTreatmentType @onChange="onTreatmentSelect" />

      <a-skeleton :loading="loading">
        <span v-if="categories">
          <CategoryTabs :categories="categories" />
          <!-- <a-button type="primary" class="w-100 btn-complete-category">Complete screening results for {CATEGORYNAME} group</a-button> -->
          <FormActionButton :disabled="isCreated" class="mt-15" />
        </span>
      </a-skeleton>
    </a-form>
  </div>
</template>
<script>
// import TreatmentServices from '~/services/API/TreatmentServices'
import routeHelpers from '~/mixins/route-helpers'
import nullHelper from '~/mixins/null-helpers'
import notifications from '~/mixins/notifications'
import ScreeningCategoryServices from '~/services/API/ScreeningCategoryServices'
import TreatmentScreeningServices from '~/services/API/TreatmentScreeningServices'
import CategoryTabs from '~/components/treatment/enrollment/screening/Tabs'
export default {
  components: { CategoryTabs },
  mixins: [notifications, routeHelpers, nullHelper],
  props: {
    treatment: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      patientId: null,
      formLayout: 'vertical',
      form: this.$form.createForm(this, {
        name: 'patientEnrollment',
      }),
      loading: false,
      categories: null,
      isCreated: false,
    }
  },
  mounted() {},
  methods: {
    onSubmit(e) {
      this.loading = true
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.create(values)
        } else {
          this.loading = false
        }
        this.loading = false
      })
    },
    onTreatmentSelect(treatmentTypeId) {
      this.loading = true
      ScreeningCategoryServices.getByTreatmentTypeId(treatmentTypeId)
        .then((response) => {
          this.categories = response.data
        })
        .finally(() => (this.loading = false))
        .catch(this.error)
    },
    create(values) {
      TreatmentScreeningServices.create({
        treatmentId: this.treatment.globalId,
        ...values,
      })
        .then((response) => {
          this.success(response.message)
          this.$emit('getTreatment', response.data)
          this.$emit('getNextTab', 4)
          this.isCreated = true
        })
        .catch(this.error)
    },
  },
}
</script>
