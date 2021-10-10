import './pagination.css';
import { useState,useEffect } from 'react';

function Pagination({ data, RenderComponent, dataLimit, setStorage}) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = Math.round(data.length/dataLimit) > 0? Math.round(data.length/dataLimit) : 1;
   
    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
      }, [currentPage]);

      useEffect(() => {
        setCurrentPage(1);
      }, [data]);
  
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
  
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        return new Array(pageLimit).fill().map((_, idx) => idx + 1);
    };
  
    return (
        <div>
        {/* show the attractions, 5 attractions per page */}
        <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} props={d} setStorage={setStorage}/>
          ))}
        </div>
    
        {/* show the pagiantion
            it consists of next and previous buttons
            along with page numbers
        */}
        <div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
            prev
          </button>
    
          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}
    
          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pageLimit ? 'disabled' : ''}`}
          >
            next
          </button>
        </div>
      </div>
    );
  }

  export default Pagination;