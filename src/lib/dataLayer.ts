'use client'

import { sendGTMEvent } from '@next/third-parties/google'
import type { DataLayerEvent } from '@/types/tracking'

export function pushEvent(payload: DataLayerEvent): void {
  sendGTMEvent(payload)
}
