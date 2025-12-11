// Simple IntersectionObserver-based fade-in on scroll
const ANIM_CLASS = 'animate-fade-up'
const TARGET_SELECTOR = '.fade-in-on-scroll'

function animationClassFor(el: Element) {
  const dir = (el as HTMLElement).dataset.fadeDirection || (el as HTMLElement).dataset.fade || ''
  if (dir === 'left') return 'animate-fade-left'
  if (dir === 'right') return 'animate-fade-right'
  if (dir === 'bottom' || dir === 'down' || dir === 'up') return 'animate-fade-up'
  return ANIM_CLASS
}

function initScrollFade() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const observer = new IntersectionObserver(
      (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const delay = el.dataset.fadeDelay
        if (delay) el.style.animationDelay = `${delay}ms`
        const cls = animationClassFor(el)
        el.classList.add(cls)
        obs.unobserve(el)
      })
    },
    {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08,
    }
  )

  document.querySelectorAll(TARGET_SELECTOR).forEach((el) => observer.observe(el))
}

// init on DOMContentLoaded and also if script runs after load
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(initScrollFade, 20)
} else {
  window.addEventListener('DOMContentLoaded', () => initScrollFade())
}

export {};
