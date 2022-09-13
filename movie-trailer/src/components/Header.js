import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [searchKey, setSearchKey] = useState("");

  const navigate = useNavigate();

  const searchMovies = (e) => {
    e.preventDefault();
    navigate("/search/" + searchKey);
    setSearchKey("");
  };

  return (
    <header className="header">
      <div className="header-content max-center">
        <Link className="link-to-home" to="/home">
          Movie Trailer App
        </Link>

        <form onSubmit={searchMovies}>
          <input
            value={searchKey}
            type="text"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
