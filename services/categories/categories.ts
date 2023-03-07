import { contentful } from '@/configs/contentful'
import { DTCategory } from './categories.types'

const getAll = async (): Promise<Array<DTCategory['name']>> => {
  const { items } = await contentful.getEntries<DTCategory>({
    content_type: 'category',
  })
  return items.map(({ fields }) => fields.name)
}

export const categories = {
  getAll,
}
