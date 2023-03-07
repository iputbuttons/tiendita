import styles from '@/styles/index.module.scss'
import { Card } from '@/components/card/card'
import { Key, useEffect, useState } from 'react'
import Image from 'next/image'
import { Categories } from '@/components/categories/categories'
import { FCCard } from '@/components/card/card.types'
import { services } from '@/services'
import { Avatar, Divider } from '@nextui-org/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Page } from '@/components/page/page'

const Home = ({
  categories,
  initialItems,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [items, setItems] = useState<Array<FCCard>>(initialItems)
  const [selectedCategory, setSelectedCategory] = useState<Key>(
    'Todos los articulos'
  )

  const handleCategory = (category: Key) => setSelectedCategory(category)

  useEffect(() => {
    const filteredItems =
      selectedCategory !== 'Todos los articulos'
        ? initialItems.filter(
            (item: FCCard) => item.category === selectedCategory
          )
        : initialItems
    setItems(filteredItems)
  }, [initialItems, selectedCategory])

  return (
    <Page
      head={{
        description: 'Coco agradece tu compra 🇪🇸🫶🏼',
        openGraph: {
          picture: '',
          link: 'https://tiendita.franncode.com/',
        },
        title: 'Tiendita',
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
          <Categories
            data={categories}
            defaultValue='Todos los articulos'
            onCategory={handleCategory}
            value={selectedCategory}
          />
        </span>
      </header>
      <section className={styles.items}>
        {items.map((item) => (
          <Card {...item} key={item.title} />
        ))}
      </section>
      <Divider />
      <footer className={styles.coco}>
        <Avatar color='primary' size='lg' src='/coco.jpg' />
        <p>Coco agradece tu compra 🇪🇸🫶🏼</p>
      </footer>
    </Page>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [categories, initialItems] = await Promise.all([
    services.categories.getAll(),
    services.items.getAll(),
  ])

  return {
    props: {
      categories,
      initialItems,
    },
  }
}

export default Home
