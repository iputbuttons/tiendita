import { contentful } from '@/configs/contentful'
import { Category } from './categories.types'

const getAll = async () => {
  const { items } = await contentful.getEntries<Category>({
    content_type: 'category',
  })
  return items.map(({ fields }) => fields.name)
}

export const categories = {
  getAll,
}
