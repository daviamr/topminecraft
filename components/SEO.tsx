// lib/metadata.ts
import type { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
}

export function generateMetadata({ title, description, image, url }: SEOProps): Metadata {
  return {
    title, description,
    openGraph: {
      title,
      description,
      ...(image && { images: [image] }),
      ...(url && { url })
    },
    viewport: {
      width: 'device-width',
      initialScale: 1
    },
    metadataBase: new URL('https://minecraftservidores.com'),
    alternates: {
      canonical: url
    }
  }
}