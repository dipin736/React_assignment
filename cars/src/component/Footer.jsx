import React, { useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const totalPages = 10;
  const { page } = useParams();

  useEffect(() => {
    if (page && !isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(parseInt(page));
    } else {
      setCurrentPage(1);
    }
  }, [page, totalPages]);

  const paginationInfo = `${currentPage} from ${totalPages}`;

  // Function to handle previous page navigation on click of button
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/page/${currentPage - 1}`);
    }
  };

  // Function to handle next page navigation on click of button
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      navigate(`/page/${currentPage + 1}`);
    }
  };

  return (
    <div className="mt-4 bg-slate-200 shadow-xl py-3.5 rounded-3xl px-5 flex justify-between w-full">
      <div>{paginationInfo}</div>
      <div className="flex">
        <button
          onClick={goToPreviousPage}
          className="bg-gray-300 px-3 py-1.5 rounded-xl mr-2"
        >
          <AiOutlineArrowLeft className="text-black" />
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Link
            key={index + 1}
            to={`/page/${index + 1}`}
            className={`btn ${
              currentPage === index + 1 ? "text-white bg-gray-600" : "bg-gray-300"
            } px-3 py-1.5 rounded-xl mr-2`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Link>
        ))}
        <button
          onClick={goToNextPage}
          className="bg-gray-300 px-3 py-1.5 rounded-xl"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Footer;
