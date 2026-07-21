import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./preipo.css";

const DESCRIPTION = "Explore a personalized educational plan for managing concentrated stock, liquidity, diversification, and tax considerations.";

const PreIPO = () => {
    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) return undefined;

        const originalDescription = metaDescription.getAttribute("content");
        metaDescription.setAttribute("content", DESCRIPTION);

        return () => {
            if (originalDescription) {
                metaDescription.setAttribute("content", originalDescription);
            }
        };
    }, []);

    return (
        <main className="preipo-page">
            <Helmet>
                <title>Your Inflection Plan | Inflection Capital Management</title>
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://www.inflectioncm.com/preipo" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Your Inflection Plan | Inflection Capital Management" />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:url" content="https://www.inflectioncm.com/preipo" />
            </Helmet>
            <iframe
                className="preipo-page__tool"
                src="/preipo-tool.html"
                title="Inflection concentrated stock planning tool"
                allow="clipboard-write"
            />
        </main>
    );
};

export default PreIPO;
