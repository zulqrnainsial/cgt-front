export const BASE_URL = process.env.baseUrl
export const BASE_API = process.env.api

export const STATUSES = [
  {
    id: 1,
    name: 'Booked',
    bg_color: '#e8f1ff',
  },
  {
    id: 2,
    name: 'Travelling',
    bg_color: '#80008061',
  },
  {
    id: 3,
    name: 'Arrived',
    bg_color: '#ffa50069',
  },
  {
    id: 4,
    name: 'Accepted',
    bg_color: '#f4fff1',
  },
  {
    id: 5,
    name: 'Entered',
    bg_color: '#f4fff1',
  },
  {
    id: 6,
    name: 'Completed',
    bg_color: '#f8f8f8',
  },
  {
    id: 7,
    name: 'Cancelled',
    bg_color: '#ffdbd0',
  },
]

export const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

export const GENDER = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 2,
    name: 'Female',
  },
]

export const HOSPITAL_ALIAS = 'HOSPITAL'
export const LOGISTIC_ALIAS = 'LOGISTIC'

export const SCHEDULING_STATUSES = {
  new: { id: 1, name: 'New' },
  accepted: { id: 2, name: 'Accepted' },
  rejected: { id: 3, name: 'Rejected' },
  pending: { id: 4, name: 'Pending' },
  completed: { id: 5, name: 'Completed' },
  inProcess: { id: 6, name: 'InProcess' },
}

export const COLLECTION_TYPE = {
  hospital: { id: 1, name: 'Hospital' },
  manufacturer: { id: 2, name: 'Manufacturer' },
  treatment: { id: 3, name: 'Treatment' },
}

export const PICTURE_UPLOAD_EXTENSIONS = [
  '.jpg',
  '.jpeg',
  '.bmp',
  '.gif',
  '.png',
]
export const DOCUMENT_UPLOAD_EXTENSIONS = ['.doc', '.docx', '.pdf']
export const DOCUMENT_EXTENSIONS = [
  ...PICTURE_UPLOAD_EXTENSIONS,
  ...DOCUMENT_UPLOAD_EXTENSIONS,
]
