import React from "react";
import "@/styles/projects.css";

// import { PiGithubLogoBold, PiInfoBold } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";

import { ImGithub, ImInfo } from "react-icons/im";
import Image from "next/image";
export default function Projects() {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title-1">
                <span>Projects.</span>
            </h2>

            <div className="projects__container container grid">
                <article className="projects__card">
                    <div className="projects__image">
                        <img
                            src="./pjt.jpeg"
                            alt="image"
                            className="projects__img"
                        />

                        <a href="#" className="projects__button button">
                            <CiLocationArrow1 />
                            {/* <i className="ri-arrow-right-up-line"></i> */}
                        </a>
                    </div>

                    <div className="projects__content">
                        <h3 className="projects__subtitle">Website</h3>
                        <h2 className="projects__title">Barbershop Website</h2>

                        <p className="projects__description">
                            Project that you carry out in the design and
                            structure of the layout, showing the design at the
                            client&apos;s request.
                        </p>
                    </div>

                    <div className="projects__buttons">
                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="projects__link"
                        >
                            {/* <i className="ri-github-line"></i> */}
                            <ImGithub /> Source Code
                        </a>

                        <a
                            href="https://dribbble.com/"
                            target="_blank"
                            className="projects__link"
                        >
                            {/* <i className="ri-dribbble-line"></i> Info */}
                            <ImInfo /> Info
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}

/*

   <article class="projects__card">
      <div class="projects__image">
        <img src="https://images.unsplash.com/photo-1592417817038-d13fd7342605?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjU5NTV8&ixlib=rb-4.0.3&q=85" alt="image" class="projects__img">

        <a href="#" class="projects__button button">
          <i class="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div class="projects__content">
        <h3 class="projects__subtitle">Website</h3>
        <h2 class="projects__title">Restaurant Website</h2>

        <p class="projects__description">
          Project that you carry out in the design
          and structure of the layout, showing the
          design at the client's request.
        </p>
      </div>

      <div class="projects__buttons">
        <a href="https://github.com/" target="_blank" class="projects__link">
          <i class="ri-github-line"></i> Source Code
        </a>

        <a href="https://dribbble.com/" target="_blank" class="projects__link">
          <i class="ri-dribbble-line"></i> View
        </a>
      </div>
    </article>

    <article class="projects__card">
      <div class="projects__image">
        <img src="https://images.unsplash.com/photo-1491172700640-4f1a131a3670?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjY2ODV8&ixlib=rb-4.0.3&q=85" alt="image" class="projects__img">

        <a href="#" class="projects__button button">
          <i class="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div class="projects__content">
        <h3 class="projects__subtitle">App</h3>
        <h2 class="projects__title">Yoga App</h2>

        <p class="projects__description">
          Project that you carry out in the design
          and structure of the layout, showing the
          design at the client's request.
        </p>
      </div>

      <div class="projects__buttons">
        <a href="https://github.com/" target="_blank" class="projects__link">
          <i class="ri-github-line"></i> Source Code
        </a>

        <a href="https://dribbble.com/" target="_blank" class="projects__link">
          <i class="ri-dribbble-line"></i> View
        </a>
      </div>
    </article>

    <article class="projects__card">
      <div class="projects__image">
        <img src="https://images.unsplash.com/photo-1622431062669-ed38267b6de5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjYzNDJ8&ixlib=rb-4.0.3&q=85" alt="image" class="projects__img">

        <a href="#" class="projects__button button">
          <i class="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div class="projects__content">
        <h3 class="projects__subtitle">App</h3>
        <h2 class="projects__title">Fast Food App</h2>

        <p class="projects__description">
          Project that you carry out in the design
          and structure of the layout, showing the
          design at the client's request.
        </p>
      </div>

      <div class="projects__buttons">
        <a href="https://github.com/" target="_blank" class="projects__link">
          <i class="ri-github-line"></i> Source Code
        </a>

        <a href="https://dribbble.com/" target="_blank" class="projects__link">
          <i class="ri-dribbble-line"></i> View
        </a>
      </div>
    </article>

    <article class="projects__card">
      <div class="projects__image">
        <img src="https://images.unsplash.com/photo-1515560570411-00a0026e6086?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjY2MDJ8&ixlib=rb-4.0.3&q=85" alt="image" class="projects__img">

        <a href="#" class="projects__button button">
          <i class="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div class="projects__content">
        <h3 class="projects__subtitle">Website</h3>
        <h2 class="projects__title">Coffee Delivery Website</h2>

        <p class="projects__description">
          Project that you carry out in the design
          and structure of the layout, showing the
          design at the client's request.
        </p>
      </div>

      <div class="projects__buttons">
        <a href="https://github.com/" target="_blank" class="projects__link">
          <i class="ri-github-line"></i> Source Code
        </a>

        <a href="https://dribbble.com/" target="_blank" class="projects__link">
          <i className="ri-dribbble-line"></i> View
        </a>
      </div>
    </article>
    */

// when click on info open dialog info, when click on whole project card click parallel intercepting route
//
