import {
    Briefcase,
    GraduationCap,
    Award,
    CalendarDays,
    MapPin,
    ArrowUpRight,
    Building2,
    Clock3,
} from "lucide-react";

import {
    motion,
    useReducedMotion,
} from "framer-motion";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const createAnimations = (reduceMotion) => ({
    fadeUp: {
        hidden: {
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 30,
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

    fadeLeft: {
        hidden: {
            opacity: reduceMotion ? 1 : 0,
            x: reduceMotion ? 0 : -25,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    },

    scaleIn: {
        hidden: {
            opacity: reduceMotion ? 1 : 0,
            scale: reduceMotion ? 1 : 0.85,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    },

    stagger: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: reduceMotion ? 0 : 0.15,
            },
        },
    },

    card: {
        hidden: {
            opacity: reduceMotion ? 1 : 0,
            y: reduceMotion ? 0 : 35,
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
});

/* =========================================================
   EXPERIENCE DATA
========================================================= */

const jobs = [
    {
        role: "Full Stack Developer Intern",
        company: "Logixhunt Pvt. Ltd.",
        place: "Bhilai, C.G. (Flexible)",
        period: "March 2026 – Present",
        current: true,
        points: [
            "Developed LogicGyan using React.js with course listings, enquiry forms and responsive layouts.",
            "Contributed to KushalApp, including service listings, booking and provider dashboard.",
            "Improved UI, fixed bugs and optimized cross-browser compatibility.",
        ],
    },
    {
        role: "Frontend Developer",
        company: "Atmik Bharat Pvt. Ltd. (Meta Business Partner)",
        place: "Bhilai, C.G. (Full-time)",
        period: "May 2025 – Oct 2025",
        current: false,
        points: [
            "Developed Vertex Suite platform using React.js for WhatsApp integrations.",
            "Integrated REST APIs and webhooks to automate business workflows.",
            "Worked with Node.js, MongoDB and responsive UI development.",
        ],
    },
    {
        role: "Software Trainee (Full Stack Intern)",
        company: "Ravi Solutions Pvt. Ltd.",
        place: "Durg, C.G.",
        period: "March 2024 – September 2024",
        current: false,
        points: [
            "Developed Doctor Consultancy, E-Housing and Student Management projects.",
            "Implemented MySQL databases and CRUD operations using PHP.",
            "Built responsive interfaces and supported testing and debugging.",
        ],
    },
];

/* =========================================================
   EDUCATION DATA
========================================================= */

const education = [
    {
        title: "MCA",
        org: "Rungta College of Engineering & Technology, CSVTU",
        year: "2022 – 2024",
    },
    {
        title: "Graduate Eligibility",
        org: "Hemchand Yadav University, Bhilai",
        year: "2020 – 2022",
    },
    {
        title: "Diploma in Computer Application",
        org: "Tata Institute of Social Sciences, Mumbai University",
        year: "2020",
    },
];

/* =========================================================
   CERTIFICATION DATA
========================================================= */

const certs = [
    {
        title: "Web Development",
        org: "Great Learning, MindLuster",
    },
    {
        title: "Software Trainee Internship",
        org: "Ravi Solutions (Mar 2024 – Sep 2024)",
    },
];

/* =========================================================
   EXPERIENCE CARD
========================================================= */

const ExperienceCard = ({
    job,
    index,
    animations,
}) => {
    return (
        <motion.article
            variants={animations.card}
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--color-brand)]/60
                hover:shadow-[var(--shadow-card-hover)]
                sm:p-5
                lg:p-5
            "
        >
            {/* Subtle Background Accent */}

            <motion.div
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-[var(--color-brand)]/5
                    blur-3xl
                    transition
                    duration-500
                    group-hover:bg-[var(--color-brand)]/10
                "
            />

            <div className="relative">

                {/* Card Header */}

                <div
                    className="
                        flex
                        flex-wrap
                        items-start
                        justify-between
                        gap-3
                    "
                >
                    <div className="min-w-0">

                        <span
                            className="
                                mb-2
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-background)]/60
                                px-2.5
                                py-1
                                text-[9px]
                                font-semibold
                                tracking-wider
                                text-[var(--color-accent)]
                                uppercase
                            "
                        >
                            <Briefcase size={11} />
                            Experience 0{index + 1}
                        </span>

                        <h3
                            className="
                                font-heading
                                text-base
                                font-bold
                                leading-snug
                                text-white
                                sm:text-lg
                            "
                        >
                            {job.role}
                        </h3>

                        <p
                            className="
                                mt-1.5
                                flex
                                flex-wrap
                                items-center
                                gap-1.5
                                text-xs
                                font-semibold
                                text-[var(--color-accent)]
                                sm:text-sm
                            "
                        >
                            <Building2 size={14} />
                            {job.company}
                        </p>

                    </div>

                    {job.current && (
                        <span
                            className="
                                inline-flex
                                w-fit
                                shrink-0
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-emerald-400/30
                                bg-emerald-400/10
                                px-2.5
                                py-1
                                text-[10px]
                                font-semibold
                                text-emerald-300
                            "
                        >
                            <span
                                className="
                                    h-1.5
                                    w-1.5
                                    animate-pulse
                                    rounded-full
                                    bg-emerald-400
                                "
                            />

                            Current
                        </span>
                    )}
                </div>

                {/* Job Meta Information */}

                <div
                    className="
                        mt-3
                        flex
                        flex-wrap
                        gap-x-4
                        gap-y-2
                        border-y
                        border-[var(--color-border)]/70
                        py-2.5
                    "
                >
                    <span
                        className="
                            flex
                            items-center
                            gap-1.5
                            text-[11px]
                            text-[var(--color-text-muted)]
                            sm:text-xs
                        "
                    >
                        <CalendarDays
                            size={13}
                            className="
                                shrink-0
                                text-[var(--color-brand)]
                            "
                        />

                        {job.period}
                    </span>

                    <span
                        className="
                            flex
                            items-center
                            gap-1.5
                            text-[11px]
                            text-[var(--color-text-muted)]
                            sm:text-xs
                        "
                    >
                        <MapPin
                            size={13}
                            className="
                                shrink-0
                                text-[var(--color-brand)]
                            "
                        />

                        {job.place}
                    </span>
                </div>

                {/* Responsibilities */}

                <div className="mt-3">

                    <p
                        className="
                            mb-2
                            text-[10px]
                            font-bold
                            tracking-widest
                            text-white/80
                            uppercase
                        "
                    >
                        Key Contributions
                    </p>

                    <ul className="space-y-1.5">

                        {job.points.map((point) => (
                            <li
                                key={point}
                                className="
                                    flex
                                    items-start
                                    gap-2.5
                                    text-xs
                                    leading-relaxed
                                    text-[var(--color-text-muted)]
                                    sm:text-[13px]
                                "
                            >
                                <span
                                    className="
                                        mt-[6px]
                                        h-1.5
                                        w-1.5
                                        shrink-0
                                        rounded-full
                                        bg-[var(--color-brand)]
                                        shadow-[0_0_8px_var(--color-brand)]
                                    "
                                />

                                <span>{point}</span>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </motion.article>
    );
};

/* =========================================================
   EDUCATION CARD
========================================================= */

const EducationCard = ({
    item,
    animations,
}) => {
    return (
        <motion.article
            variants={animations.card}
            className="
                group
                rounded-xl
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-3
                transition-all
                duration-300
                hover:border-[var(--color-brand)]/60
                hover:bg-[var(--color-surface-alt)]
                sm:p-4
            "
        >
            <div
                className="
                    flex
                    items-start
                    gap-3
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
                        border
                        border-[var(--color-brand)]/20
                        bg-[var(--color-brand)]/10
                        text-[var(--color-accent)]
                        transition
                        group-hover:bg-[var(--color-brand)]/20
                    "
                >
                    <GraduationCap size={18} />
                </span>

                <div className="min-w-0 flex-1">

                    <h4
                        className="
                            text-xs
                            font-bold
                            leading-snug
                            text-white
                            sm:text-sm
                        "
                    >
                        {item.title}
                    </h4>

                    <p
                        className="
                            mt-1
                            text-[11px]
                            leading-relaxed
                            text-[var(--color-text-muted)]
                        "
                    >
                        {item.org}
                    </p>

                    <span
                        className="
                            mt-2
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-md
                            bg-[var(--color-background)]
                            px-2
                            py-1
                            text-[10px]
                            font-semibold
                            text-[var(--color-accent)]
                        "
                    >
                        <CalendarDays size={11} />
                        {item.year}
                    </span>

                </div>
            </div>
        </motion.article>
    );
};

/* =========================================================
   CERTIFICATION CARD
========================================================= */

const CertificationCard = ({
    item,
    animations,
}) => {
    return (
        <motion.article
            variants={animations.card}
            className="
                group
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-[var(--color-border)]
                bg-[var(--color-surface)]
                p-3
                transition-all
                duration-300
                hover:border-[var(--color-brand)]/60
                hover:bg-[var(--color-surface-alt)]
                sm:p-4
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
                    border
                    border-[var(--color-brand)]/20
                    bg-[var(--color-brand)]/10
                    text-[var(--color-accent)]
                    transition
                    group-hover:bg-[var(--color-brand)]/20
                "
            >
                <Award size={18} />
            </span>

            <div className="min-w-0 flex-1">

                <h4
                    className="
                        text-xs
                        font-bold
                        leading-snug
                        text-white
                        sm:text-sm
                    "
                >
                    {item.title}
                </h4>

                <p
                    className="
                        mt-1
                        text-[11px]
                        leading-relaxed
                        text-[var(--color-text-muted)]
                    "
                >
                    {item.org}
                </p>

            </div>

            <ArrowUpRight
                size={15}
                className="
                    hidden
                    shrink-0
                    text-[var(--color-text-muted)]
                    transition
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[var(--color-accent)]
                    sm:block
                "
            />
        </motion.article>
    );
};

/* =========================================================
   MAIN EXPERIENCE SECTION
========================================================= */

const Experience = () => {

    const reduceMotion = useReducedMotion();

    const animations = createAnimations(reduceMotion);

    return (
        <section
            id="experience"
            className="
                section-spacing
                relative
                isolate
                overflow-hidden
            "
        >

            {/* Background Decorations */}

            <motion.div
                animate={
                    reduceMotion
                        ? {}
                        : {
                            y: [0, 25, 0],
                            x: [0, -15, 0],
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
                    -right-40
                    top-20
                    h-[350px]
                    w-[350px]
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
                            x: [0, 15, 0],
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
                    -left-40
                    bottom-20
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
                    variants={animations.stagger}
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
                        variants={animations.fadeUp}
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
                        <Clock3 size={13} />
                        My Journey
                    </motion.span>

                    <motion.h2
                        variants={animations.fadeUp}
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
                        Work{" "}

                        <span
                            className="
                                hero-name-animation
                                text-[var(--color-brand)]
                            "
                        >
                            Experience
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={animations.fadeUp}
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
                        A journey of learning, building real-world projects,
                        and growing through professional experiences.
                    </motion.p>

                </motion.div>

                {/* =================================================
                    EXPERIENCE TIMELINE
                ================================================= */}

                <div
                    className="
                        relative
                        mx-auto
                        mt-10
                        max-w-5xl
                        sm:mt-12
                    "
                >

                    {/* Timeline Line */}

                    <motion.div
                        initial={{
                            scaleY: reduceMotion ? 1 : 0,
                        }}
                        whileInView={{
                            scaleY: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        transition={{
                            duration: 1.3,
                            ease: "easeInOut",
                        }}
                        style={{
                            transformOrigin: "top",
                        }}
                        className="
                            absolute
                            bottom-8
                            left-[19px]
                            top-6
                            w-px
                            bg-gradient-to-b
                            from-[var(--color-brand)]
                            via-[var(--color-border)]
                            to-transparent
                            sm:left-[23px]
                        "
                    />

                    <motion.div
                        variants={animations.stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.08,
                        }}
                        className="
                            space-y-5
                            sm:space-y-6
                        "
                    >

                        {jobs.map((job, index) => (
                            <motion.div
                                key={job.company}
                                variants={animations.fadeLeft}
                                className="
                                    relative
                                    pl-12
                                    sm:pl-16
                                "
                            >

                                {/* Timeline Node */}

                                <motion.span
                                    variants={animations.scaleIn}
                                    className="
                                        absolute
                                        left-0
                                        top-4
                                        z-10
                                        grid
                                        h-10
                                        w-10
                                        place-items-center
                                        rounded-full
                                        border
                                        border-[var(--color-brand)]/60
                                        bg-[var(--color-background)]
                                        text-[var(--color-accent)]
                                        shadow-[0_0_20px_rgba(59,130,246,0.12)]
                                        sm:h-12
                                        sm:w-12
                                    "
                                >
                                    <Briefcase size={18} />
                                </motion.span>

                                <ExperienceCard
                                    job={job}
                                    index={index}
                                    animations={animations}
                                />

                            </motion.div>
                        ))}

                    </motion.div>
                </div>

                {/* =================================================
                    EDUCATION + CERTIFICATIONS
                ================================================= */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    variants={animations.stagger}
                    className="
                        mx-auto
                        mt-16
                        max-w-5xl
                        sm:mt-20
                    "
                >

                    {/* Subsection Heading */}

                    <motion.div
                        variants={animations.fadeUp}
                        className="mb-6"
                    >

                        <span
                            className="
                                text-[10px]
                                font-bold
                                tracking-[0.2em]
                                text-[var(--color-accent)]
                                uppercase
                            "
                        >
                            Academic Background
                        </span>

                        <h3
                            className="
                                mt-2
                                font-heading
                                text-2xl
                                font-bold
                                text-white
                                sm:text-3xl
                            "
                        >
                            Education &{" "}

                            <span
                                className="
                                    text-[var(--color-brand)]
                                "
                            >
                                Certifications
                            </span>
                        </h3>

                        <p
                            className="
                                mt-2
                                max-w-xl
                                text-xs
                                leading-6
                                text-[var(--color-text-muted)]
                                sm:text-sm
                            "
                        >
                            My academic foundation and professional learning.
                        </p>

                    </motion.div>

                    {/* Two Column Bento Layout */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-5
                            lg:grid-cols-2
                            lg:gap-6
                        "
                    >

                        {/* Education */}

                        <motion.div
                            variants={animations.fadeUp}
                            className="
                                rounded-2xl
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-surface)]/50
                                p-3
                                sm:p-5
                            "
                        >

                            <div
                                className="
                                    mb-4
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <span
                                    className="
                                        grid
                                        h-10
                                        w-10
                                        place-items-center
                                        rounded-xl
                                        bg-[var(--color-brand)]/15
                                        text-[var(--color-accent)]
                                    "
                                >
                                    <GraduationCap size={21} />
                                </span>

                                <div>

                                    <h4
                                        className="
                                            font-heading
                                            text-base
                                            font-bold
                                            text-white
                                        "
                                    >
                                        Education
                                    </h4>

                                    <p
                                        className="
                                            mt-0.5
                                            text-[11px]
                                            text-[var(--color-text-muted)]
                                        "
                                    >
                                        Academic qualifications
                                    </p>

                                </div>
                            </div>

                            <motion.div
                                variants={animations.stagger}
                                className="space-y-2.5"
                            >

                                {education.map((item) => (
                                    <EducationCard
                                        key={item.title}
                                        item={item}
                                        animations={animations}
                                    />
                                ))}

                            </motion.div>

                        </motion.div>

                        {/* Certifications */}

                        <motion.div
                            variants={animations.fadeUp}
                            className="
                                rounded-2xl
                                border
                                border-[var(--color-border)]
                                bg-[var(--color-surface)]/50
                                p-3
                                sm:p-5
                            "
                        >

                            <div
                                className="
                                    mb-4
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <span
                                    className="
                                        grid
                                        h-10
                                        w-10
                                        place-items-center
                                        rounded-xl
                                        bg-[var(--color-brand)]/15
                                        text-[var(--color-accent)]
                                    "
                                >
                                    <Award size={20} />
                                </span>

                                <div>

                                    <h4
                                        className="
                                            font-heading
                                            text-base
                                            font-bold
                                            text-white
                                        "
                                    >
                                        Certifications
                                    </h4>

                                    <p
                                        className="
                                            mt-0.5
                                            text-[11px]
                                            text-[var(--color-text-muted)]
                                        "
                                    >
                                        Courses & achievements
                                    </p>

                                </div>
                            </div>

                            <motion.div
                                variants={animations.stagger}
                                className="space-y-2.5"
                            >

                                {certs.map((item) => (
                                    <CertificationCard
                                        key={item.title}
                                        item={item}
                                        animations={animations}
                                    />
                                ))}

                            </motion.div>

                            {/* Certification Note */}

                            <motion.div
                                variants={animations.fadeUp}
                                className="
                                    mt-3
                                    flex
                                    items-start
                                    gap-2.5
                                    rounded-xl
                                    border
                                    border-[var(--color-brand)]/20
                                    bg-[var(--color-brand)]/5
                                    p-3
                                "
                            >

                                <Award
                                    size={15}
                                    className="
                                        mt-0.5
                                        shrink-0
                                        text-[var(--color-accent)]
                                    "
                                />

                                <p
                                    className="
                                        text-[11px]
                                        leading-5
                                        text-[var(--color-text-muted)]
                                    "
                                >
                                    Continuously learning and improving
                                    technical skills through practical work.
                                </p>

                            </motion.div>

                        </motion.div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Experience;