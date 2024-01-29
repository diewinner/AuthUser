export default function ({ $axios, $cookies,app }, inject) {
  const api = $axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
      Authorization: `Bearer ${app.$cookies.get('token')}`,
    },
  })
  inject('api', api)
}
