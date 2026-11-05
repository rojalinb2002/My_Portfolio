import {
    Briefcase,
    Rocket,
    GraduationCap,
    MapPin,
    Mail,
    Phone,
    ArrowRight,
    Code2,
    Sparkles,
} from "lucide-react";

import {
    motion,
    useReducedMotion,
} from "framer-motion";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.15,
        },
    },
};

const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeRightVariants = {
    hidden: {
        opacity: 0,
        x: 35,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/* =========================================================
   CONTENT
========================================================= */

const cards = [
    {
        icon: Briefcase,
        value: "1.5+",
        label: "Years Experience",
    },
    {
        icon: Rocket,
        value: "3+",
        label: "Live Projects",
    },
    {
        icon: GraduationCap,
        value: "MCA",
        label: "CSVTU, 2024",
    },
    {
        icon: MapPin,
        value: "Bhilai",
        label: "Chhattisgarh, India",
    },
];

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
        value: "Bhilai, Chhattisgarh",
        href: "https://www.google.com/maps/search/?api=1&query=Bhilai%2C%20Chhattisgarh",
    },
];

/* =========================================================
   ABOUT SECTION
========================================================= */

const About = () => {
    const shouldReduceMotion = useReducedMotion();

    const floatingTransition = (duration, delay = 0) => ({
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
    });

    return (
        <motion.section
            id="about"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.12,
            }}
            variants={containerVariants}
            className="
                section-spacing
                relative
                isolate
                overflow-hidden
            "
        >

            {/* Background Glows */}

            <motion.div
                initial={
                    shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.75,
                        }
                }
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.4,
                    ease: "easeOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -top-32
                    -left-32
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-[var(--color-brand)]/10
                    blur-[100px]
                    sm:h-[360px]
                    sm:w-[360px]
                "
            />

            <motion.div
                initial={
                    shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.75,
                        }
                }
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: "easeOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    right-0
                    bottom-0
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-[var(--color-accent)]/10
                    blur-[110px]
                    sm:h-[380px]
                    sm:w-[380px]
                "
            />

            {/* Main Container */}

            <div
                className="
                    container
                    relative
                    grid
                    min-w-0
                    grid-cols-1
                    items-center
                    gap-12
                    sm:gap-14
                    lg:grid-cols-2
                    lg:gap-10
                    xl:gap-16
                "
            >

                {/* LEFT: ABOUT CONTENT */}

                <motion.div
                    variants={containerVariants}
                    className="
                        min-w-0
                        w-full
                        text-center
                        lg:text-left
                    "
                >

                    {/* Section Label */}

                    <motion.span
                        variants={fadeUpVariants}
                        className="
                            inline-block
                            max-w-full
                            rounded-md
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]
                            px-3
                            py-1.5
                            text-[10px]
                            font-semibold
                            tracking-widest
                            text-[var(--color-accent)]
                            uppercase
                            sm:text-xs
                        "
                    >
                        About Me
                    </motion.span>

                    {/* Heading */}

                    <motion.h2
                        variants={fadeUpVariants}
                        className="
                            mt-5
                            break-words
                            font-heading
                            text-3xl
                            leading-tight
                            font-bold
                            text-white
                            sm:mt-6
                            sm:text-4xl
                            md:text-5xl
                        "
                    >
                        Turning ideas into{" "}

                        <span
                            className="
                                hero-name-animation
                                inline-block
                            "
                        >
                            digital reality.
                        </span>
                    </motion.h2>

                    {/* Description */}

                    <motion.p
                        variants={fadeUpVariants}
                        className="
                            mx-auto
                            mt-5
                            max-w-xl
                            text-sm
                            leading-7
                            text-[var(--color-text-muted)]
                            sm:mt-6
                            sm:text-base
                            sm:leading-relaxed
                            lg:mx-0
                        "
                    >
                        I'm Rojalin Behera, a Full Stack Developer
                        with 1.5+ years of experience (including
                        internships) building responsive, scalable
                        web applications using React.js, Node.js,
                        JavaScript (ES6+), HTML5 and CSS3.
                    </motion.p>

                    <motion.p
                        variants={fadeUpVariants}
                        className="
                            mx-auto
                            mt-4
                            max-w-xl
                            text-sm
                            leading-7
                            text-[var(--color-text-muted)]
                            sm:text-base
                            sm:leading-relaxed
                            lg:mx-0
                        "
                    >
                        I have worked on REST API integration,
                        MongoDB and MySQL database management,
                        and deployment on Vercel in Agile teams.
                        I'm strong in debugging, performance
                        optimization and building clean,
                        user-focused UI.
                    </motion.p>

                    {/* Stats Cards */}

                    <motion.div
                        variants={containerVariants}
                        className="
                            mt-8
                            grid
                            grid-cols-1
                            gap-3
                            min-[420px]:grid-cols-2
                            sm:gap-4
                        "
                    >
                        {cards.map(({ icon: Icon, value, label }) => (
                            <motion.div
                                key={label}
                                variants={fadeUpVariants}
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            y: -5,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        }
                                }
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
                                    p-3
                                    text-left
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-[var(--color-brand)]
                                    hover:shadow-[var(--shadow-card-hover)]
                                    sm:gap-4
                                    sm:p-4
                                "
                            >

                                {/* Icon */}

                                <span
                                    className="
                                        grid
                                        h-11
                                        w-11
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
                                    <Icon size={22} />
                                </span>

                                {/* Text */}

                                <div className="min-w-0">

                                    <p
                                        className="
                                            font-heading
                                            text-lg
                                            font-bold
                                            text-white
                                            sm:text-xl
                                        "
                                    >
                                        {value}
                                    </p>

                                    <p
                                        className="
                                            text-[11px]
                                            leading-5
                                            text-[var(--color-text-muted)]
                                            sm:text-xs
                                        "
                                    >
                                        {label}
                                    </p>

                                </div>

                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Information */}

                    <motion.div
                        variants={containerVariants}
                        className="
                            mt-8
                            space-y-3
                        "
                    >

                        {info.map(({ icon: Icon, label, value, href }) => (
                            <motion.div
                                key={label}
                                variants={fadeUpVariants}
                                className="
                                    flex
                                    min-w-0
                                    items-start
                                    justify-center
                                    gap-3
                                    text-left
                                    text-xs
                                    sm:text-sm
                                    lg:justify-start
                                "
                            >

                                <Icon
                                    size={17}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-[var(--color-accent)]
                                    "
                                />

                                <span
                                    className="
                                        shrink-0
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    {label}:
                                </span>

                                {href ? (
                                    <a
                                        href={href}
                                        className="
                                            min-w-0
                                            break-all
                                            text-white
                                            transition-colors
                                            duration-300
                                            hover:text-[var(--color-accent)]
                                        "
                                    >
                                        {value}
                                    </a>
                                ) : (
                                    <span
                                        className="
                                            min-w-0
                                            break-words
                                            text-white
                                        "
                                    >
                                        {value}
                                    </span>
                                )}

                            </motion.div>
                        ))}

                    </motion.div>

                    {/* CTA Button */}

                    <motion.div
                        variants={fadeUpVariants}
                        className="
                            mt-8
                            flex
                            justify-center
                            lg:justify-start
                        "
                    >
                        <a
                            href="#contact"
                            className="
                                btn-secondary
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                whitespace-nowrap
                                text-sm
                                sm:text-base
                            "
                        >
                            Let's Talk

                            <ArrowRight size={18} />
                        </a>
                    </motion.div>

                </motion.div>

                {/* RIGHT: PROFILE IMAGE */}

                <motion.div
                    variants={fadeRightVariants}
                    className="
                        relative
                        mx-auto
                        w-full
                        min-w-0
                        max-w-[340px]
                        px-3
                        sm:max-w-[400px]
                        sm:px-4
                        md:max-w-[440px]
                        lg:max-w-[460px]
                        lg:px-0
                    "
                >

                    {/* Outer Decorative Frame */}

                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    scale: 0.9,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1,
                            delay: 0.2,
                        }}
                        className="
                            absolute
                            -top-3
                            -left-1
                            h-[94%]
                            w-[94%]
                            rounded-[2rem]
                            border-2
                            border-[var(--color-brand)]/50
                            sm:-top-4
                            sm:-left-3
                        "
                    />

                    {/* Image Glow */}

                    <motion.div
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    opacity: [0.6, 0.85, 0.6],
                                }
                        }
                        transition={floatingTransition(6)}
                        className="
                            absolute
                            inset-0
                            rounded-[2rem]
                            bg-[var(--color-brand)]/25
                            blur-3xl
                        "
                    />

                    {/* Profile Image */}

                    <motion.img
                        src="/Rojalin.jpeg"
                        alt="Rojalin Behera - Full Stack Developer"
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    scale: 0.88,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1.1,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            relative
                            z-10
                            aspect-[4/5]
                            w-full
                            rounded-[2rem]
                            border-4
                            border-[var(--color-surface)]
                            object-cover
                            shadow-[var(--shadow-card-hover)]
                        "
                    />

                    {/* Floating Experience Card */}

                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 20,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -6, 0],
                                }
                        }
                        transition={{
                            opacity: {
                                duration: 0.7,
                                delay: 0.6,
                            },
                            y: floatingTransition(5, 0.6),
                        }}
                        className="
                            absolute
                            right-0
                            bottom-4
                            z-20
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-[var(--color-border)]
                            bg-[#0b1b2b]/95
                            px-3
                            py-3
                            shadow-[var(--shadow-card)]
                            backdrop-blur
                            sm:right-0
                            sm:bottom-7
                            sm:gap-4
                            sm:rounded-2xl
                            sm:px-5
                            sm:py-4
                        "
                    >

                        <span
                            className="
                                grid
                                h-10
                                w-10
                                shrink-0
                                place-items-center
                                rounded-xl
                                bg-[var(--color-brand)]/15
                                text-[var(--color-accent)]
                                sm:h-12
                                sm:w-12
                            "
                        >
                            <Briefcase size={22} />
                        </span>

                        <div>

                            <p
                                className="
                                    font-heading
                                    text-xl
                                    font-bold
                                    text-white
                                    sm:text-2xl
                                "
                            >
                                1.5+
                            </p>

                            <p
                                className="
                                    text-[10px]
                                    text-[var(--color-text-muted)]
                                    sm:text-xs
                                "
                            >
                                Years Experience
                            </p>

                        </div>

                    </motion.div>

                    {/* Floating Code Badge */}

                    <motion.span
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -9, 0],
                                    rotate: [0, 3, 0],
                                }
                        }
                        transition={floatingTransition(4)}
                        className="
                            absolute
                            top-5
                            left-0
                            z-20
                            grid
                            h-11
                            w-11
                            place-items-center
                            rounded-xl
                            bg-[var(--color-brand)]
                            text-white
                            shadow-[var(--shadow-button)]
                            sm:top-7
                            sm:h-14
                            sm:w-14
                            sm:rounded-2xl
                        "
                    >
                        <Code2 size={25} />
                    </motion.span>

                    {/* Floating Sparkle Badge */}

                    <motion.span
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -10, 0],
                                    rotate: [0, -3, 0],
                                }
                        }
                        transition={floatingTransition(4.5, 0.4)}
                        className="
                            absolute
                            top-16
                            right-0
                            z-20
                            grid
                            h-11
                            w-11
                            place-items-center
                            rounded-xl
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]
                            text-[var(--color-accent)]
                            shadow-[var(--shadow-card)]
                            sm:top-20
                            sm:h-14
                            sm:w-14
                            sm:rounded-2xl
                        "
                    >
                        <Sparkles size={23} />
                    </motion.span>

                    {/* Floating MERN Badge */}

                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    x: 15,
                                }
                        }
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -6, 0],
                                }
                        }
                        transition={{
                            opacity: {
                                duration: 0.7,
                                delay: 0.8,
                            },
                            y: floatingTransition(5, 0.8),
                        }}
                        className="
                            absolute
                            top-1/2
                            -right-2
                            z-20
                            hidden
                            -translate-y-1/2
                            rounded-xl
                            border
                            border-[var(--color-border)]
                            bg-[#0b1b2b]/95
                            px-4
                            py-3
                            shadow-[var(--shadow-card)]
                            backdrop-blur
                            sm:block
                            lg:-right-5
                        "
                    >

                        <p
                            className="
                                font-heading
                                text-lg
                                font-bold
                                text-[var(--color-accent)]
                            "
                        >
                            MERN
                        </p>

                        <p
                            className="
                                text-[10px]
                                text-[var(--color-text-muted)]
                            "
                        >
                            Full Stack Developer
                        </p>

                    </motion.div>

                </motion.div>

            </div>

        </motion.section>
    );
};

export default About;
