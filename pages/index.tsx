import styles from '@/styles/index.module.scss'
import Image from 'next/image'
import { Avatar, Button, Divider } from '@nextui-org/react'
import { NextPage } from 'next'
import { Page } from '@/components/page/page'
import { DTItem } from '@/services/items/items.types'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { push } = useRouter()

  const handleClick = (buyer: DTItem['buyer']) => push(`/${buyer}`)

  return (
    <Page
      head={{
        description: 'Coco agradece tu compra 🇪🇸🫶🏼',
        openGraph: {
          picture: '',
          link: 'https://tiendita.franncode.com/',
        },
      }}
    >
      <header className={styles.header}>
        <span className={styles.top}>
          <span className={styles.logo}>
            <Image
              alt='Logo'
              className={styles.isotype}
              height={24}
              src='/isotype.svg'
              width={24}
            />
            <h1 className={styles.name}>Tiendita</h1>
          </span>
        </span>
      </header>
      <section className={styles.buyer}>
        <p>Seleccione tipo de comprador:</p>
        <Button onClick={() => handleClick('publico')}>Público</Button>
        <Button onClick={() => handleClick('cristian')}>Cristian</Button>
      </section>
      <Divider />
      <footer className={styles.coco}>
        <Avatar color='primary' size='lg' src='/coco.jpg' />
        <p>Coco agradece tu compra 🇪🇸🫶🏼</p>
      </footer>
    </Page>
  )
}

export default Home
