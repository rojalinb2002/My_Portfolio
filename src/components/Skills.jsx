import {
    Database,
    Wrench,
    Layers3,
    ArrowUpRight,
    Sparkles,
    Zap,
    Monitor,
} from "lucide-react";

import {
    motion,
    useReducedMotion,
} from "framer-motion";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaBootstrap,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMongodb,
    SiMysql,
    SiVercel,
} from "react-icons/si";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const sectionVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 28,
        scale: 0.97,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

/* =========================================================
   SKILL DATA
========================================================= */

const skills = [
    {
        name: "React.js",
        level: 90,
        icon: FaReact,
        color: "#61DAFB",
        category: "Frontend",
        featured: true,
        description: "Component-based UI development",
    },
    {
        name: "JavaScript",
        level: 88,
        icon: FaJs,
        color: "#F7DF1E",
        category: "Frontend",
        featured: true,
        description: "Modern ES6+ development",
    },
    {
        name: "HTML5",
        level: 95,
        icon: FaHtml5,
        color: "#E34F26",
        category: "Frontend",
    },
    {
        name: "CSS3",
        level: 90,
        icon: FaCss3Alt,
        color: "#1572B6",
        category: "Frontend",
    },
    {
        name: "Tailwind CSS",
        level: 90,
        icon: SiTailwindcss,
        color: "#38BDF8",
        category: "Frontend",
    },
    {
        name: "Bootstrap",
        level: 85,
        icon: FaBootstrap,
        color: "#A855F7",
        category: "Frontend",
    },
    {
        name: "Node.js",
        level: 75,
        icon: FaNodeJs,
        color: "#68A063",
        category: "Backend",
    },
    {
        name: "MongoDB",
        level: 78,
        icon: SiMongodb,
        color: "#47A248",
        category: "Database",
    },
    {
        name: "MySQL",
        level: 75,
        icon: SiMysql,
        color: "#00A4D6",
        category: "Database",
    },
    {
        name: "Git",
        level: 85,
        icon: FaGitAlt,
        color: "#F05133",
        category: "Tools",
    },
    {
        name: "GitHub",
        level: 85,
        icon: FaGithub,
        color: "#FFFFFF",
        category: "Tools",
    },
    {
        name: "Vercel",
        level: 80,
        icon: SiVercel,
        color: "#FFFFFF",
        category: "Deployment",
    },
];

/* =========================================================
   ADDITIONAL EXPERTISE
========================================================= */

const additionalSkills = [
    "REST APIs",
    "Responsive Design",
    "Webhooks",
    "CRUD Operations",
    "Debugging",
    "Agile Workflow",
    "VS Code",
];

/* =========================================================
   SKILL CARD
========================================================= */

