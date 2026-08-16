 
import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = DATA.name;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

const getFontData = async () => {
    try {
        const [cabinetGrotesk, clashDisplay] = await Promise.all([
            fetch(
                new URL("../../public/fonts/CabinetGrotesk-Medium.ttf", import.meta.url)
            ).then((res) => res.arrayBuffer()),
            fetch(
                new URL("../../public/fonts/ClashDisplay-Semibold.ttf", import.meta.url)
            ).then((res) => res.arrayBuffer()),
        ]);
        return { cabinetGrotesk, clashDisplay };
    } catch (error) {
        console.error("Failed to load fonts:", error);
        return null;
    }
};

export default async function Image() {
    try {
        const fontData = await getFontData();
        const imageUrl = DATA.avatarUrl
            ? new URL(DATA.avatarUrl, DATA.url).toString()
            : undefined;

        const ogDescription = "Software Engineer at TCS specializing in AI-driven automation, backend systems, and scalable cloud architectures. Creator of Nexiuo.";

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor: "#0F131A", // Deep Material Tonal Surface
                        padding: "56px",
                        position: "relative",
                    }}
                >
                    {/* Ambient Warm Accent Glows */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-100px",
                            right: "-100px",
                            width: "600px",
                            height: "600px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(66, 133, 244, 0.15) 0%, transparent 70%)",
                            display: "flex",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-100px",
                            left: "-100px",
                            width: "500px",
                            height: "500px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(52, 168, 83, 0.12) 0%, transparent 70%)",
                            display: "flex",
                        }}
                    />

                    {/* Top Header: Brand & Google Spectrum Accent */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {/* Custom Domain Pill */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                backgroundColor: "#1D2432",
                                padding: "10px 20px",
                                borderRadius: "100px",
                                border: "1px solid rgba(255, 255, 255, 0.08)",
                            }}
                        >
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#34A853" }} />
                            <span style={{ color: "#E1E2E9", fontSize: "18px", fontWeight: 600, fontFamily: "Cabinet Grotesk" }}>
                                katkar.in
                            </span>
                        </div>

                        {/* Google Four-Color Signature Dots */}
                        <div style={{ display: "flex", gap: "8px" }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4285F4" }} />
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#EA4335" }} />
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#FBBC05" }} />
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#34A853" }} />
                        </div>
                    </div>

                    {/* Middle Main Content */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
                            {/* Expressive Material Role Chips */}
                            <div style={{ display: "flex", gap: "12px" }}>
                                <div
                                    style={{
                                        backgroundColor: "#2B3448",
                                        color: "#D3E3FD",
                                        padding: "8px 18px",
                                        borderRadius: "12px",
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        fontFamily: "Cabinet Grotesk",
                                    }}
                                >
                                    Software Engineer
                                </div>
                                <div
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                                        color: "#C4C6D0",
                                        padding: "8px 18px",
                                        borderRadius: "12px",
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        border: "1px solid rgba(255, 255, 255, 0.1)",
                                        fontFamily: "Cabinet Grotesk",
                                    }}
                                >
                                    Builder
                                </div>
                            </div>

                            {/* Typography: Bold Title */}
                            <h1
                                style={{
                                    fontSize: "68px",
                                    fontWeight: 800,
                                    color: "#F0F4F9",
                                    margin: 0,
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.05,
                                    fontFamily: "Clash Display",
                                }}
                            >
                                {DATA.name}
                            </h1>

                            {/* Humanized Bio */}
                            <p
                                style={{
                                    fontSize: "22px",
                                    color: "#C4C6D0",
                                    margin: 0,
                                    lineHeight: 1.4,
                                    fontWeight: 400,
                                    fontFamily: "Cabinet Grotesk",
                                }}
                            >
                                {ogDescription}
                            </p>
                        </div>

                        {/* Expressive Squircle Profile Frame */}
                        {imageUrl && (
                            <div
                                style={{
                                    width: "210px",
                                    height: "210px",
                                    borderRadius: "48px", // Material Expressive Squircle
                                    backgroundColor: "#1E2430",
                                    padding: "8px",
                                    display: "flex",
                                    boxShadow: "0 16px 32px rgba(0, 0, 0, 0.4)",
                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                }}
                            >
                                <img
                                    src={imageUrl}
                                    alt={DATA.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "40px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Bottom Footer Metadata */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                            paddingTop: "24px",
                            color: "#8E919E",
                            fontSize: "18px",
                            fontWeight: 500,
                            fontFamily: "Cabinet Grotesk",
                        }}
                    >
                        <span>github.com/dishapatel010</span>
                        <span style={{ color: "#E1E2E9", fontWeight: 600 }}>Portfolio 2026</span>
                    </div>
                </div>
            ),
            {
                ...size,
                fonts: fontData
                    ? [
                        {
                            name: "Cabinet Grotesk",
                            data: fontData.cabinetGrotesk,
                            weight: 400,
                            style: "normal",
                        },
                        {
                            name: "Cabinet Grotesk",
                            data: fontData.cabinetGrotesk,
                            weight: 700,
                            style: "normal",
                        },
                        {
                            name: "Clash Display",
                            data: fontData.clashDisplay,
                            weight: 600,
                            style: "normal",
                        },
                    ]
                    : undefined,
            }
        );
    } catch (error) {
        console.error("Error generating OpenGraph image:", error);
        return new Response(
            `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
            {
                status: 500,
            }
        );
    }
}


