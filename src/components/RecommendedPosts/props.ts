export interface Props {
  next: ContentType
  previous: ContentType
}

export type ContentType = {
  frontmatter: {
    title: string
  }
  fields: {
    slug: string
  }
}
