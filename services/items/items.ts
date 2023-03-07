import { contentful } from '@/configs/contentful'
import { Item } from './items.types'

const getAll = async () => {
  const { items } = await contentful.getEntries<Item>({
    content_type: 'item',
  })
  return items.map(({ fields }) => ({
    ...fields,
    category: fields.category.fields.name,
    image: `https:${fields.image.fields.file.url}`,
  }))
}

export const items = {
  getAll,
}
