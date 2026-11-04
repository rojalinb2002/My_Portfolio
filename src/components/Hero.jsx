import {
    Download,
    Mail,
    ArrowUpRight,
} from "lucide-react";

import {
    motion,
    useReducedMotion,
} from "framer-motion";

import {
    FaGithub,
    FaLinkedinIn,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiTailwindcss,
} from "react-icons/si";

/* =========================================================
   CONTENT
========================================================= */

const CV_FILE = "/Rojalin_Behera_FullStack_Developer_CV.pdf";

/* =========================================================
   TECHNOLOGIES
========================================================= */

const techs = [
    {
        name: "HTML5",
        icon: SiHtml5,
        color: "text-[#E34F26]",
    },
    {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-[#1572B6]",
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-[#F7DF1E]",
    },
    {
        name: "React.js",
        icon: SiReact,
        color: "text-[#61DAFB]",
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#5FA04E]",
    },
    {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-[#06B6D4]",
    },
];

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
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const fadeUpVariants = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeLeftVariants = {
    hidden: {
        opacity: 0,
        x: -35,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
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
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/* =========================================================
   TECHNOLOGY MARQUEE ITEM
========================================================= */

const TechnologyItem = ({ tech }) => {
    const Icon = tech.icon;

    return (
        <div
            className="
                flex
                shrink-0
                items-center
                gap-3
                sm:gap-4
            "
        >
            <Icon
                className={`
                    ${tech.color}
                    h-9
                    w-9
                    sm:h-11
                    sm:w-11
                    md:h-12
                    md:w-12
                `}
            />

            <span
                className="
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:text-white
                    sm:text-base
                "
            >
                {tech.name}
            </span>
        </div>
    );
};

/* =========================================================
   HERO SECTION
========================================================= */

const Hero = () => {
    const shouldReduceMotion = useReducedMotion();

    const entranceProps = shouldReduceMotion
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: {
                once: true,
                amount: 0.15,
            },
        };

    const floatingTransition = (duration, delay = 0) => ({
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
    });

    return (
        <motion.section
            id="home"
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={containerVariants}
            className="
                relative
                isolate
                overflow-hidden
                pt-28
                pb-12
                sm:pt-32
                sm:pb-16
                md:pt-40
                lg:pt-44
            "
        >
            {/* =================================================
                BACKGROUND GLOWS
            ================================================= */}

            <motion.div
                initial={
                    shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.7,
                        }
                }
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
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
                    bg-[var(--color-brand)]/20
                    blur-[100px]
                    sm:h-[360px]
                    sm:w-[360px]
                    md:h-[420px]
                    md:w-[420px]
                "
            />

            <motion.div
                initial={
                    shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.7,
                        }
                }
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: "easeOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    top-40
                    -right-32
                    h-[260px]
                    w-[260px]
                    rounded-full
                    bg-[var(--color-accent)]/10
                    blur-[100px]
                    sm:h-[320px]
                    sm:w-[320px]
                    md:h-[380px]
                    md:w-[380px]
                "
            />

            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

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
                {/* =================================================
                    LEFT: CONTENT
                ================================================= */}

                <motion.div
                    variants={containerVariants}
                    className="
                        min-w-0
                        w-full
                        text-center
                        lg:text-left
                    "
                >
                    {/* Designation */}

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
                        Full Stack Developer (MERN)
                    </motion.span>

                    {/* Heading */}

                    <motion.h1
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
                            lg:text-[52px]
                            xl:text-6xl
                        "
                    >
                        Hi, I'm{" "}

                        <span
                            className="
                                hero-name-animation
                                inline-block
                            "
                        >
                            Rojalin
                        </span>

                        <br />

                        <span
                            className="
                                mt-2
                                block
                                text-2xl
                                leading-tight
                                font-semibold
                                sm:text-3xl
                                md:text-4xl
                                lg:text-[42px]
                                xl:text-5xl
                            "
                        >
                            I build scalable web apps.
                        </span>
                    </motion.h1>

                    {/* Description */}

                    <motion.p
                        variants={fadeUpVariants}
                        className="
                            mx-auto
                            mt-5
                            max-w-lg
                            text-sm
                            leading-7
                            text-[var(--color-text-muted)]
                            sm:mt-6
                            sm:text-base
                            sm:leading-relaxed
                            lg:mx-0
                        "
                    >
                        Full Stack Developer with 1.5+ years of
                        experience building responsive web
                        applications using React.js, Node.js,
                        MongoDB and REST APIs. Clean code,
                        user-focused UI.
                    </motion.p>

                    {/* Action Buttons */}

                    <motion.div
                        variants={fadeUpVariants}
                        className="
                            mt-7
                            flex
                            flex-wrap
                            items-center
                            justify-center
                            gap-3
                            sm:mt-8
                            sm:gap-4
                            lg:justify-start
                        "
                    >
                        <a
                            href="#projects"
                            className="
                                btn-primary
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                whitespace-nowrap
                                text-sm
                                sm:text-base
                            "
                        >
                            View My Work

                            <ArrowUpRight size={18} />
                        </a>

                        <a
                            href={CV_FILE}
                            download
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
                            Download CV

                            <Download size={18} />
                        </a>
                    </motion.div>

                    {/* Social Links */}

                    <motion.div
                        variants={fadeUpVariants}
                        className="
                            mt-7
                            flex
                            items-center
                            justify-center
                            gap-3
                            sm:mt-8
                            sm:gap-4
                            lg:justify-start
                        "
                    >
                        {/* GitHub */}

                        <a
                            href="https://github.com/rojalinb2002"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
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
                                hover:text-white
                                sm:h-11
                                sm:w-11
                            "
                        >
                            <FaGithub size={19} />
                        </a>

                        {/* LinkedIn */}

                        <a
                            href="https://linkedin.com/in/rojalin2002"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
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
                                hover:text-white
                                sm:h-11
                                sm:w-11
                            "
                        >
                            <FaLinkedinIn size={19} />
                        </a>

                        {/* Email */}

                        <a
                            href="mailto:rojalinb221@gmail.com"
                            aria-label="Email"
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
                                hover:text-white
                                sm:h-11
                                sm:w-11
                            "
                        >
                            <Mail size={19} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* =================================================
                    RIGHT: PROFILE IMAGE
                ================================================= */}

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
                    {/* Glow Circle */}

                    <motion.div
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    scale: [1, 1.04, 1],
                                    opacity: [0.7, 0.9, 0.7],
                                }
                        }
                        transition={floatingTransition(6)}
                        className="
                            absolute
                            inset-0
                            m-auto
                            h-[85%]
                            w-[85%]
                            rounded-full
                            bg-gradient-to-br
                            from-[var(--color-brand)]
                            to-[#1e3a8a]
                            opacity-80
                            blur-sm
                        "
                    />

                    {/* Profile Image */}

                    <motion.img
                        src="/Rojalin.jpeg"
                        alt="Rojalin Behera"
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    scale: 0.85,
                                }
                        }
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.2,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            relative
                            z-10
                            mx-auto
                            aspect-square
                            w-[88%]
                            rounded-full
                            border-4
                            border-[var(--color-surface)]
                            object-cover
                            shadow-[var(--shadow-card-hover)]
                        "
                    />

                    {/* Floating Code Card */}

                    <motion.div
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -8, 0],
                                }
                        }
                        transition={floatingTransition(5)}
                        className="
                            absolute
                            right-0
                            bottom-3
                            z-20
                            hidden
                            w-52
                            rounded-xl
                            border
                            border-[var(--color-border)]
                            bg-[#0b1b2b]/95
                            p-3
                            font-mono
                            text-[10px]
                            leading-5
                            shadow-[var(--shadow-card)]
                            backdrop-blur
                            sm:block
                            sm:w-56
                            sm:p-4
                            sm:text-[11px]
                            md:right-0
                            lg:-right-2
                        "
                    >
                        <div
                            className="
                                mb-2
                                flex
                                items-center
                                justify-between
                                text-[var(--color-text-muted)]
                            "
                        >
                            <span>
                                &lt;/&gt; Code
                            </span>

                            <span
                                className="
                                    h-2
                                    w-2
                                    rounded-full
                                    bg-green-400
                                "
                            />
                        </div>

                        <p className="text-[var(--color-text-muted)]">
                            <span className="text-purple-400">
                                const
                            </span>{" "}
                            developer = {"{"}
                        </p>

                        <p
                            className="
                                pl-3
                                text-[var(--color-text)]
                            "
                        >
                            name:{" "}
                            <span className="text-orange-300">
                                "Rojalin"
                            </span>,
                        </p>

                        <p
                            className="
                                pl-3
                                text-[var(--color-text)]
                            "
                        >
                            stack:{" "}
                            <span className="text-orange-300">
                                "MERN"
                            </span>,
                        </p>

                        <p
                            className="
                                pl-3
                                text-[var(--color-text)]
                            "
                        >
                            passion:{" "}
                            <span className="text-orange-300">
                                "Clean UI"
                            </span>
                        </p>

                        <p className="text-[var(--color-text-muted)]">
                            {"};"}
                        </p>
                    </motion.div>

                    {/* Floating Code Badge */}

                    <motion.span
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -10, 0],
                                    rotate: [0, 3, 0],
                                }
                        }
                        transition={floatingTransition(4)}
                        className="
                            absolute
                            top-4
                            left-0
                            z-20
                            grid
                            h-11
                            w-11
                            place-items-center
                            rounded-xl
                            bg-[var(--color-brand)]
                            font-heading
                            text-base
                            font-bold
                            text-white
                            shadow-[var(--shadow-button)]
                            sm:top-6
                            sm:h-14
                            sm:w-14
                            sm:rounded-2xl
                            sm:text-lg
                        "
                    >
                        {"</>"}
                    </motion.span>

                    {/* Floating React Badge */}

                    <motion.span
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -10, 0],
                                    rotate: [0, -3, 0],
                                }
                        }
                        transition={floatingTransition(4.5, 0.5)}
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
                            text-[10px]
                            font-bold
                            text-[var(--color-accent)]
                            shadow-[var(--shadow-card)]
                            sm:top-20
                            sm:h-14
                            sm:w-14
                            sm:rounded-2xl
                            sm:text-xs
                        "
                    >
                        React
                    </motion.span>
                </motion.div>
            </div>

            {/* =================================================
                TECHNOLOGY MARQUEE
            ================================================= */}

            <motion.div
                initial={
                    shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 25,
                        }
                }
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.2,
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    relative
                    left-1/2
                    mt-16
                    w-screen
                    -translate-x-1/2
                    overflow-hidden
                    border-y
                    border-[var(--color-border)]
                    bg-[#06243B]/90
                    py-5
                    sm:mt-20
                    sm:py-6
                    md:mt-24
                "
            >
                {/* Continuous Scrolling Track */}

                <div
                    className="
                        hero-tech-track
                        flex
                        w-max
                        items-center
                    "
                >
                    {/* Repeated Technology Groups */}

                    {[1, 2, 3, 4].map((group) => (
                        <div
                            key={group}
                            className="
                                flex
                                shrink-0
                                items-center
                                gap-10
                                px-5
                                sm:gap-14
                                sm:px-7
                                md:gap-16
                            "
                            aria-hidden={group !== 1}
                        >
                            {techs.map((tech) => (
                                <TechnologyItem
                                    key={`${group}-${tech.name}`}
                                    tech={tech}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
