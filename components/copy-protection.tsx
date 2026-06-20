"use client"

import { useEffect } from "react"

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false

  return Boolean(
    target.closest(
      'input, textarea, select, option, [contenteditable="true"], [contenteditable=""], [data-allow-copy="true"]'
    )
  )
}

export function CopyProtection() {
  useEffect(() => {
    const preventIfNeeded = (event: Event) => {
      if (isEditableTarget(event.target)) return
      event.preventDefault()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target)) return

      const key = event.key.toLowerCase()
      const modifierPressed = event.ctrlKey || event.metaKey

      if (!modifierPressed) return

      if (["a", "c", "p", "s", "u", "x"].includes(key)) {
        event.preventDefault()
      }
    }

    document.addEventListener("copy", preventIfNeeded)
    document.addEventListener("cut", preventIfNeeded)
    document.addEventListener("contextmenu", preventIfNeeded)
    document.addEventListener("selectstart", preventIfNeeded)
    document.addEventListener("dragstart", preventIfNeeded)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("copy", preventIfNeeded)
      document.removeEventListener("cut", preventIfNeeded)
      document.removeEventListener("contextmenu", preventIfNeeded)
      document.removeEventListener("selectstart", preventIfNeeded)
      document.removeEventListener("dragstart", preventIfNeeded)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return null
}
