import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "xxx", // replace with your EmailJS service ID
                "xxx", // replace with your EmailJS template ID
                form.current,
                "xxx" // replace with your EmailJS user ID
            )
            .then(
                (result) => {
                    console.log("Message sent successfully!", result.text);
                    window.alert("Your message has been sent successfully!");
                    e.target.reset(); 
                },
                (error) => {
                    console.error("Error sending message:", error.text);
                    window.alert("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center px-4"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
        >
            <div className="container bg-zinc-800 text-white p-8 rounded-lg shadow-lg max-w-lg">
                <h2 className="text-3xl font-semibold mb-6 text-center">Get in touch</h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                        <label className="block text-sm mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            required
                            className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 text-white rounded focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            required
                            className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 text-white rounded focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            className="w-full px-4 py-2 bg-zinc-700 border border-zinc-600 text-white rounded focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors"
                    >
                        Send Message
                    </button>
                </form>
                <p className="text-center my-4">Email: <a href="mailto:sharath.shashidhara@gmail.com" className="text-blue-400">sharath.shashidhara@gmail.com </a><a href="mailto:pes1202100773@pesu.pes.edu" className="text-blue-400">pes1202100773@pesu.pes.edu</a></p>
                
                {/* Social Media Links */}
                <div className="flex justify-center space-x-4 mb-6">
                    <a href="https://github.com/Sharath-44" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 text-2xl">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/sharath-m-s-38317b220/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/sharxth4/profilecard/?igsh=dHgxaDR2cjF1eTEz" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-2xl">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
