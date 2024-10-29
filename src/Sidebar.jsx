import { useState } from "react";

export default function Sidebar() {
        const size = "24px";
        const [hidden, setHidden] = useState(true);

        function toggleHidden() {
                setHidden(!hidden);
        }

        return (
                <div className="sidebar">
                        <a href="#menu">
                                <img
                                        src="../src/assets/icons/menu-svgrepo-com.svg"
                                        width={size}
                                        height={size}
                                        onClick={toggleHidden}
                                />
                        </a>

                        <a href="#home">
                                <img
                                        src="../src/assets/icons/home-svgrepo-com.svg"
                                        width={size}
                                        height={size}
                                        hidden={hidden}
                                />
                        </a>

                        <a href="#settings">
                                <img
                                        src="../src/assets/icons/gear-svgrepo-com.svg"
                                        width={size}
                                        height={size}
                                        hidden={hidden}
                                />
                        </a>

                        <a href="#learn">
                                <img
                                        src="../src/assets/icons/chevron-right-svgrepo-com.svg"
                                        width={size}
                                        height={size}
                                        hidden={hidden}
                                />
                        </a>
                </div>
        );
}
