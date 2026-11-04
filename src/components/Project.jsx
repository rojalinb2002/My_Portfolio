import {
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import {
    motion,
    useReducedMotion,
} from "framer-motion";

import {
    ArrowUpRight,
    ArrowLeft,
    ArrowRight,
    ExternalLink,
    Briefcase,
} from "lucide-react";

import {
    FaReact,
    FaNodeJs,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMongodb,
    SiVercel,
    SiPhp,
    SiMysql,
    SiBootstrap,
    SiHtml5,
    SiJavascript,
} from "react-icons/si";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const projectAnimations = {
    heading: {
        hidden: {
            opacity: 0,
            y: 25,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    },

    container: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.16,
            },
        },
    },

    card: {
        hidden: {
            opacity: 0,
            y: 35,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    },

    controls: {
        hidden: {
            opacity: 0,
            y: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    },
};

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
    {
        id: "01",
        title: "Vertex Suite",
        type: "SaaS Platform",
        desc: "All-in-one SaaS platform for WhatsApp commerce and business automation with chatbots, shared inbox and marketplace management.",
        tech: [
            "React.js",
            "Node.js",
            "MongoDB",
            "REST APIs",
            "Webhooks",
        ],
        icons: [
            FaReact,
            FaNodeJs,
            SiMongodb,
        ],
        link: "https://vertexsuite.in/",
        image: "/VertexSuite.png",
        gradient: "from-blue-600/40 via-indigo-600/20 to-transparent",
    },

    {
        id: "02",
        title: "LogicGyan",
        type: "Training Website",
        desc: "Responsive internship and vocational training website with course listings, enquiry and registration flow.",
        tech: [
            "React.js",
            "Tailwind CSS",
            "Vercel",
        ],
        icons: [
            FaReact,
            SiTailwindcss,
            SiVercel,
        ],
        link: "https://logicgyan-website-63b9.vercel.app/",
        image: "/Logicgyan.png",
        gradient: "from-sky-500/40 via-blue-600/20 to-transparent",
    },

    {
        id: "03",
        title: "KushalApp",
        type: "Service Marketplace",
        desc: "Service marketplace for booking verified professionals in home repair, beauty and cleaning, with service listings and a provider dashboard.",
        tech: [
            "React.js",
            "Tailwind CSS",
            "REST APIs",
            "MongoDB",
        ],
        icons: [
            FaReact,
            SiTailwindcss,
            SiMongodb,
        ],
        link: "https://kushalapp.com/",
        image: "/KushalApp.png",
        gradient: "from-cyan-500/40 via-blue-700/20 to-transparent",
    },

    {
        id: "04",
        title: "Sparsh Hospital",
        type: "Hospital Website",
        desc: "Multispecialty hospital website for Bhilai with department and doctor listings, OPD appointment, health packages and doctors' time table.",
        tech: [
            "PHP",
            "MySQL",
            "Bootstrap",
            "JavaScript",
        ],
        icons: [
            SiPhp,
            SiMysql,
            SiBootstrap,
        ],
        link: "https://sparshbhilai.com/",
        image: "/OnlineDoctorConsultancy.png",
        gradient: "from-emerald-500/40 via-teal-600/20 to-transparent",
    },

    {
        id: "05",
        title: "Atmik Bharat",
        type: "Company Website",
        desc: "Corporate website for an IT solutions company covering services, sectors served, client logos, impact stats and an appointment enquiry form.",
        tech: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
        ],
        icons: [
            SiHtml5,
            FaCss3Alt,
            SiJavascript,
            SiBootstrap,
        ],
        link: "https://atmikbharat.com/",
        image: "/AtmikBharat.png",
        gradient: "from-violet-500/40 via-indigo-600/20 to-transparent",
    },
];

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({
    project,
}) => {
    const [imageFailed, setImageFailed] = useState(false);

    const showImage = Boolean(project.image) && !imageFailed;

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} live project`}
            draggable={false}
            className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[var(--color-brand)]
            "
        >
            {/* =================================================
                PROJECT PREVIEW
            ================================================= */}

            <div
                className={`
                    relative
                    grid
                    h-48
                    shrink-0
                    place-items-center
                    overflow-hidden
                    bg-gradient-to-br
                    ${project.gradient}
                    bg-[var(--color-background)]
                    sm:h-52
                `}
            >
                {/* Project Screenshot */}

                {showImage && (
                    <>
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            onError={() => setImageFailed(true)}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                                object-top
                                transition
                                duration-500
                                group-hover:scale-105
                            "
                        />

                        {/* Dark gradient so badges stay readable */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-[var(--color-surface)]/80
                                via-transparent
                                to-black/40
                            "
                        />
                    </>
                )}

                {/* Project Number */}

                <span
                    className="
                        absolute
                        left-4
                        top-4
                        font-heading
                        text-sm
                        font-semibold
                        text-white/80
                    "
                >
                    {project.id}
                </span>

                {/* Project Type */}

                <span
                    className="
                        absolute
                        right-4
                        top-4
                        rounded-full
                        border
                        border-white/20
                        bg-black/30
                        px-3
                        py-1
                        text-[10px]
                        font-medium
                        text-white
                        backdrop-blur
                    "
                >
                    {project.type}
                </span>

                {/* Technology Icons */}

                <div
                    className={
                        showImage
                            ? `
                                absolute
                                bottom-3
                                left-4
                                flex
                                items-center
                                gap-3
                                text-xl
                                text-white/90
                            `
                            : `
                                flex
                                items-center
                                gap-5
                                text-4xl
                                text-white/90
                                transition
                                duration-500
                                group-hover:scale-110
                            `
                    }
                >
                    {project.icons.map((Icon, index) => (
                        <Icon key={index} />
                    ))}
                </div>
            </div>

            {/* =================================================
                PROJECT CONTENT
            ================================================= */}

            <div
                className="
                    flex
                    flex-1
                    flex-col
                    p-5
                    sm:p-6
                "
            >
                {/* Project Title */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-3
                    "
                >
                    <h3
                        className="
                            font-heading
                            text-lg
                            font-semibold
                            text-white
                            sm:text-xl
                        "
                    >
                        {project.title}
                    </h3>

                    <span
                        className="
                            grid
                            h-9
                            w-9
                            shrink-0
                            place-items-center
                            rounded-full
                            border
                            border-[var(--color-border)]
                            text-[var(--color-text-muted)]
                            transition
                            group-hover:border-[var(--color-brand)]
                            group-hover:bg-[var(--color-brand)]
                            group-hover:text-white
                        "
                    >
                        <ArrowUpRight size={18} />
                    </span>
                </div>

                {/* Project Description */}

                <p
                    className="
                        mt-3
                        flex-1
                        text-sm
                        leading-relaxed
                        text-[var(--color-text-muted)]
                    "
                >
                    {project.desc}
                </p>

                {/* Technology Tags */}

                <div
                    className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                    "
                >
                    {project.tech.map((technology) => (
                        <span
                            key={technology}
                            className="
                                rounded-md
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-background)]
                                px-2.5
                                py-1
                                text-[11px]
                                font-medium
                                text-[var(--color-text)]
                            "
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {/* Live Project Link */}

                <span
                    className="
                        mt-5
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-[var(--color-accent)]
                    "
                >
                    View Live Project
                    <ExternalLink size={14} />
                </span>
            </div>
        </a>
    );
};

/* =========================================================
   ROUND ARROW BUTTON (prev / next)
========================================================= */

const ArrowButton = ({
    direction,
    onClick,
    disabled,
}) => {
    const Icon = direction === "prev" ? ArrowLeft : ArrowRight;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={
                direction === "prev"
                    ? "Previous projects"
                    : "Next projects"
            }
            className="
                grid
                h-10
                w-10
                place-items-center
                rounded-full
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                text-white
                transition
                duration-300
                hover:border-[var(--color-brand)]
                hover:bg-[var(--color-brand)]
                disabled:cursor-not-allowed
                disabled:opacity-40
                disabled:hover:border-[var(--color-border)]
                disabled:hover:bg-[var(--color-surface)]
                sm:h-11
                sm:w-11
            "
        >
            <Icon size={18} />
        </button>
    );
};

/* =========================================================
   MAIN PROJECT SECTION
========================================================= */

const Project = () => {
    const sliderRef = useRef(null);

    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const reduceMotion = useReducedMotion();

    /* ---------- Update prev / next disabled state ---------- */

    const updateButtons = useCallback(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        const maxScroll = slider.scrollWidth - slider.clientWidth;

        setCanPrev(slider.scrollLeft > 4);
        setCanNext(slider.scrollLeft < maxScroll - 4);
    }, []);

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return;

        updateButtons();

        slider.addEventListener("scroll", updateButtons, {
            passive: true,
        });

        window.addEventListener("resize", updateButtons);

        return () => {
            slider.removeEventListener("scroll", updateButtons);
            window.removeEventListener("resize", updateButtons);
        };
    }, [updateButtons]);

    /* ---------- Scroll exactly one card left / right ---------- */

    const scrollByCard = (direction) => {
        const slider = sliderRef.current;

        if (!slider) return;

        const firstCard = slider.firstElementChild;

        if (!firstCard) return;

        const gap =
            parseFloat(getComputedStyle(slider).columnGap) || 0;

        slider.scrollBy({
            left: direction * (firstCard.offsetWidth + gap),
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    /* ---------- Reduced Motion Animation Variants ---------- */

    const headingVariants = reduceMotion
        ? {
            hidden: {
                opacity: 1,
                y: 0,
            },
            visible: {
                opacity: 1,
                y: 0,
            },
        }
        : projectAnimations.heading;

    const cardVariants = reduceMotion
        ? {
            hidden: {
                opacity: 1,
                y: 0,
            },
            visible: {
                opacity: 1,
                y: 0,
            },
        }
        : projectAnimations.card;

    const containerVariants = reduceMotion
        ? {
            hidden: {},
            visible: {},
        }
        : projectAnimations.container;

    const controlVariants = reduceMotion
        ? {
            hidden: {
                opacity: 1,
                y: 0,
            },
            visible: {
                opacity: 1,
                y: 0,
            },
        }
        : projectAnimations.controls;

    return (
        <section
            id="projects"
            className="
                section-spacing
                relative
                isolate
                overflow-hidden
            "
        >
            {/* =================================================
                BACKGROUND DECORATIONS
            ================================================= */}

            <motion.div
                animate={
                    reduceMotion
                        ? {}
                        : {
                            y: [0, 22, 0],
                            x: [0, 12, 0],
                        }
                }
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-1/3
                    h-[360px]
                    w-[360px]
                    rounded-full
                    bg-[var(--color-brand)]/10
                    blur-[120px]
                "
            />

            <motion.div
                animate={
                    reduceMotion
                        ? {}
                        : {
                            y: [0, -20, 0],
                            x: [0, -12, 0],
                        }
                }
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-10
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-[var(--color-accent)]/5
                    blur-[120px]
                "
            />

            <div className="container relative">

                {/* =================================================
                    SECTION HEADING
                ================================================= */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    className="
                        mx-auto
                        max-w-2xl
                        text-center
                    "
                >
                    <motion.span
                        variants={headingVariants}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]
                            px-3
                            py-1.5
                            text-[10px]
                            font-bold
                            tracking-[0.2em]
                            text-[var(--color-accent)]
                            uppercase
                        "
                    >
                        <Briefcase size={13} />
                        Featured Projects
                    </motion.span>

                    <motion.h2
                        variants={headingVariants}
                        className="
                            mt-4
                            font-heading
                            text-3xl
                            font-bold
                            leading-tight
                            text-white
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Some of my{" "}

                        <span
                            className="
                                hero-name-animation
                                text-[var(--color-brand)]
                            "
                        >
                            recent work
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={headingVariants}
                        className="
                            mx-auto
                            mt-3
                            max-w-xl
                            text-sm
                            leading-6
                            text-[var(--color-text-muted)]
                            sm:text-base
                        "
                    >
                        Live projects I've built and shipped.
                        Explore my work and technologies.
                    </motion.p>
                </motion.div>

                {/* =================================================
                    PREV / NEXT BUTTONS
                ================================================= */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    variants={controlVariants}
                    className="
                        mb-4
                        mt-8
                        flex
                        items-center
                        justify-end
                        gap-3
                        sm:mt-10
                    "
                >
                    <ArrowButton
                        direction="prev"
                        onClick={() => scrollByCard(-1)}
                        disabled={!canPrev}
                    />

                    <ArrowButton
                        direction="next"
                        onClick={() => scrollByCard(1)}
                        disabled={!canNext}
                    />
                </motion.div>

                {/* =================================================
                    PROJECT CARDS (swipe + buttons)
                    py-3 / -my-3 = hover lift clip na ho
                ================================================= */}

                <motion.div
                    ref={sliderRef}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.12,
                    }}
                    variants={containerVariants}
                    className="
                        -my-3
                        flex
                        snap-x
                        snap-mandatory
                        items-stretch
                        gap-5
                        overflow-x-auto
                        overscroll-x-contain
                        scroll-smooth
                        py-3
                        [scrollbar-width:none]
                        [&::-webkit-scrollbar]:hidden
                        sm:gap-6
                    "
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="
                                w-[86%]
                                shrink-0
                                snap-start
                                sm:w-[calc((100%-1.5rem)/2)]
                                lg:w-[calc((100%-3rem)/3)]
                            "
                        >
                            <ProjectCard
                                project={project}
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Project;