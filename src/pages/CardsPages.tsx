import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface Country {
  name: {
    official: string;
  };
  capital: string;
  flags: {
    png: string;
  };
}

const CardPages = () => {
  const [data, setData] = useState<Country[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Country[]>(
        "https://restcountries.com/v3.1/all"
      );
      setData(response.data);
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="col-md-4 mb-4"
            style={{ cursor: "pointer" }}
          >
            <Link to={`/detailCard/${encodeURIComponent(item.name.official)}`}>
              <div className="card">
                <img
                  src={item.flags.png}
                  className="card-img-top"
                  style={{ height: 300, objectFit: "cover" }}
                  alt={item.name.official}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name.official}</h5>
                  <p className="card-text">Capital: {item.capital}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <nav className="d-flex justify-content-center align-items-center">
        <ul className="pagination d-flex gap-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CardPages;
