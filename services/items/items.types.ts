export type DTItemMutated = Omit<DTItem, 'category' | 'image'> & {
  category: string
  image: string
}

export type DTItem = {
  title: string
  description: string
  price: number
  category: Category
  image: Image
}

type Category = {
  metadata: Metadata2
  sys: Sys5
  fields: Fields2
}

type Metadata2 = {
  tags: any[]
}

type Sys5 = {
  space: Space2
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment2
  revision: number
  contentType: ContentType2
  locale: string
}

type Space2 = {
  sys: Sys6
}

type Sys6 = {
  type: string
  linkType: string
  id: string
}

type Environment2 = {
  sys: Sys7
}

type Sys7 = {
  id: string
  type: string
  linkType: string
}

type ContentType2 = {
  sys: Sys8
}

type Sys8 = {
  type: string
  linkType: string
  id: string
}

type Fields2 = {
  name: string
}

type Image = {
  metadata: Metadata3
  sys: Sys9
  fields: Fields3
}

type Metadata3 = {
  tags: any[]
}

type Sys9 = {
  space: Space3
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment3
  revision: number
  locale: string
}

type Space3 = {
  sys: Sys10
}

type Sys10 = {
  type: string
  linkType: string
  id: string
}

type Environment3 = {
  sys: Sys11
}

type Sys11 = {
  id: string
  type: string
  linkType: string
}

type Fields3 = {
  title: string
  description: string
  file: File
}

type File = {
  url: string
  details: Details
  fileName: string
  contentType: string
}

type Details = {
  size: number
  image: Image2
}

type Image2 = {
  width: number
  height: number
}