const SkillCard = ({ skill, index, shouldReduceMotion }) => {
    const Icon = skill.icon;

    return (
        <motion.div
            variants={cardVariants}
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
            className={`
                group
                relative
                isolate
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-[var(--color-border)]
                bg-[#10243A]
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--color-brand)]
                hover:shadow-[var(--shadow-card-hover)]
                sm:p-6
                ${skill.featured || ["GitHub", "Vercel"].includes(skill.name)
                    ? "md:col-span-2"
                    : ""
                }
            `}
        >
            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-16
                    -right-12
                    h-36
                    w-36
                    rounded-full
                    opacity-10
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-30
                "
                style={{
                    backgroundColor: skill.color,
                }}
            />

            <div className="relative">

                {/* Top Row */}

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-3
                    "
                >
                    <div
                        className="
                            grid
                            h-12
                            w-12
                            shrink-0
                            place-items-center
                            rounded-xl
                            border
                            border-white/5
                            bg-[#091827]
                            text-2xl
                            transition-transform
                            duration-300
                            group-hover:scale-110
                            sm:h-14
                            sm:w-14
                            sm:text-3xl
                        "
                    >
                        <Icon
                            style={{
                                color: skill.color,
                            }}
                        />
                    </div>

                    <span
                        className="
                            rounded-full
                            border
                            border-[var(--color-border)]
                            bg-[#091827]
                            px-3
                            py-1
                            text-[10px]
                            font-medium
                            text-[var(--color-text-muted)]
                            sm:text-xs
                        "
                    >
                        {skill.category}
                    </span>
                </div>

                {/* Skill Information */}

                <div className="mt-6">

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            justify-between
                            gap-2
                        "
                    >
                        <h3
                            className="
                                font-heading
                                text-base
                                font-bold
                                text-white
                                sm:text-lg
                            "
                        >
                            {skill.name}
                        </h3>

                        <span
                            className="
                                font-heading
                                text-sm
                                font-bold
                                tabular-nums
                                text-[var(--color-accent)]
                            "
                        >
                            {skill.level}%
                        </span>
                    </div>

                    <p
                        className="
                            mt-1
                            text-xs
                            leading-relaxed
                            text-[var(--color-text-muted)]
                        "
                    >
                        {skill.description || "Development & implementation"}
                    </p>

                </div>

                {/* Progress Bar */}

                <div
                    className="
                        mt-5
                        h-1.5
                        w-full
                        overflow-hidden
                        rounded-full
                        bg-[#071523]
                    "
                >
                    <motion.div
                        initial={{
                            width: shouldReduceMotion
                                ? `${skill.level}%`
                                : "0%",
                        }}
                        whileInView={{
                            width: `${skill.level}%`,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 1.2,
                            delay: index * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            h-full
                            rounded-full
                            transition-all
                            duration-1000
                            ease-out
                            group-hover:brightness-125
                        "
                        style={{
                            background: `linear-gradient(
                                90deg,
                                ${skill.color},
                                #60A5FA
                            )`,
                        }}
                    />
                </div>

                {/* Bottom Label */}

                <div
                    className="
                        mt-3
                        flex
                        items-center
                        justify-between
                    "
                >
                    <span
                        className="
                            text-[10px]
                            font-medium
                            tracking-wide
                            text-[var(--color-text-muted)]
                            uppercase
                        "
                    >
                        Proficiency
                    </span>

                    <span
                        className="
                            text-[10px]
                            font-medium
                            text-emerald-400
                        "
                    >
                        {skill.level >= 90
                            ? "Advanced"
                            : skill.level >= 80
                                ? "Proficient"
                                : "Intermediate"}
                    </span>
                </div>

            </div>
        </motion.div>
    );
};

/* =========================================================
   SKILLS SECTION
========================================================= */

const Skills = () => {
    const shouldReduceMotion = useReducedMotion();

    const totalSkills = skills.length;

    const frontendCount = skills.filter(
        (skill) => skill.category === "Frontend"
    ).length;

    const backendCount = skills.filter(
        (skill) =>
            skill.category === "Backend" ||
            skill.category === "Database"
    ).length;

    const toolsCount = skills.filter(
        (skill) =>
            skill.category === "Tools" ||
            skill.category === "Deployment"
    ).length;

    return (
        <motion.section
            id="skills"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.08,
            }}
            variants={sectionVariants}
            className="
                section-spacing
                relative
                isolate
                overflow-hidden
            "
        >

            {/* Background Decorations */}

            <motion.div
                initial={
                    shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.8,
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
                    duration: 1.3,
                    ease: "easeOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -top-24
                    -left-32
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-[var(--color-brand)]/10
                    blur-[120px]
                "
            />

            <motion.div
                initial={
                    shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            scale: 0.8,
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
                    delay: 0.2,
                    ease: "easeOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    right-0
                    bottom-0
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-purple-500/10
                    blur-[130px]
                "
            />

            <div className="container relative">

                {/* SECTION HEADER */}

                <motion.div
                    variants={sectionVariants}
                    className="
                        mb-10
                        max-w-2xl
                        sm:mb-14
                    "
                >

                    <motion.span
                        variants={fadeUpVariants}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-md
                            border
                            border-[var(--color-border)]
                            bg-[var(--color-surface)]
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            tracking-widest
                            text-[var(--color-accent)]
                            uppercase
                        "
                    >
                        <Sparkles size={14} />
                        My Expertise
                    </motion.span>

                    <motion.h2
                        variants={fadeUpVariants}
                        className="
                            mt-5
                            font-heading
                            text-3xl
                            leading-tight
                            font-bold
                            text-white
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Skills &{" "}
                        <span
                            className="
                                hero-name-animation
                                text-[var(--color-brand)]
                            "
                        >
                            Technologies
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUpVariants}
                        className="
                            mt-4
                            max-w-xl
                            text-sm
                            leading-7
                            text-[var(--color-text-muted)]
                            sm:text-base
                        "
                    >
                        My technical toolkit for creating responsive,
                        scalable and user-focused web applications.
                        Explore the technologies I work with.
                    </motion.p>

                </motion.div>

                {/* DASHBOARD SUMMARY */}

                <motion.div
                    variants={sectionVariants}
                    className="
                        mb-7
                        grid
                        grid-cols-2
                        gap-3
                        sm:mb-8
                        sm:grid-cols-4
                        sm:gap-4
                    "
                >

                    {/* Total Skills */}

                    <motion.div
                        variants={cardVariants}
                        whileHover={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: -4,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }
                        }
                        className="
                            rounded-2xl
                            border
                            border-[var(--color-border)]
                            bg-[#10243A]
                            p-4
                            sm:p-5
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                gap-2
                            "
                        >
                            <Layers3
                                size={20}
                                className="text-[var(--color-accent)]"
                            />

                            <span
                                className="
                                    text-[10px]
                                    text-[var(--color-text-muted)]
                                    sm:text-xs
                                "
                            >
                                Total
                            </span>
                        </div>

                        <p
                            className="
                                mt-3
                                font-heading
                                text-2xl
                                font-bold
                                text-white
                                sm:text-3xl
                            "
                        >
                            {totalSkills}+
                        </p>

                        <p
                            className="
                                mt-1
                                text-xs
                                text-[var(--color-text-muted)]
                            "
                        >
                            Technologies
                        </p>
                    </motion.div>

                    {/* Frontend */}

                    <motion.div
                        variants={cardVariants}
                        whileHover={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: -4,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }
                        }
                        className="
                            rounded-2xl
                            border
                            border-[var(--color-border)]
                            bg-[#10243A]
                            p-4
                            sm:p-5
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                gap-2
                            "
                        >
                            <Monitor
                                size={20}
                                className="text-sky-400"
                            />

                            <span
                                className="
                                    text-[10px]
                                    text-[var(--color-text-muted)]
                                    sm:text-xs
                                "
                            >
                                Frontend
                            </span>
                        </div>

                        <p
                            className="
                                mt-3
                                font-heading
                                text-2xl
                                font-bold
                                text-white
                                sm:text-3xl
                            "
                        >
                            {frontendCount}
                        </p>

                        <p
                            className="
                                mt-1
                                text-xs
                                text-[var(--color-text-muted)]
                            "
                        >
                            UI Technologies
                        </p>
                    </motion.div>

                    {/* Backend */}

                    <motion.div
                        variants={cardVariants}
                        whileHover={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: -4,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }
                        }
                        className="
                            rounded-2xl
                            border
                            border-[var(--color-border)]
                            bg-[#10243A]
                            p-4
                            sm:p-5
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                gap-2
                            "
                        >
                            <Database
                                size={20}
                                className="text-emerald-400"
                            />

                            <span
                                className="
                                    text-[10px]
                                    text-[var(--color-text-muted)]
                                    sm:text-xs
                                "
                            >
                                Backend
                            </span>
                        </div>

                        <p
                            className="
                                mt-3
                                font-heading
                                text-2xl
                                font-bold
                                text-white
                                sm:text-3xl
                            "
                        >
                            {backendCount}
                        </p>

                        <p
                            className="
                                mt-1
                                text-xs
                                text-[var(--color-text-muted)]
                            "
                        >
                            Backend & Database
                        </p>
                    </motion.div>

                    {/* Tools */}

                    <motion.div
                        variants={cardVariants}
                        whileHover={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: -4,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }
                        }
                        className="
                            rounded-2xl
                            border
                            border-[var(--color-border)]
                            bg-[#10243A]
                            p-4
                            sm:p-5
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                gap-2
                            "
                        >
                            <Wrench
                                size={20}
                                className="text-purple-400"
                            />

                            <span
                                className="
                                    text-[10px]
                                    text-[var(--color-text-muted)]
                                    sm:text-xs
                                "
                            >
                                Tools
                            </span>
                        </div>

                        <p
                            className="
                                mt-3
                                font-heading
                                text-2xl
                                font-bold
                                text-white
                                sm:text-3xl
                            "
                        >
                            {toolsCount}
                        </p>

                        <p
                            className="
                                mt-1
                                text-xs
                                text-[var(--color-text-muted)]
                            "
                        >
                            Development Tools
                        </p>
                    </motion.div>

                </motion.div>

                {/* BENTO SKILLS GRID */}

                <motion.div
                    variants={sectionVariants}
                    className="
                        grid
                        grid-cols-1
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                        sm:gap-5
                    "
                >

                    {skills.map((skill, index) => (
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={index}
                            shouldReduceMotion={shouldReduceMotion}
                        />
                    ))}

                </motion.div>

                {/* ADDITIONAL EXPERTISE */}

                <motion.div
                    variants={fadeUpVariants}
                    whileHover={
                        shouldReduceMotion
                            ? {}
                            : {
                                y: -3,
                                transition: {
                                    duration: 0.25,
                                },
                            }
                    }
                    className="
                        mt-8
                        overflow-hidden
                        rounded-2xl
                        border
                        border-[var(--color-border)]
                        bg-[#10243A]
                        p-5
                        sm:mt-10
                        sm:p-7
                        lg:p-8
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            gap-6
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >

                        <div className="max-w-sm">

                            <div className="flex items-center gap-2">

                                <Zap
                                    size={19}
                                    className="text-[var(--color-accent)]"
                                />

                                <h3
                                    className="
                                        font-heading
                                        text-lg
                                        font-bold
                                        text-white
                                    "
                                >
                                    Additional Expertise
                                </h3>

                            </div>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-relaxed
                                    text-[var(--color-text-muted)]
                                "
                            >
                                Other development practices and
                                workflows I use while building
                                web applications.
                            </p>

                        </div>

                        <motion.div
                            variants={sectionVariants}
                            className="
                                flex
                                flex-1
                                flex-wrap
                                gap-2
                                lg:justify-end
                            "
                        >

                            {additionalSkills.map((tag) => (
                                <motion.span
                                    key={tag}
                                    variants={fadeUpVariants}
                                    whileHover={
                                        shouldReduceMotion
                                            ? {}
                                            : {
                                                y: -3,
                                                transition: {
                                                    duration: 0.2,
                                                },
                                            }
                                    }
                                    className="
                                        rounded-full
                                        border
                                        border-[var(--color-border)]
                                        bg-[#091827]
                                        px-4
                                        py-2
                                        text-xs
                                        font-medium
                                        text-[var(--color-text)]
                                        transition-all
                                        duration-300
                                        hover:border-[var(--color-brand)]
                                        hover:bg-[var(--color-brand)]/10
                                        hover:text-white
                                        sm:text-sm
                                    "
                                >
                                    {tag}
                                </motion.span>
                            ))}

                        </motion.div>

                    </div>

                </motion.div>

                {/* BOTTOM CTA */}

                <motion.div
                    variants={fadeUpVariants}
                    className="
                        mt-7
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-5
                        rounded-2xl
                        border
                        border-[var(--color-border)]
                        bg-[var(--color-surface)]/70
                        p-5
                        text-center
                        sm:mt-9
                        sm:flex-row
                        sm:p-6
                        sm:text-left
                    "
                >

                    <div>

                        <h3
                            className="
                                font-heading
                                text-base
                                font-semibold
                                text-white
                                sm:text-lg
                            "
                        >
                            Have a project in mind?
                        </h3>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-[var(--color-text-muted)]
                            "
                        >
                            Let's build something meaningful together.
                        </p>

                    </div>

                    <a
                        href="#contact"
                        className="
                            btn-primary
                            inline-flex
                            shrink-0
                            items-center
                            justify-center
                            gap-2
                            text-sm
                        "
                    >
                        Let's Connect

                        <ArrowUpRight size={17} />
                    </a>

                </motion.div>

            </div>

        </motion.section>
    );
};

export default Skills;
