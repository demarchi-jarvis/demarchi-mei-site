'use client'

import type { AnchorHTMLAttributes, MouseEvent, ReactElement } from 'react'
import { pushEvent } from '@/lib/dataLayer'
import type { DataLayerEvent } from '@/types/tracking'

type TrackedOutboundLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  trackEvent: DataLayerEvent
}

export function TrackedOutboundLink({
  trackEvent,
  onClick,
  children,
  ...rest
}: TrackedOutboundLinkProps): ReactElement {
  function handleClick(e: MouseEvent<HTMLAnchorElement>): void {
    pushEvent(trackEvent)
    onClick?.(e)
  }

  return (
    <a {...rest} onClick={handleClick}>
      {children}
    </a>
  )
}
