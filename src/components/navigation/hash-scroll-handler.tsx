"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function HashScrollHandler() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        const id = hash.replace("#", "");

        const scrollToElement = () => {
            const element = document.getElementById(id);
            if (!element) return;

            const offset = 112;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        };

        // Wait for full page load (fonts + images) then scroll
        if (document.readyState === "complete") {
            // Page already loaded — small buffer for React paint
            setTimeout(scrollToElement, 100);
        } else {
            window.addEventListener("load", () => setTimeout(scrollToElement, 100), { once: true });
        }

        // Fallback poll: handles cases where elements mount after load
        let attempts = 0;
        const poll = setInterval(() => {
            if (document.getElementById(id)) {
                clearInterval(poll);
                scrollToElement();
            } else if (++attempts >= 20) {
                clearInterval(poll);
            }
        }, 150);

        return () => clearInterval(poll);
    }, [pathname, searchParams]);

    return null;
}
