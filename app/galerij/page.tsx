import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { CtaBand, Gallery, PageHero } from '@/components/sections'
import { galerij } from '@/content/galerij'

export const metadata: Metadata = {
  title: 'Galerij — IZZI Beauty',
  description: galerij.hero.text,
}

export default function GalerijPage() {
  return (
    <Shell>
      <PageHero {...galerij.hero} />
      <section className="section">
        <div className="container">
          {galerij.intro && (
            <p className="lead" style={{ maxWidth: '44rem', marginBottom: 44 }}>{galerij.intro}</p>
          )}
          <Gallery images={galerij.images} />
        </div>
      </section>
      <CtaBand cta={galerij.cta} />
    </Shell>
  )
}
