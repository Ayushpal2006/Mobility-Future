import React from "react";
import styles from "./PostPage.module.css";
import $ from "jquery";

export default function PostPage() {
  function popUp() {
    $(`#bgDiv`).css("z-index", "2");
    $(`#popUpDiv`).css({ transform: "translateY(-83.5vh)", "z-index": "3" });
    $("#popUpButton").hide();
    $("#popDownButton").show();
  }

  function popDown() {
    $(`#bgDiv`).css("z-index", "-100");
    $(`#popUpDiv`).css({ transform: "translateY(0)", "z-index": "1" });
    $("#popDownButton").hide();
    $("#popUpButton").show();
  }

  return (
    <div className={styles.wholePage}>
      <div className={styles.container}>
        <h1 className="amsterdam">Create a Job</h1>
        <div className={`${styles.detContainer} moderustic`}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil culpa
            dolorem voluptates odio. Ipsa in, voluptates placeat necessitatibus
            laudantium explicabo, odit quas vero accusamus omnis cupiditate et
            impedit minus pariatur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nobis, quasi corrupti. Pariatur doloribus
            accusamus earum voluptatum reprehenderit cum molestias hic? Esse id
            iste fuga cupiditate sit ab praesentium magnam odio? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Totam accusantium neque
            excepturi debitis nostrum delectus reprehenderit, doloribus beatae?
            Vero, est laboriosam. Aliquam, exercitationem reiciendis? Aut veniam
            aspernatur alias numquam placeat. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dolor facilis illum optio recusandae
            amet. Sequi suscipit laborum at distinctio corrupti cupiditate
            delectus voluptates nostrum, repudiandae fugit eveniet saepe optio
            possimus? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Alias ex sapiente amet. Ullam sit voluptatum consequuntur velit,
            nisi aspernatur alias fugit voluptate, modi iusto nemo facere eos?
            Similique, ratione quod. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil culpa dolorem voluptates odio. Ipsa in,
            voluptates placeat necessitatibus laudantium explicabo, odit quas
            vero accusamus omnis cupiditate et impedit minus pariatur? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nobis, quasi
            corrupti. Pariatur doloribus accusamus earum voluptatum
            reprehenderit cum molestias hic? Esse id iste fuga cupiditate sit ab
            praesentium magnam odio? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Totam accusantium neque excepturi debitis nostrum
            delectus reprehenderit, doloribus beatae? Vero, est laboriosam.
            Aliquam, exercitationem reiciendis? Aut veniam aspernatur alias
            numquam placeat. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolor facilis illum optio recusandae amet. Sequi suscipit
            laborum at distinctio corrupti cupiditate delectus voluptates
            nostrum, repudiandae fugit eveniet saepe optio possimus? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Alias ex sapiente
            amet. Ullam sit voluptatum consequuntur velit, nisi aspernatur alias
            fugit voluptate, modi iusto nemo facere eos? Similique, ratione
            quod.
          </p>
          <div>
            <h3 className="amsterdam">Points to remember:-</h3>
            <ol>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti facilis incidunt enim aliquid odit iusto tenetur.
                Corporis dignissimos, sequi iure iusto maiores quam vel velit
                unde ipsa inventore fugit aspernatur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora, mollitia cum provident numquam amet veniam aliquam
                voluptate eligendi reiciendis libero necessitatibus est
                repudiandae quis perspiciatis, non aliquid assumenda sequi
                expedita?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                eaque quam, corrupti consequuntur earum quidem non doloribus
                nulla nam consequatur quia eum sequi iste error suscipit,
                voluptas qui quos ipsum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quidem nesciunt, dignissimos iste, nulla tenetur praesentium
                veniam eos earum hic est harum optio consectetur alias aliquam
                eius quibusdam animi aspernatur?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo id
                tempore placeat nemo exercitationem, facere vitae dolorum
                repellat et nulla ut suscipit non repudiandae, magni dignissimos
                minus saepe nesciunt ducimus?
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.popUpDiv} id="popUpDiv">
        <button className={styles.popUpButton} onClick={popUp} id="popUpBut">
          Create a Job <img />
        </button>
        <button
          className={styles.popUpButton}
          style={{ display: "none" }}
          onClick={popDown}
          id="popDownBut"
        >
          Collapse <img />
        </button>
      </div>
      <div className={styles.bgDiv} id="bgDiv"></div>
    </div>
  );
}
