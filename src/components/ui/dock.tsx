/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import {
    TbLayoutNavbarCollapseFilled,
    TbLayoutNavbarExpandFilled,
} from "react-icons/tb";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: {
        title: string;
        icon: React.ReactNode;
        activeIcon: React.ReactNode;
        href: string;
    }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    const pathname = usePathname();
    return (
        <>
            <FloatingDockDesktop
                items={items}
                className={desktopClassName}
                pathname={pathname}
            />
            <FloatingDockMobile
                items={items}
                className={mobileClassName}
                pathname={pathname}
            />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
    pathname,
}: {
    items: {
        title: string;
        icon: React.ReactNode;
        activeIcon: React.ReactNode;
        href: string;
    }[];
    className?: string;
    pathname: string;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={cn(
                "fixed bottom-2 right-2 z-50 block md:hidden",
                className
            )}
        >
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => {
                            const isActive = pathname === item.href;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: 10,
                                        transition: {
                                            delay: idx * 0.05,
                                        },
                                    }}
                                    transition={{
                                        delay: (items.length - 1 - idx) * 0.05,
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        key={item.title}
                                        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                                    >
                                        <div className="h-4 w-4">
                                            {isActive
                                                ? item.activeIcon
                                                : item.icon}
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
            >
                {open ? (
                    <TbLayoutNavbarExpandFilled className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                ) : (
                    <TbLayoutNavbarCollapseFilled className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
                )}
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
    pathname,
}: {
    items: {
        title: string;
        icon: React.ReactNode;
        activeIcon: React.ReactNode;
        href: string;
    }[];
    className?: string;
    pathname: string;
}) => {
    const mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "fixed bottom-2 left-1/2 -translate-x-1/2 hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 z-50",
                className
            )}
        >
            {items.map((item) => {
                return (
                    <IconContainer
                        mouseX={mouseX}
                        key={item.title}
                        {...item}
                        isActive={pathname === item.href}
                    />
                );
            })}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    activeIcon,
    href,
    isActive,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    activeIcon: React.ReactNode;
    href: string;
    isActive: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? {
            x: 0,
            width: 0,
        };

        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(
        distance,
        [-150, 0, 150],
        [40, 80, 40]
    );

    const widthTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20]
    );
    const heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20]
    );

    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center"
                >
                    {isActive ? activeIcon : icon}
                </motion.div>
            </motion.div>
        </Link>
    );
}
