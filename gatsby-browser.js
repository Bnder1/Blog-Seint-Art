export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Cette application a été mise à jour. ` +
      `Recharger pour afficher la dernière version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
