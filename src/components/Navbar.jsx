import { useState, useEffect } from "react";
import { Download } from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const links = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
];

const CV_FILE = "/Rojalin_Behera_FullStack_Developer_CV.pdf";

const DESKTOP_QUERY = "(min-width: 1024px)";

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [hovered, setHovered] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const closeMenu = () => setOpen(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    /* =====================================================
       SCROLL DETECTION
    ===================================================== */

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        onScroll();

        window.addEventListener("scroll", onScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    /* =====================================================
       ACTIVE SECTION DETECTION
    ===================================================== */

    useEffect(() => {
        const sections = links
            .map((link) => document.getElementById(link.href))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActive(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-30% 0px -55% 0px",
                threshold: [0, 0.1, 0.25, 0.5],
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    /* =====================================================
       MENU CLICK HANDLER
    ===================================================== */

    const handleNavigation = (sectionId) => {
        setActive(sectionId);
        setHovered(null);
        closeMenu();

        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    /* =====================================================
       LOCK BODY SCROLL
    ===================================================== */

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    /* =====================================================
       CLOSE MENU ON ESCAPE
    ===================================================== */

    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    /* =====================================================
       CLOSE MENU ON DESKTOP RESIZE
    ===================================================== */

    useEffect(() => {
        const mq = window.matchMedia(DESKTOP_QUERY);

        const onChange = (e) => {
            if (e.matches) {
                closeMenu();
            }
        };

        mq.addEventListener("change", onChange);

        return () => {
            mq.removeEventListener("change", onChange);
        };
    }, []);

    /* =====================================================
       ACTIVE LINK CLASS
    ===================================================== */

    const getLinkClass = (sectionId) => {
        const isActive = active === sectionId;
        const isHovered = hovered === sectionId;

        return `
            relative
            whitespace-nowrap
            text-sm
            font-medium
            transition-colors
            duration-300
            ${isActive || isHovered
                ? "text-[var(--color-brand)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-brand)]"
            }
        `;
    };

    const getUnderlineClass = (sectionId) => {
        const isActive = active === sectionId;
        const isHovered = hovered === sectionId;

        return `
            absolute
            -bottom-1.5
            left-0
            h-0.5
            rounded-full
            bg-[var(--color-brand)]
            transition-all
            duration-300
            ${isActive || isHovered
                ? "w-full"
                : "w-0"
            }
        `;
    };

    return (
        <header
            className="
                fixed
                inset-x-0
                top-2
                z-[200]
                px-2
                min-[400px]:px-3
                sm:top-4
                sm:px-4
            "
        >
            {/* =================================================
                BACKDROP
            ================================================= */}

            <div
                onClick={closeMenu}
                aria-hidden="true"
                className={`
                    fixed
                    inset-0
                    -z-10
                    bg-black/50
                    backdrop-blur-sm
                    transition-opacity
                    duration-300
                    lg:hidden
                    ${open
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }
                `}
            />

            {/* =================================================
                MAIN NAVBAR
            ================================================= */}

            <nav
                className={`
                    mx-auto
                    flex
                    w-full
                    max-w-[1200px]
                    items-center
                    justify-between
                    gap-2
                    rounded-full
                    border
                    px-2.5
                    py-2
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    sm:gap-3
                    sm:px-4
                    sm:py-2.5
                    lg:px-5
                    lg:py-3
                    ${scrolled || open
                        ? "border-[var(--color-border)] bg-[#0b1b2b]/90 shadow-[var(--shadow-card)]"
                        : "border-[var(--color-border)]/60 bg-[#0b1b2b]/60"
                    }
                `}
            >
                {/* Logo */}

                <a
                    href="#home"
                    onClick={() => handleNavigation("home")}
                    className="
                        flex
                        min-w-0
                        shrink
                        items-center
                        gap-2
                    "
                >
                    <span
                        className="
                            grid
                            h-8
                            w-8
                            shrink-0
                            place-items-center
                            rounded-lg
                            bg-[var(--color-brand)]
                            font-heading
                            text-xs
                            font-bold
                            text-white
                            sm:h-9
                            sm:w-9
                            sm:text-sm
                        "
                    >
                        RB
                    </span>

                    <span
                        className="
                            min-w-0
                            truncate
                            font-heading
                            text-sm
                            font-semibold
                            text-white
                            min-[400px]:text-base
                            sm:text-lg
                        "
                    >
                        Rojalin
                        <span className="text-[var(--color-accent)]">
                            Behera
                        </span>
                    </span>
                </a>

                {/* =================================================
                    DESKTOP NAVIGATION
                ================================================= */}

                <ul
                    className="
                        hidden
                        shrink-0
                        items-center
                        gap-5
                        lg:flex
                        xl:gap-8
                    "
                >
                    {links.map((link) => {
                        const sectionId = link.href;
                        const isActive = active === sectionId;

                        return (
                            <li key={link.name}>
                                <a
                                    href={`#${sectionId}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation(sectionId);
                                    }}
                                    onMouseEnter={() =>
                                        setHovered(sectionId)
                                    }
                                    onMouseLeave={() =>
                                        setHovered(null)
                                    }
                                    className={getLinkClass(sectionId)}
                                    aria-current={
                                        isActive ? "location" : undefined
                                    }
                                >
                                    {link.name}

                                    <span
                                        className={getUnderlineClass(
                                            sectionId
                                        )}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* =================================================
                    DESKTOP CV BUTTON
                ================================================= */}

                <a
                    href={CV_FILE}
                    download
                    className="
                        btn-primary
                        hidden!
                        min-h-[40px]!
                        shrink-0
                        whitespace-nowrap
                        rounded-full!
                        px-4!
                        py-2!
                        text-sm
                        lg:inline-flex!
                        xl:px-5!
                    "
                >
                    <Download size={16} />
                    Download CV
                </a>

                {/* =================================================
                    HAMBURGER BUTTON
                ================================================= */}

                <button
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="
                        relative
                        grid
                        h-10
                        w-10
                        shrink-0
                        place-items-center
                        rounded-full
                        text-white
                        transition-colors
                        duration-300
                        hover:bg-white/10
                        lg:hidden
                    "
                >
                    <span className="relative block h-4 w-5">
                        <span
                            className={`
                                absolute
                                left-0
                                block
                                h-0.5
                                w-5
                                rounded-full
                                bg-current
                                transition-all
                                duration-300
                                ${open
                                    ? "top-1/2 -translate-y-1/2 rotate-45"
                                    : "top-0"
                                }
                            `}
                        />

                        <span
                            className={`
                                absolute
                                top-1/2
                                left-0
                                block
                                h-0.5
                                w-5
                                -translate-y-1/2
                                rounded-full
                                bg-current
                                transition-all
                                duration-300
                                ${open
                                    ? "scale-x-0 opacity-0"
                                    : "opacity-100"
                                }
                            `}
                        />

                        <span
                            className={`
                                absolute
                                left-0
                                block
                                h-0.5
                                w-5
                                rounded-full
                                bg-current
                                transition-all
                                duration-300
                                ${open
                                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                                    : "bottom-0"
                                }
                            `}
                        />
                    </span>
                </button>
            </nav>

            {/* =================================================
                MOBILE / TABLET MENU
            ================================================= */}

            <div
                id="mobile-menu"
                className={`
                    mx-auto
                    mt-2
                    grid
                    w-full
                    max-w-[1200px]
                    rounded-3xl
                    border
                    bg-[#0b1b2b]/95
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    lg:hidden
                    ${open
                        ? "grid-rows-[1fr] translate-y-0 border-[var(--color-border)] opacity-100"
                        : "pointer-events-none grid-rows-[0fr] -translate-y-3 border-transparent opacity-0"
                    }
                `}
            >
                <div className="min-h-0 overflow-hidden">
                    <ul
                        className="
                            flex
                            max-h-[calc(100dvh-6rem)]
                            flex-col
                            gap-1
                            overflow-y-auto
                            p-3
                            sm:p-4
                        "
                    >
                        {links.map((link, index) => {
                            const sectionId = link.href;
                            const isActive = active === sectionId;

                            return (
                                <li
                                    key={link.name}
                                    style={{
                                        transitionDelay: open
                                            ? `${index * 40 + 100}ms`
                                            : "0ms",
                                    }}
                                    className={`
                                        transition-all
                                        duration-300
                                        ${open
                                            ? "translate-y-0 opacity-100"
                                            : "-translate-y-2 opacity-0"
                                        }
                                    `}
                                >
                                    <a
                                        href={`#${sectionId}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation(sectionId);
                                        }}
                                        onMouseEnter={() =>
                                            setHovered(sectionId)
                                        }
                                        onMouseLeave={() =>
                                            setHovered(null)
                                        }
                                        aria-current={
                                            isActive
                                                ? "location"
                                                : undefined
                                        }
                                        className={`
                                            relative
                                            block
                                            rounded-xl
                                            border-b-2
                                            px-4
                                            py-3
                                            text-sm
                                            font-medium
                                            transition-all
                                            duration-300
                                            sm:text-base
                                            ${isActive
                                                ? "border-[var(--color-brand)] bg-[var(--color-brand)]/10 text-[var(--color-brand)]"
                                                : "border-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand)]"
                                            }
                                        `}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}

                        {/* Mobile CV Button */}

                        <li
                            style={{
                                transitionDelay: open
                                    ? `${links.length * 40 + 100}ms`
                                    : "0ms",
                            }}
                            className={`
                                pt-2
                                transition-all
                                duration-300
                                ${open
                                    ? "translate-y-0 opacity-100"
                                    : "-translate-y-2 opacity-0"
                                }
                            `}
                        >
                            <a
                                href={CV_FILE}
                                download
                                onClick={closeMenu}
                                className="
                                    btn-primary
                                    w-full
                                    rounded-xl!
                                "
                            >
                                <Download size={16} />
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
