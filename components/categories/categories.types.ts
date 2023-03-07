import { Key } from 'react'

export type CTCategories = {
  data: Array<string>
  defaultValue: Key
  onCategory: (key: Key) => void
  value: Key
}
