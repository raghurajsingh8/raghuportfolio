import React, { useEffect } from "react";

const GoogleAd = ({ slot, width = "100%", height = "250px" }) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error:", e);
        }
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
            <ins
                className="adsbygoogle"
                style={{ display: "block", width, height }}
                data-ad-client="ca-pub-4222399807419686"
                data-ad-slot={slot}
                data-ad-format="auto"
            />
        </div>
    );
};

export default GoogleAd;
