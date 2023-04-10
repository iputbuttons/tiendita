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
import { DTItem, DTItemMutated } from '@/services/items/items.types'
import { ParsedUrlQuery } from 'querystring'

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

  const precioFinal = initialItems.reduce(
    (acc: number, curr: DTItemMutated) => {
      return acc + curr.price
    },
    0
  )
  console.log('ARS:', precioFinal)
  console.log('USD:', precioFinal / 390)
  console.log(initialItems)
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

interface IParams extends ParsedUrlQuery {
  buyer: DTItem['buyer']
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { buyer } = context.params as IParams
  const [categories, initialItems] = await Promise.all([
    services.categories.getAll(),
    services.items.getAll(buyer),
  ])

  return {
    props: {
      categories,
      initialItems,
    },
  }
}

export default Home
