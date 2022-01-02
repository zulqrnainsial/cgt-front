import request from '../request'
import { BASE_API } from '../Constant'

const baseApi = `${BASE_API}/collection`

function get(params = {}) {
  return request({
    url: `${baseApi}`,
    params,
  })
}

function getById(id) {
  return request({
    url: `${baseApi}/${id}`,
  })
}

function create(data) {
  return request({
    url: `${baseApi}`,
    data,
    method: 'POST',
  })
}

function update(id, data) {
  return request({
    url: `${baseApi}/${id}`,
    method: 'Put',
    data,
  })
}

function markScheduleRequest(id, data) {
  return request({
    url: `${baseApi}/${id}`,
    method: 'Patch',
    data,
  })
}

function getEstimation(treatmentAvailabilityId) {
  return request({
    url: `${baseApi}/treatment-availability/${treatmentAvailabilityId}`,
  })
}

function getByTreatment(id, params = {}) {
  return request({
    url: `${baseApi}/treatment/${id}`,
    params,
  })
}

const SchedulingServices = {
  get,
  create,
  getById,
  update,
  getEstimation,
  getByTreatment,
  markScheduleRequest,
}

export default SchedulingServices
