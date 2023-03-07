import { FC } from 'react'
import { Head } from '../head/head'
import { FCPage } from './page.types'
import styles from './page.module.scss'

export const Page: FC<FCPage> = ({ children, head }) => (
  <>
    <Head {...head} />
    <main className={styles.page}>{children}</main>
  </>
)
