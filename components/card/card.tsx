import { Button } from '@nextui-org/react'
import { FC } from 'react'
import { Wahstapp } from '../icons/whatsapp'
import styles from './card.module.scss'
import { FCCard } from './card.types'

export const Card: FC<FCCard> = ({
  category,
  description,
  image,
  price,
  title,
}) => {
  const { format: currencyFormatter } = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  })

  return (
    <article className={styles.card}>
      <p className={styles.category}>{category}</p>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className={styles.info}>
        <h4>{title}</h4>
        <p>{currencyFormatter(price/390)}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <Button
        auto
        className={styles.whatsapp}
        color='success'
        flat
        icon={<Wahstapp />}
        rounded
      >
        <a
          href={`https://wa.me/5492657392766?text=Hola,%20como%20estas%20Agustina?%20Estoy%20interesado%20en%20"${title}"`}
          target='_blank'
        >
          Me interesa
        </a>
      </Button>
    </article>
  )
}
