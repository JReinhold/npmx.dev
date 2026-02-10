import { describe, it, expect } from 'vitest'
import { formatLocaleLabel } from '../../../../app/utils/locale-label'
import type { I18nLocaleStatus } from '#shared/types'

function makeStatus(percentComplete: number): I18nLocaleStatus {
  return {
    lang: 'fr-FR',
    label: 'Français',
    totalKeys: 200,
    completedKeys: Math.round((percentComplete / 100) * 200),
    missingKeys: [],
    percentComplete,
    githubEditUrl: '',
    githubHistoryUrl: '',
  }
}

describe('formatLocaleLabel', () => {
  it('appends percentage when locale is partially translated', () => {
    expect(formatLocaleLabel('Français', makeStatus(85))).toBe('Français (85%)')
  })

  it('appends percentage when locale is 0% translated', () => {
    expect(formatLocaleLabel('العربية', makeStatus(0))).toBe('العربية (0%)')
  })

  it('does not append percentage when locale is 100% complete', () => {
    expect(formatLocaleLabel('English (US)', makeStatus(100))).toBe('English (US)')
  })

  it('returns plain name when locale status is null', () => {
    expect(formatLocaleLabel('English', null)).toBe('English')
  })
})
