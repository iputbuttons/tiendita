import { contentful } from '@/configs/contentful'
import { DTItem, DTItemMutated } from './items.types'

const getAll = async (): Promise<Array<DTItemMutated>> => {
  const { items } = await contentful.getEntries<DTItem>({
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
