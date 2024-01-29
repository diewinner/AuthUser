export default function ({  redirect, app, route }) {
  const token = app.$cookies.get('token')
  if (!token && route.fullPath !== '/login') {
    return redirect('/login')
  }
}
