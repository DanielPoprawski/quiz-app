import { useState } from "react";

export default function Sidebar() {
        const size = "24px";
        const [hidden, setHidden] = useState(true);
        const [style, setStyle] = useState({ display: "none" });

        function toggleHidden() {
                setHidden(!hidden);
                if (hidden) {
                        setStyle({ display: "block" });
                } else {
                        setStyle({ display: "none" });
                }
        }

        return (
                <div className="sidebar">
                        <a href="#menu" onClick={toggleHidden}>
                                <img src="../src/assets/icons/menu-svgrepo-com.svg" width={size} height={size} />
                        </a>
                        <a href="/" style={style}>
                                <img src="../src/assets/icons/home-svgrepo-com.svg" width={size} height={size} />
                        </a>

                        <a href="/learn" style={style}>
                                <img
                                        src="../src/assets/icons/chevron-right-svgrepo-com.svg"
                                        width={size}
                                        height={size}
                                />
                        </a>

                        <a href="/settings" style={style}>
                                <img src="../src/assets/icons/gear-svgrepo-com.svg" width={size} height={size} />
                        </a>
                </div>
        );
}
