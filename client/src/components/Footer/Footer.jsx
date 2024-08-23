import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="amsterdam">Information</h1>
        <hr />
        <ul>
          <li>
            <Link to="/contactUs">
              <button>
                <h5>Contact Us</h5>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/tos">
              <button>
                <h5>Terms Of Services</h5>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/privacy">
              <button>
                <h5>Privacy</h5>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="amsterdam">Company</h1>
        <hr />
        <ul>
          <li>
            <Link to="/aboutUs">
              <button>
                <h5>About Us</h5>
              </button>
            </Link>
          </li>
          <li>
            <button disabled>
              <h5>Motive</h5>
            </button>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              neque nesciunt autem perferendis ut illo sed molestiae possimus
              pariatur cumque quidem nulla quos ea. Sit illum laboriosam eum
              itaque accusantium.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="amsterdam">Members</h1>
        <hr />
        <ul>
          <li>
            <Link to="/ourProfile/lakshit">
              <button>
                <h5>Lakshit Singh</h5>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/ourProfile/rahul">
              <button>
                <h5>Rahul Patel</h5>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/ourProfile/sanyam">
              <button>
                <h5>Sanyam Kumar</h5>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/ourProfile/ayush">
              <button>
                <h5>Ayush Pal</h5>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/ourProfile/aman">
              <button>
                <h5>Aman</h5>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="amsterdam">About Project</h1>
        <hr />
        <ul>
          <li>
            <a href="https://github.com/NucleoFusion/Mobility-Future">
              <button>
                <h5>Github</h5>
              </button>
            </a>
          </li>
          <li>
            <Link to="/stack">
              <button>
                <h5>Stack / Dependencies</h5>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
