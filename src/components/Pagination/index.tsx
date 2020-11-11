import React from 'react'
import { Link } from 'gatsby'
import { PaginationProps } from './props'

import * as Styled from './styles'

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  isFirst,
  isLast,
  nextPage,
  numPages,
  prevPage,
}) => {
  return (
    <Styled.PaginationContainer>
      {!isFirst && <Link to={prevPage}>página anterior</Link>}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && <Link to={nextPage}>próxima página</Link>}
    </Styled.PaginationContainer>
  )
}

export default Pagination
