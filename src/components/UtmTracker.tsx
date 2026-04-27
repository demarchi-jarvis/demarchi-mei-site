'use client'

import { Suspense, type ReactElement } from 'react'
import { useUtmTracker } from '@/hooks/useUtmTracker'

function UtmTrackerInner(): null {
  useUtmTracker()
  return null
}

export function UtmTracker(): ReactElement {
  return (
    <Suspense fallback={null}>
      <UtmTrackerInner />
    </Suspense>
  )
}
