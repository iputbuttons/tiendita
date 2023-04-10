export type DTItemMutated = Omit<DTItem, 'category' | 'image'> & {
  category: string
  image: string
}

export type DTItem = {
  buyer: 'cristian' | 'publico'
  category: Category
  description: string
  image: Image
  price: number
  title: string
}

type Category = {
  fields: Fields2
  metadata: Metadata2
  sys: Sys5
}

type Metadata2 = {
  tags: any[]
}

type Sys5 = {
  contentType: ContentType2
  createdAt: string
  environment: Environment2
  id: string
  locale: string
  revision: number
  space: Space2
  type: string
  updatedAt: string
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
