 
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

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#030712",
                        backgroundImage: "linear-gradient(135deg, #090e1a 0%, #030712 100%)",
                        position: "relative",
                        padding: "50px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* Background Ambient Glows */}
                    <div
                        style={{
                            position: "absolute",
                            right: "-100px",
                            bottom: "-100px",
                            width: "500px",
                            height: "500px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0) 70%)",
                            filter: "blur(60px)",
                            display: "flex",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: "-150px",
                            top: "-150px",
                            width: "500px",
                            height: "500px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(99, 102, 241, 0) 70%)",
                            filter: "blur(60px)",
                            display: "flex",
                        }}
                    />

                    {/* Outer Panel Grid Border */}
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "rgba(15, 23, 42, 0.3)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "24px",
                            padding: "60px",
                            position: "relative",
                        }}
                    >
                        {/* Left Content Side */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                                flex: "1",
                                paddingRight: "40px",
                            }}
                        >
                            {/* Role / Tag */}
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "#38bdf8",
                                        marginBottom: "24px",
                                        fontFamily: "Cabinet Grotesk",
                                    }}
                                >
                                    TCSer & Software Engineer
                                </div>
                                <div
                                    style={{
                                        fontFamily: "Clash Display",
                                        fontSize: "64px",
                                        fontWeight: "600",
                                        lineHeight: "1.1",
                                        color: "#ffffff",
                                        marginBottom: "20px",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {DATA.name}
                                </div>
                                <div
                                    style={{
                                        fontSize: "20px",
                                        lineHeight: "1.6",
                                        color: "#94a3b8",
                                        maxWidth: "680px",
                                        fontFamily: "Cabinet Grotesk",
                                    }}
                                >
                                    {DATA.description}
                                </div>
                            </div>

                            {/* Footer links */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "24px",
                                    fontSize: "16px",
                                    color: "#64748b",
                                    fontFamily: "Cabinet Grotesk",
                                }}
                            >
                                <span style={{ display: "flex" }}>{DATA.url.replace("https://", "")}</span>
                                <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
                                <span style={{ display: "flex" }}>github.com/dishapatel010</span>
                            </div>
                        </div>

                        {/* Right Profile Side */}
                        {imageUrl && (
                            <div
                                style={{
                                    display: "flex",
                                    position: "relative",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        width: "230px",
                                        height: "230px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                                        opacity: "0.2",
                                        filter: "blur(20px)",
                                        display: "flex",
                                    }}
                                />
                                <img
                                    src={imageUrl}
                                    alt={DATA.name}
                                    style={{
                                        width: "210px",
                                        height: "210px",
                                        borderRadius: "40px",
                                        border: "2px solid rgba(255, 255, 255, 0.15)",
                                        objectFit: "cover",
                                        zIndex: "2",
                                    }}
                                />
                            </div>
                        )}
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


