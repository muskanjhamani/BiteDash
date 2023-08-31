import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Cart from "../screens/Cart";
import Modal from "../Modal";
import { useCart} from "../components/ContextReducer";

export default function NavBar() {
  const navigate = useNavigate();
  let data = useCart();
  const [ cartView, setCartView ] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fst-italic fst-bold" to="/">
            Bite Dash
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/myOrder"
                  >
                    Past Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn text-success mx-1" to="/login">
                  Login
                </Link>
                <Link className="btn text-success mx-1" to="/createUser">
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                  <div className="btn text-success mx-2" onClick={() => { setCartView(true) }}>
                  My Cart{" "}
                
                <Badge pill bg="danger">{data.length}</Badge>
                  </div>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  ""
                )}
                <div className="btn text-danger mx-3" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
