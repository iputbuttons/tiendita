import NextHead from 'next/head'
import { FC } from 'react'
import { FCHead } from './head.types'

export const Head: FC<FCHead> = ({
  description = 'Coco agradece tu compra 🇪🇸🫶🏼',
  title,
}) => (
  <NextHead>
    <title>{title ? `Tiendita | ${title}` : 'Tiendita'}</title>
    <meta name='description' content={description} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='shortcut icon' href='/favicon.png' type='image/png' />
    <meta name='description' content={description} />
    <meta name='image' content='/openGraph.png' />
    <meta itemProp='name' content={title} />
    <meta itemProp='description' content={description} />
    <meta itemProp='image' content='/openGraph.png' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:site' content='@ML_Argentina' />
    <meta name='twitter:creator' content='@ML_Argentina' />
    <meta name='twitter:image:src' content='/openGraph.png' />
    <meta name='og:title' content={title} />
    <meta name='og:description' content={description} />
    <meta name='og:image' content='/openGraph.png' />
    <meta name='og:url' content='https://tiendita.franncode.com/' />
    <meta name='og:site_name' content={title} />
    <meta name='og:locale' content='es_AR' />
    <meta name='og:type' content='article' />
    <meta name='article:section' content='Social Media' />
    <meta name='article:author' content='Mercado Libre' />
    <meta name='article:tag' content='Social Media' />
  </NextHead>
)
