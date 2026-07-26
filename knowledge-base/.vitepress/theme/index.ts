import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h, nextTick } from 'vue'
import './custom.css'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

function scrollToHash(to: string): void {
  const hash = new URL(to, window.location.origin).hash
  if (!hash) return

  try {
    document
      .getElementById(decodeURIComponent(hash.slice(1)))
      ?.scrollIntoView({ block: 'start', behavior: 'instant' })
  } catch {
    // Ignore malformed percent-encoded hashes and leave the page at the top.
  }
}

function queueHashNavigation(to: string): void {
  if (typeof window === 'undefined') return

  const navigate = () => scrollToHash(to)
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(navigate, { timeout: 500 })
  } else {
    window.setTimeout(navigate, 0)
  }
}

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(ThemeSwitcher),
    }),
  enhanceApp(context) {
    context.router.onAfterRouteChange = async (to) => {
      await nextTick()
      queueHashNavigation(to)
    }

    if (typeof window !== 'undefined') {
      queueHashNavigation(window.location.href)
      if (document.readyState !== 'complete') {
        window.addEventListener(
          'load',
          () => queueHashNavigation(window.location.href),
          { once: true },
        )
      }
    }
  },
}

export default theme
