import { Card as NextCard, Button, Text } from '@nextui-org/react'
import { FC } from 'react'
import { Wahstapp } from '../icons/whatsapp'
import styles from './card.module.scss'
import { TCard } from './card.types'

export const Card: FC<TCard> = ({
  category,
  description,
  image,
  price,
  title,
}) => {
  const { format: currencyFormatter } = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  })

  const sellers = [
    {
      name: 'Agustina',
      number: '5492657392766',
    },
    {
      name: 'Francisco',
      number: '5492664626416',
    },
  ]

  return (
    <NextCard className={styles.card}>
      <NextCard.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <p className={styles.tag}>{category}</p>
      </NextCard.Header>
      <NextCard.Body css={{ p: 0 }}>
        <NextCard.Image
          src={image}
          width='100%'
          height='100%'
          objectFit='cover'
          alt={title}
        />
      </NextCard.Body>
      <NextCard.Footer
        isBlurred
        css={{
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
        }}
        className={styles.footer}
      >
        <div className={styles.info}>
          <span className={styles.top}>
            <h4>{title}</h4>
            <p>{currencyFormatter(price)}</p>
          </span>
          <p>{description}</p>
        </div>
        <span className={styles.actions}>
          {sellers.map(({ name, number }) => (
            <Button
              key={number}
              auto
              className={styles.whatsapp}
              color='success'
              flat
              icon={<Wahstapp />}
              rounded
            >
              <a
                href={`https://wa.me/${number}?text=Hola,%20como%20estas%20${name}?%20Estoy%20interesado%20en%20"${title}"`}
                target='_blank'
              >
                {name}
              </a>
            </Button>
          ))}
        </span>
      </NextCard.Footer>
    </NextCard>
  )
}
