import type { I18nLocaleStatus } from '#shared/types'

/**
 * Format a locale label for the language selector, appending the completion
 * percentage when the locale is not fully translated.
 */
export function formatLocaleLabel(name: string, localeStatus: I18nLocaleStatus | null): string {
  if (localeStatus && localeStatus.percentComplete < 100) {
    return `${name} (${localeStatus.percentComplete}%)`
  }
  return name
}
