import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="amsterdam">Information</h1>
        <hr />
        <ul>
          <li>
            <button>
              <h5>Contact Us</h5>
            </button>
          </li>
          <li>
            <button>
              <h5>Terms Of Services</h5>
            </button>
          </li>
          <li>
            <button>
              <h5>Privacy</h5>
            </button>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="amsterdam">Company</h1>
        <hr />
        <ul>
          <li>
            <button>
              <h5>About Us</h5>
            </button>
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
            <button>
              <h5>Lakshit Singh</h5>
            </button>
          </li>
          <li>
            <button>
              <h5>Rahul Patel</h5>
            </button>
          </li>
          <li>
            <button>
              <h5>Sanyam Kumar</h5>
            </button>
          </li>
          <li>
            <button>
              <h5>Ayush Pal</h5>
            </button>
          </li>
          <li>
            <button>
              <h5>Aman</h5>
            </button>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="amsterdam">About Project</h1>
        <hr />
        <ul>
          <li>
            <button>
              <h5>Github</h5>
            </button>
          </li>
          <li>
            <button>
              <h5>Stack / Dependencies</h5>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
