import React, { useEffect, useState } from 'react'
import { usePostList, EdgesProps } from '~app/hooks/usePostList'

import Layout from '~app/components/Layout'
import SEO from '~app/components/SEO'
import PostItem from '~app/components/PostItem'

const Home: React.FC = () => {
  const [posts, setPosts] = useState<EdgesProps[]>([])

  const data = usePostList()

  useEffect(() => {
    setPosts(data)
  }, [data])

  const postList = posts.map(
    ({
      node: {
        frontmatter: { background, category, date, description, title },
        timeToRead,
        fields: { slug },
      },
    }) => (
      <PostItem
        key={title}
        slug={slug}
        background={background}
        category={category}
        date={date}
        timeToRead={timeToRead}
        title={title}
        description={description}
      />
    ),
  )

  return (
    <Layout>
      <SEO title="Início" />
      {postList}
    </Layout>
  )
}

export default Home
