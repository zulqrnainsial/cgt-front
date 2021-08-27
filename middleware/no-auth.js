export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.auth.isAuthorize) {
    return redirect('/dashboard')
  }
}
