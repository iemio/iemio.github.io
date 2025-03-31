"use client"; // Required for App Router

import { FaLinkedinIn, FaGithub, FaCodepen } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import "@/styles/home.css";

export default function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <h1 className="home__name">Keshav</h1>

                <div className="home__perfil">
                    <div className="home__image">
                        <img
                            src="./user.jpeg"
                            alt="image"
                            className="home__img"
                        />
                        <div className="home__shadow"></div>

                        <img src="" alt="" className="home__arrow" />
                        <img src="" alt="" className="home__line" />

                        <div className="geometric-box"></div>
                    </div>

                    <div className="home__social">
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="home__social-link"
                        >
                            {/* <i className="ri-linkedin-box-fill"></i> */}
                            <FaLinkedinIn />
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="home__social-link"
                        >
                            {/* <i className="ri-github-fill"></i> */}
                            <FaGithub />
                        </a>

                        <a
                            href="https://codepen.io"
                            target="_blank"
                            className="home__social-link"
                        >
                            {/* <i className="ri-codepen-fill"></i> */}
                            <FaCodepen />
                        </a>
                    </div>
                </div>

                <div className="home__info">
                    <p className="home__description">
                        <b>Active learner</b>, with knowledge in web
                        development, app development and machine learning. I
                        offer the best projects resulting in quality work.
                    </p>

                    <a href="#about" className="home__scroll">
                        <div className="home__scroll-box">
                            <HiOutlineChevronDown className="scroll-arrow" />
                            {/* <i className="ri-arrow-down-s-line"></i> */}
                        </div>

                        <span className="home__scroll-text">Scroll Down</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
