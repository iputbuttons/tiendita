export interface Item {
  title: string
  description: string
  price: number
  category: Category
  image: Image
}

interface Category {
  metadata: Metadata2
  sys: Sys5
  fields: Fields2
}

interface Metadata2 {
  tags: any[]
}

interface Sys5 {
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

interface Space2 {
  sys: Sys6
}

interface Sys6 {
  type: string
  linkType: string
  id: string
}

interface Environment2 {
  sys: Sys7
}

interface Sys7 {
  id: string
  type: string
  linkType: string
}

interface ContentType2 {
  sys: Sys8
}

interface Sys8 {
  type: string
  linkType: string
  id: string
}

interface Fields2 {
  name: string
}

interface Image {
  metadata: Metadata3
  sys: Sys9
  fields: Fields3
}

interface Metadata3 {
  tags: any[]
}

interface Sys9 {
  space: Space3
  id: string
  type: string
  createdAt: string
  updatedAt: string
  environment: Environment3
  revision: number
  locale: string
}

interface Space3 {
  sys: Sys10
}

interface Sys10 {
  type: string
  linkType: string
  id: string
}

interface Environment3 {
  sys: Sys11
}

interface Sys11 {
  id: string
  type: string
  linkType: string
}

interface Fields3 {
  title: string
  description: string
  file: File
}

interface File {
  url: string
  details: Details
  fileName: string
  contentType: string
}

interface Details {
  size: number
  image: Image2
}

interface Image2 {
  width: number
  height: number
}
