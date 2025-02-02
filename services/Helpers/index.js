import { BASE_API } from '~/services/Constant/index'

export const isEmpty = (value, depth = 1, level = 0) => {
  if (level === depth) {
    return false
  }
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' &&
      (Object.keys(value).length === 0 ||
        Object.keys(value).every((key) =>
          isEmpty(value[key], depth, level + 1)
        ))) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}

export function success($this, props) {
  return $this.$notification.open({ ...props, class: 'success-notification' })
}

export const filterOption = (input, option) => {
  return (
    option.componentOptions.children[0].text
      .toLowerCase()
      .includes(input.toLowerCase()) >= 0
  )
}

export const errorNotification = ($this, err) => {
  const genricError = err.response.data.errors

  let description = ''
  if (!isEmpty(genricError)) {
    for (const key in genricError) {
      description += `${genricError[key][0]},`
    }
  }

  const genericException = err.response.data
  if (!isEmpty(genericException)) {
    description = genericException.message
  }

  $this.$notification.open({
    message: `Error`,
    description: () => description,
    placement: 'bottomLeft',
    class: 'error-notification',
    duration: 900000,
  })
}

export const notification = ($this, description, message = 'success') => {
  $this.$notification.open({
    message,
    description: () => description,
    placement: 'bottomLeft',
  })
}

export const objectToArray = (objOfObjs) => {
  return Object.entries(objOfObjs).map((e) => e[1])
}

export const isNumber = (number) => isNumeric(number)

export function isNumeric(value) {
  return /^-?\d+$/.test(value)
}

export function isArray(v) {
  return Array.isArray(v)
}

export function preventDefault(e) {
  e.preventDefault()
}

export function getAbsolutePath(url) {
  return `${BASE_API}${url}`
}
