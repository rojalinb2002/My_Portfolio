import { useState, useEffect } from "react";

import { motion, useReducedMotion } from "framer-motion";

import {
    ArrowUp,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

/* =========================================================
   FOOTER NAVIGATION LINKS
========================================================= */

const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
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
    {
        icon: Mail,
        label: "Email",
        href: "mailto:rojalinb221@gmail.com",
    },
];

/* =========================================================
   FOOTER COMPONENT
========================================================= */

const Footer = () => {
    const [showTop, setShowTop] = useState(false);

    const reduceMotion = useReducedMotion();

    /* =====================================================
       ANIMATION VARIANTS
    ===================================================== */

    const fadeUpVariants = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 24,
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

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: reduceMotion ? 0 : 18,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduceMotion ? 0 : 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    /* =====================================================
       SCROLL DETECTION
    ===================================================== */

    useEffect(() => {
        const onScroll = () => {
            setShowTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", onScroll, {
            passive: true,
        });

        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    return (
        <>
            {/* =================================================
                FOOTER
            ================================================= */}

            <footer
                className="
                    relative
                    border-t
                    border-[var(--color-border)]
                    bg-[var(--color-surface)]/50
                "
            >
                <div
                    className="
                        container
                        grid
                        grid-cols-1
                        gap-8
                        py-10
                        sm:grid-cols-2
                        sm:gap-9
                        sm:py-12
                        lg:grid-cols-3
                        lg:gap-10
                        lg:py-14
                    "
                >
                    {/* =================================================
                        BRAND INFORMATION
                    ================================================= */}

                    <motion.div
                        className="
                            flex
                            flex-col
                            items-start
                        "
                        variants={staggerVariants}
                        initial={reduceMotion ? false : "hidden"}
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                    >
                        {/* Logo */}

                        <motion.a
                            href="#home"
                            variants={fadeUpVariants}
                            className="
                                inline-flex
                                items-center
                                gap-2
                            "
                        >
                            <span
                                className="
                                    grid
                                    h-9
                                    w-9
                                    shrink-0
                                    place-items-center
                                    rounded-lg
                                    bg-[var(--color-brand)]
                                    font-heading
                                    text-sm
                                    font-bold
                                    text-white
                                "
                            >
                                RB
                            </span>

                            <span
                                className="
                                    font-heading
                                    text-lg
                                    font-semibold
                                    text-white
                                "
                            >
                                Rojalin{" "}
                                <span
                                    className="
                                        text-[var(--color-accent)]
                                    "
                                >
                                    Behera
                                </span>
                            </span>
                        </motion.a>

                        {/* Description */}

                        <motion.p
                            variants={fadeUpVariants}
                            className="
                                mt-4
                                max-w-sm
                                text-sm
                                leading-relaxed
                                text-[var(--color-text-muted)]
                            "
                        >
                            Full Stack Developer (MERN) building
                            responsive, scalable and user-focused
                            web applications.
                        </motion.p>

                        {/* Social Links */}

                        <motion.div
                            variants={fadeUpVariants}
                            className="
                                mt-5
                                flex
                                flex-wrap
                                gap-3
                            "
                        >
                            {socials.map(
                                ({
                                    icon: Icon,
                                    label,
                                    href,
                                }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target={
                                            href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        aria-label={label}
                                        whileHover={
                                            reduceMotion
                                                ? {}
                                                : {
                                                    y: -4,
                                                    scale: 1.06,
                                                }
                                        }
                                        whileTap={
                                            reduceMotion
                                                ? {}
                                                : {
                                                    scale: 0.94,
                                                }
                                        }
                                        transition={{
                                            duration: 0.25,
                                        }}
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
                                        "
                                    >
                                        <Icon size={17} />
                                    </motion.a>
                                )
                            )}
                        </motion.div>
                    </motion.div>

                    {/* =================================================
                        QUICK LINKS
                    ================================================= */}

                    <motion.div
                        className="
                            min-w-0
                        "
                        variants={fadeUpVariants}
                        initial={reduceMotion ? false : "hidden"}
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: reduceMotion ? 0 : 0.65,
                            delay: reduceMotion ? 0 : 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <h4
                            className="
                                font-heading
                                text-base
                                font-semibold
                                text-white
                                sm:text-lg
                            "
                        >
                            Quick Links
                        </h4>

                        <motion.ul
                            className="
                                mt-4
                                grid
                                grid-cols-2
                                gap-x-4
                                gap-y-3
                                sm:mt-5
                                sm:gap-x-6
                            "
                            variants={staggerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                        >
                            {links.map((link) => (
                                <motion.li
                                    key={link.name}
                                    variants={itemVariants}
                                >
                                    <a
                                        href={link.href}
                                        className="
                                            inline-flex
                                            text-sm
                                            text-[var(--color-text-muted)]
                                            transition
                                            duration-300
                                            hover:translate-x-1
                                            hover:text-white
                                        "
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* =================================================
                        CONTACT INFORMATION
                    ================================================= */}

                    <motion.div
                        className="
                            min-w-0
                            sm:col-span-2
                            lg:col-span-1
                        "
                        variants={staggerVariants}
                        initial={reduceMotion ? false : "hidden"}
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                    >
                        <motion.h4
                            variants={itemVariants}
                            className="
                                font-heading
                                text-base
                                font-semibold
                                text-white
                                sm:text-lg
                            "
                        >
                            Contact
                        </motion.h4>

                        <motion.ul
                            className="
                                mt-4
                                space-y-3
                                sm:mt-5
                            "
                            variants={staggerVariants}
                        >
                            {/* Email */}

                            <motion.li
                                variants={itemVariants}
                                className="
                                    flex
                                    min-w-0
                                    items-start
                                    gap-3
                                    text-sm
                                    text-[var(--color-text-muted)]
                                "
                            >
                                <Mail
                                    size={17}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-[var(--color-accent)]
                                    "
                                />

                                <a
                                    href="mailto:rojalinb221@gmail.com"
                                    className="
                                        break-all
                                        transition
                                        duration-300
                                        hover:text-white
                                    "
                                >
                                    rojalinb221@gmail.com
                                </a>
                            </motion.li>

                            {/* Phone */}

                            <motion.li
                                variants={itemVariants}
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    text-sm
                                    text-[var(--color-text-muted)]
                                "
                            >
                                <Phone
                                    size={17}
                                    className="
                                        shrink-0
                                        text-[var(--color-accent)]
                                    "
                                />

                                <a
                                    href="tel:+918349649604"
                                    className="
                                        transition
                                        duration-300
                                        hover:text-white
                                    "
                                >
                                    +91-8349649604
                                </a>
                            </motion.li>

                            {/* Location */}

                            <motion.li
                                variants={itemVariants}
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    text-sm
                                    text-[var(--color-text-muted)]
                                "
                            >
                                <MapPin
                                    size={17}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-[var(--color-accent)]
                                    "
                                />

                                <span>
                                    Bhilai, Chhattisgarh
                                </span>
                            </motion.li>
                        </motion.ul>
                    </motion.div>
                </div>

                {/* =================================================
                    BOTTOM BAR
                ================================================= */}

                <div
                    className="
                        border-t
                        border-[var(--color-border)]
                    "
                >
                    <motion.div
                        className="
                            container
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-2
                            py-5
                            text-center
                            sm:flex-row
                            sm:justify-between
                            sm:text-left
                        "
                        variants={fadeUpVariants}
                        initial={reduceMotion ? false : "hidden"}
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                    >
                        <p
                            className="
                                text-xs
                                leading-relaxed
                                text-[var(--color-text-muted)]
                                sm:text-sm
                            "
                        >
                            © {new Date().getFullYear()} Rojalin Behera.
                            All rights reserved.
                        </p>

                        <p
                            className="
                                text-xs
                                text-[var(--color-text-muted)]
                                sm:text-sm
                            "
                        >
                            Built with React &amp; Tailwind CSS
                        </p>
                    </motion.div>
                </div>
            </footer>

            {/* =================================================
                SCROLL TO TOP BUTTON
            ================================================= */}

            <motion.button
                type="button"
                onClick={handleScrollTop}
                aria-label="Scroll to top"
                aria-hidden={!showTop}
                tabIndex={showTop ? 0 : -1}
                initial={false}
                animate={{
                    opacity: showTop ? 1 : 0,
                    y: showTop ? 0 : 16,
                    scale: showTop ? 1 : 0.9,
                }}
                transition={{
                    duration: reduceMotion ? 0 : 0.3,
                    ease: "easeOut",
                }}
                whileHover={
                    reduceMotion
                        ? {}
                        : {
                            y: -4,
                            scale: 1.05,
                        }
                }
                whileTap={
                    reduceMotion
                        ? {}
                        : {
                            scale: 0.92,
                        }
                }
                style={{
                    pointerEvents: showTop ? "auto" : "none",
                }}
                className="
                    fixed
                    bottom-4
                    right-4
                    z-[150]
                    grid
                    h-10
                    w-10
                    place-items-center
                    rounded-full
                    bg-[var(--color-brand)]
                    text-white
                    shadow-[var(--shadow-button)]
                    transition-colors
                    duration-300
                    hover:bg-[var(--color-brand-hover)]
                    sm:bottom-5
                    sm:right-5
                    sm:h-12
                    sm:w-12
                "
            >
                <ArrowUp size={20} />
            </motion.button>
        </>
    );
};

export default Footer;