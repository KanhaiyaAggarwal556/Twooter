import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-right justify-content-right justify-content-lg-end">
            
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <Link to="/login">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
              </Link>
              <Link to="/Signup">
                <button type="button" className="btn btn-light">
                  Sign-up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
