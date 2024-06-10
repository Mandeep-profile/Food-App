import React from "react";
import "./Page.scss";

const Page = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="page-div">
      <button
        className={currentPage === 1 ? 'disabled-btn' : 'page-container'} 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "non-page-container" : "page-container"}
        >
          {number}
        </button>
      ))}
      <button
        className={currentPage === pageNumbers.length ? 'disabled-btn' : 'page-container'} 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  );
};

export default Page;
