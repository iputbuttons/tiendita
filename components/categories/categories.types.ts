import { Key } from 'react'

export type TCategories = {
  data: Array<string>
  defaultValue: Key
  onCategory: (key: Key) => void
  value: Key
}
