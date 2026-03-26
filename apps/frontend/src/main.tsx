const path = window.location.pathname

let App
if (path === '/classroom') {
  const { default: ClassroomApp } = await import('./App3')
  App = ClassroomApp
} else {
  const { default: DefaultApp } = await import('./App2')
  App = DefaultApp
}