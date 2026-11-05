import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
    AlertCircle,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

// Formspree endpoint
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const info = [
    {
        icon: Mail,
        label: "Email",
        value: "rojalinb221@gmail.com",
        href: "mailto:rojalinb221@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91-8349649604",
        href: "tel:+918349649604",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Bhilai, Chhattisgarh, India",
        href: "https://www.google.com/maps/search/?api=1&query=Bhilai%2C%20Chhattisgarh%2C%20India",
    },
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socials = [
    {
        icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/rojalinb2002",
    },
    {
        icon: FaLinkedinIn,
        label: "LinkedIn",
        href: "https://linkedin.com/in/rojalin2002",
    },
];

/* =========================================================
   INPUT STYLES
========================================================= */

const inputClass = `
    w-full
    rounded-xl
    border
    border-[var(--color-border)]
    bg-[var(--color-background)]
    px-4
    py-3
    text-sm
    text-white
    placeholder:text-[var(--color-text-muted)]
    outline-none
    transition
    duration-300
    focus:border-[var(--color-brand)]
    focus:ring-2
    focus:ring-[var(--color-brand)]/30
`;

/* =========================================================
   CONTACT COMPONENT
========================================================= */

const Contact = () => {
    const reduceMotion = useReducedMotion();

    /* =====================================================
       ANIMATION VARIANTS
    ===================================================== */

    const revealVariants = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 28,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduceMotion ? 0 : 0.65,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const staggerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.12,
                delayChildren: reduceMotion ? 0 : 0.08,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 22,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    /* =====================================================
       FORM STATE
    ===================================================== */

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("sending");

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus("success");

                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="
                section-spacing
                relative
                isolate
                overflow-hidden
            "
        >
            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <motion.div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-1/2
                    h-[280px]
                    w-[280px]
                    -translate-x-1/2
                    rounded-full
                    bg-[var(--color-brand)]/15
                    blur-[100px]
                    sm:h-[360px]
                    sm:w-[400px]
                    sm:blur-[130px]
                "
                animate={
                    reduceMotion
                        ? {}
                        : {
                            scale: [1, 1.08, 1],
                            opacity: [0.7, 1, 0.7],
                        }
                }
                transition={{
                    duration: 8,
                    repeat: reduceMotion ? 0 : Infinity,
                    ease: "easeInOut",
                }}
            />

            <div
                className="
                    container
                    relative
                "
            >
                {/* =================================================
                    SECTION HEADING
                ================================================= */}

                <motion.div
                    className="
                        mx-auto
                        max-w-2xl
                        text-center
                    "
                    variants={revealVariants}
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.35,
                    }}
                >
                    <span
                        className="
                            inline-block
                            rounded-md
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]
                            px-3
                            py-1
                            text-[10px]
                            font-semibold
                            tracking-widest
                            text-[var(--color-accent)]
                            uppercase
                            sm:text-xs
                        "
                    >
                        Get In Touch
                    </span>

                    <h2
                        className="
                            mt-4
                            font-heading
                            text-2xl
                            font-bold
                            leading-tight
                            text-white
                            sm:mt-5
                            sm:text-3xl
                            md:text-4xl
                        "
                    >
                        Have a project{" "}
                        <span
                            className="
                                hero-name-animation
                                text-[var(--color-brand)]
                            "
                        >
                            in mind?
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-3
                            max-w-xl
                            text-sm
                            leading-relaxed
                            text-[var(--color-text-muted)]
                            sm:mt-4
                            sm:text-base
                        "
                    >
                        I'm always open to discussing new projects
                        and opportunities. Send me a message and
                        I'll get back to you soon.
                    </p>
                </motion.div>

                {/* =================================================
                    CONTACT CONTENT
                ================================================= */}

                <motion.div
                    className="
                        mt-9
                        grid
                        grid-cols-1
                        gap-5
                        sm:mt-11
                        sm:gap-6
                        lg:mt-12
                        lg:grid-cols-5
                        lg:gap-6
                        xl:gap-8
                    "
                    variants={staggerVariants}
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.12,
                    }}
                >
                    {/* =================================================
                        LEFT SIDE - CONTACT INFORMATION
                    ================================================= */}

                    <motion.div
                        className="
                            flex
                            flex-col
                            gap-3
                            sm:gap-4
                            lg:col-span-2
                        "
                        variants={staggerVariants}
                    >
                        {/* Contact Information Cards */}

                        {info.map(
                            ({
                                icon: Icon,
                                label,
                                value,
                                href,
                            }) => {
                                const Wrapper = href ? "a" : "div";

                                return (
                                    <motion.div
                                        key={label}
                                        variants={cardVariants}
                                    >
                                        <Wrapper
                                            {...(href ? { href } : {})}
                                            className="
                                                group
                                                flex
                                                min-w-0
                                                items-center
                                                gap-3
                                                rounded-2xl
                                                border
                                                border-[var(--color-border)]
                                                bg-[var(--color-surface)]
                                                p-4
                                                transition
                                                duration-300
                                                hover:border-[var(--color-brand)]
                                                hover:shadow-[var(--shadow-card-hover)]
                                                sm:gap-4
                                                sm:p-5
                                            "
                                        >
                                            {/* Icon */}

                                            <span
                                                className="
                                                    grid
                                                    h-10
                                                    w-10
                                                    shrink-0
                                                    place-items-center
                                                    rounded-xl
                                                    bg-[var(--color-brand)]/15
                                                    text-[var(--color-brand)]
                                                    transition
                                                    duration-300
                                                    group-hover:bg-[var(--color-brand)]
                                                    group-hover:text-white
                                                    sm:h-12
                                                    sm:w-12
                                                "
                                            >
                                                <Icon
                                                    size={20}
                                                />
                                            </span>

                                            {/* Details */}

                                            <div
                                                className="
                                                    min-w-0
                                                    flex-1
                                                "
                                            >
                                                <p
                                                    className="
                                                        text-xs
                                                        text-[var(--color-text-muted)]
                                                        sm:text-sm
                                                    "
                                                >
                                                    {label}
                                                </p>

                                                <p
                                                    className="
                                                        mt-1
                                                        truncate
                                                        text-sm
                                                        font-medium
                                                        text-white
                                                        sm:text-base
                                                    "
                                                >
                                                    {value}
                                                </p>
                                            </div>
                                        </Wrapper>
                                    </motion.div>
                                );
                            }
                        )}

                        {/* =================================================
                            SOCIAL LINKS
                        ================================================= */}

                        <motion.div
                            variants={cardVariants}
                            className="
                                rounded-2xl
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-surface)]
                                p-4
                                transition
                                duration-300
                                hover:border-[var(--color-brand)]
                                sm:p-5
                            "
                        >
                            <p
                                className="
                                    text-sm
                                    font-medium
                                    text-white
                                "
                            >
                                Follow me
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-[var(--color-text-muted)]
                                "
                            >
                                Connect with me on social platforms.
                            </p>

                            <div
                                className="
                                    mt-4
                                    flex
                                    gap-3
                                "
                            >
                                {socials.map(
                                    ({
                                        icon: Icon,
                                        label,
                                        href,
                                    }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className="
                                                grid
                                                h-10
                                                w-10
                                                place-items-center
                                                rounded-full
                                                border
                                                border-[var(--color-border)]
                                                text-[var(--color-text-muted)]
                                                transition
                                                duration-300
                                                hover:border-[var(--color-brand)]
                                                hover:bg-[var(--color-brand)]
                                                hover:text-white
                                                sm:h-11
                                                sm:w-11
                                            "
                                        >
                                            <Icon size={18} />
                                        </a>
                                    )
                                )}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* =================================================
                        RIGHT SIDE - CONTACT FORM
                    ================================================= */}

                    <motion.form
                        onSubmit={handleSubmit}
                        variants={cardVariants}
                        className="
                            min-w-0
                            rounded-2xl
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]
                            p-4
                            sm:rounded-3xl
                            sm:p-6
                            md:p-7
                            lg:col-span-3
                            lg:p-7
                            xl:p-8
                        "
                    >
                        {/* Form Heading */}

                        <div>
                            <h3
                                className="
                                    font-heading
                                    text-lg
                                    font-semibold
                                    text-white
                                    sm:text-xl
                                "
                            >
                                Send me a message
                            </h3>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    leading-relaxed
                                    text-[var(--color-text-muted)]
                                    sm:text-sm
                                "
                            >
                                Have a question or project idea?
                                I'd love to hear from you.
                            </p>
                        </div>

                        {/* Name & Email */}

                        <div
                            className="
                                mt-5
                                grid
                                grid-cols-1
                                gap-4
                                sm:mt-6
                                sm:grid-cols-2
                                sm:gap-5
                            "
                        >
                            {/* Name Field */}

                            <div
                                className="
                                    min-w-0
                                "
                            >
                                <label
                                    htmlFor="name"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-medium
                                        text-[var(--color-text)]
                                    "
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={inputClass}
                                />
                            </div>

                            {/* Email Field */}

                            <div
                                className="
                                    min-w-0
                                "
                            >
                                <label
                                    htmlFor="email"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-medium
                                        text-[var(--color-text)]
                                    "
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={inputClass}
                                />
                            </div>
                        </div>

                        {/* Message Field */}

                        <div
                            className="
                                mt-4
                                sm:mt-5
                            "
                        >
                            <label
                                htmlFor="message"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-[var(--color-text)]
                                "
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                className={`
                                    ${inputClass}
                                    resize-none
                                `}
                            />
                        </div>

                        {/* Submit Button */}

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="
                                btn-primary
                                mt-5
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                sm:mt-6
                            "
                        >
                            {status === "sending"
                                ? "Sending..."
                                : "Send Message"}

                            <Send size={17} />
                        </button>

                        {/* Success Message */}

                        {status === "success" && (
                            <p
                                role="status"
                                className="
                                    mt-4
                                    flex
                                    items-start
                                    gap-2
                                    text-xs
                                    leading-relaxed
                                    text-emerald-300
                                    sm:text-sm
                                "
                            >
                                <CheckCircle2
                                    size={18}
                                    className="shrink-0"
                                />

                                Message sent! I'll reply soon.
                            </p>
                        )}

                        {/* Error Message */}

                        {status === "error" && (
                            <p
                                role="alert"
                                className="
                                    mt-4
                                    flex
                                    items-start
                                    gap-2
                                    text-xs
                                    leading-relaxed
                                    text-red-400
                                    sm:text-sm
                                "
                            >
                                <AlertCircle
                                    size={18}
                                    className="shrink-0"
                                />

                                Something went wrong. Please email
                                me directly.
                            </p>
                        )}
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;