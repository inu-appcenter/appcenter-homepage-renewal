import styled from "styled-components";
import React from "react";



function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div>
        <PageList className="pagination">
          <Pagebutton>
            <IndexButton
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
            >
              이전
            </IndexButton>
          </Pagebutton>
          {pageNumbers.map((pageNumber) => (
            <Pagebutton key={pageNumber}>
              <IndexButton
                onClick={() => onPageChange(pageNumber)}
                className={pageNumber === currentPage ? 'active' : ''}
              >
                {pageNumber}
              </IndexButton>
            </Pagebutton>
          ))}
          <Pagebutton>
            <IndexButton
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
            >
              다음
            </IndexButton>
          </Pagebutton>
        </PageList>
      </div>
    );
  }

  const PageList = styled.ul`
    list-style: none;
    padding: 0;
  `

  const Pagebutton = styled.li`
   float: none;
   display: inline;
  `

  const IndexButton = styled.button`
    border: none;
    border-radius:30px;
    background-color: white;

    transition: 0.1s ease-in;

    &.active {
      color: #D8D8D8;
    }
  `

  export default Pagination;