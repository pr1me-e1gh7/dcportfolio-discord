import React, { useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./backdrop";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/a54b8bf0-9fc8-11ec-bdf8-dd9c99f898ec";

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: '25',
            stiffness: '500',
        },
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
};

const ContactMe = ({ handleClose, text }) => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };
    
    if (submitted) {
        return (
            <Backdrop onClick={handleClose}>
                <motion.div
                onClick={(e) => e.stopPropagation()}
                className='modal'
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
                >
                    <text className="modal-heading">
                        Your Message Was Sent!
                    </text>
                    <text className="modal-text">
                        I'll get back to you asap!
                    </text>

                </motion.div>
            </Backdrop>
        );
    }

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            className='modal'
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
                <text className="modal-heading">
                    Got a Question?
                </text>
                
                <text className="modal-text">
                    Shoot me an Email using the forms below
                </text>
                
                <form
                className="modal-form-section"
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
                >
                    <input 
                    className="modal-form" type="text"
                    placeholder="Name" name="name"
                    required
                    />

                    <input
                    className="modal-form" type="email"
                    placeholder="Email" name="email"
                    required
                    />

                    <textarea
                    className="modal-form" type="text"
                    placeholder="Message" name="message"
                    required
                    />

                    <div className="modal-button-section">

                        <button
                        className="modal-button"
                        type="submit"
                        >
                            Send Email
                        </button>

                        <button
                        className="modal-button"
                        onClick={handleClose}
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </motion.div>
        </Backdrop>
    );
};

export default ContactMe;