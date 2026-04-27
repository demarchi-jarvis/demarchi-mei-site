export type DataLayerEvent = {
  event: string
  [key: string]: unknown
}

export type UtmParams = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

export type StoryEventPayload = DataLayerEvent &
  UtmParams & {
    event: 'Visitante_Story'
  }

export type LeadEventPayload = DataLayerEvent & {
  event: 'Lead'
  lead_source: string
}
