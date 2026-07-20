import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { DetailPage } from '@/components/sections'
import { touchUpPowderBrows as data } from '@/content/touch-up-powder-brows'

export const metadata: Metadata = { title: `${data.hero.title} — IZZI Beauty`, description: data.hero.text }

export default function Page() {
  return (
    <Shell>
      <DetailPage data={data} />
    </Shell>
  )
}
