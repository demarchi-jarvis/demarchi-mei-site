'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { pushEvent } from '@/lib/dataLayer'
import type { StoryEventPayload, UtmParams } from '@/types/tracking'

export function useUtmTracker(): void {
  const searchParams = useSearchParams()

  useEffect(() => {
    const utmSource = searchParams.get('utm_source')

    if (utmSource !== 'instagram_story') return

    const utms: UtmParams = {
      utm_source: utmSource,
      utm_medium: searchParams.get('utm_medium') ?? undefined,
      utm_campaign: searchParams.get('utm_campaign') ?? undefined,
      utm_content: searchParams.get('utm_content') ?? undefined,
      utm_term: searchParams.get('utm_term') ?? undefined,
    }

    const payload: StoryEventPayload = { event: 'Visitante_Story', ...utms }

    pushEvent(payload)
  }, [searchParams])
}
