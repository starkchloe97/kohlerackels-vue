function targetFor(trigger, root) {
  const reference = trigger.getAttribute('data-target') || trigger.getAttribute('href')
  if (!reference) return null

  const id = reference.slice(reference.lastIndexOf('#') + 1)
  return id ? root.querySelector(`#${CSS.escape(id)}`) : null
}

export function handleServicePageInteraction(event) {
  const root = event.currentTarget
  const trigger = event.target.closest('[data-toggle="tab"], [data-toggle="collapse"]')
  if (!trigger || !root.contains(trigger)) return

  const target = targetFor(trigger, root)
  if (!target) return

  event.preventDefault()

  if (trigger.getAttribute('data-toggle') === 'collapse') {
    const expanded = target.classList.toggle('show')
    trigger.classList.toggle('collapsed', !expanded)
    trigger.setAttribute('aria-expanded', String(expanded))
    return
  }

  const tabContent = target.closest('.tab-content')
  if (tabContent) {
    tabContent.querySelectorAll('.tab-pane').forEach((pane) => {
      const active = pane === target
      pane.classList.toggle('active', active)
      pane.classList.toggle('show', active)
    })
  }

  root.querySelectorAll('[data-toggle="tab"]').forEach((tab) => {
    const isActive = targetFor(tab, root) === target
    tab.classList.toggle('active', isActive)
    tab.setAttribute('aria-selected', String(isActive))
  })
}
