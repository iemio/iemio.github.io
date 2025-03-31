import React from "react";
import "@/styles/contact.css";

import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Projects() {
    return (
        <section className="contact section" id="contact">
            <div className="contact__container grid">
                <div className="contact__data">
                    <h2 className="section__title-2">
                        <span>Contact Me.</span>
                    </h2>

                    <p className="contact__description-1">
                        I will read all emails. Send me any message you want and
                        I&apos;ll get back to you.
                    </p>

                    <p className="contact__description-2">
                        I need your <b>Name</b> and <b>Email Address</b>, but
                        you won&apos;t receive anything other than your reply.
                    </p>

                    <div className="geometric-box"></div>
                </div>

                <div className="contact__mail">
                    <h2 className="contact__title">Send Me A Message</h2>

                    <form action="" className="contact__form" id="contact-form">
                        <div className="contact__group">
                            <div className="contact__box">
                                <input
                                    type="text"
                                    name="user_name"
                                    className="contact__input"
                                    id="name"
                                    required
                                    placeholder="First name"
                                />
                                <label
                                    htmlFor="name"
                                    className="contact__label"
                                >
                                    First Name
                                </label>
                            </div>

                            <div className="contact__box">
                                <input
                                    type="email"
                                    name="user_email"
                                    className="contact__input"
                                    id="email"
                                    required
                                    placeholder="Email Address"
                                />
                                <label
                                    htmlFor="email"
                                    className="contact__label"
                                >
                                    Email Address
                                </label>
                            </div>
                        </div>

                        <div className="contact__box">
                            <input
                                type="email"
                                name="user_subject"
                                className="contact__input"
                                id="subject"
                                required
                                placeholder="Subject"
                            />
                            <label htmlFor="subject" className="contact__label">
                                Subject
                            </label>
                        </div>

                        <div className="contact__box contact__area">
                            <textarea
                                name="user_message"
                                id="message"
                                className="contact__input"
                                required
                                placeholder="Message"
                            ></textarea>
                            <label htmlFor="message" className="contact__label">
                                Message
                            </label>
                        </div>

                        <p
                            className="contact__message"
                            id="contact-message"
                        ></p>

                        <button
                            type="submit"
                            className="contact__button button"
                        >
                            <i className="ri-send-plane-line"></i> Send Message
                        </button>
                    </form>
                </div>

                <div className="contact__social">
                    <img
                        src="assets/img/curved-arrow.svg"
                        alt=""
                        className="contact__social-arrow"
                    />

                    <div className="contact__social-data">
                        <div>
                            <p className="contact__social-description-1">
                                Does not send emails
                            </p>

                            <p className="contact__social-description-2">
                                Write me on my social networks
                            </p>
                        </div>

                        <div className="contact__social-links">
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                className="contact__social-link"
                            >
                                {/* <i className="ri-facebook-circle-line"></i> */}
                                <FaYoutube />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="contact__social-link"
                            >
                                {/* <i className="ri-instagram-line"></i> */}
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                className="contact__social-link"
                            >
                                <FaLinkedinIn />
                                {/* <i className="ri-linkedin-box-line"></i> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
