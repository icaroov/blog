import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Header = styled(motion.header)`
  color: white;
  margin: auto;
  max-width: 70rem;
  padding: 2rem 3rem 0;

  @media (max-width: 800px) {
    padding: 0;
    margin-bottom: 2rem;
  }
`

export const Title = styled(motion.h1)`
  color: ${props => props.theme.colors.primary};
  font-size: 3rem;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`

export const Description = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`

export const Date = styled(motion.p)`
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  font-weight: 100;
  padding: 0rem 1.4rem;

  @media (max-width: 800px) {
    font-size: 0.9rem;
    padding: 1rem 1.4rem;
  }
`

export const MainContent = styled(motion.section)`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 3rem;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: ${props => props.theme.colors.primary};
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
  }
  .gatsby-resp-image-background-image {
    border-radius: 5px;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  pre {
    border-radius: 5px;
    box-shadow: 5px 5px 26px 0px rgba(50, 50, 50, 0.75);
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
    border-radius: 5px;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: ${props => props.theme.colors.primary};
    border-left: 0.3rem solid ${props => props.theme.colors.success};
    padding: 0 1.875rem;
    margin: 3.125rem auto;

    @media (max-width: 800px) {
      padding: 0 1rem;
    }
  }
  hr {
    border: 1px solid ${props => props.theme.colors.border};
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;

    @media (max-width: 800px) {
      font-size: 1.6rem;
    }
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    text-decoration: none;

    color: ${props => props.theme.colors.link};
    border-bottom: 1px solid ${props => props.theme.colors.link};

    transition: opacity 0.3s;

    svg {
      color: ${props => props.theme.colors.primary};
    }

    &:hover {
      border-bottom: 1px dashed ${props => props.theme.colors.link};
    }
  }

  @media (max-width: 800px) {
    padding: 0;
  }
`
export const CommentsWrapper = styled.p`
  display: flex;
  justify-content: center;

  padding: 1rem;

  color: ${props => props.theme.colors.primary};
  cursor: pointer;
`
