import { useState } from "react";
import { Button } from "antd";
import { ArrowIcon, BrainIcon, HomeIcon, MenuIcon, SettingsIcon } from "../../assets/icons/CustomIcons";
import { Flex } from "antd";

export default function Sidebar() {
        const size = "24px";
        const [hidden, setHidden] = useState(true);
        const [style, setStyle] = useState({ display: "none" });

        // TODO: Fix the margins and other styling issues
        // TODO: Reimplement the hidden/unhidden functionality

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
                        {/* <a href="#" onClick={toggleHidden}>
                                <img src="../src/assets/icons/menu-svgrepo-com.svg" width={size} height={size} />
                        </a>

                        <a href="/" style={style}>
                                <img src="../src/assets/icons/home-svgrepo-com.svg" width={size} height={size} />
                        </a>

                        <a href="/learn/0" style={style}>
                                <img
                                        src="../src/assets/icons/chevron-right-svgrepo-com.svg"
                                        width={size}
                                        height={size}
                                />
                        </a>

                        <a href="/memorize" style={style}>
                                <img src="../src/assets/icons/brain-svgrepo-com.svg" width={size} height={size} />
                        </a>

                        <a href="/settings" style={style}>
                                <img src="../src/assets/icons/gear-svgrepo-com.svg" width={size} height={size} />
                        </a> */}

                        <Flex vertical>
                                {/* TODO: Add <Link> elements to these buttons */}
                                <Button size={"large"} icon={<MenuIcon />} />
                                <Button size={"large"} icon={<HomeIcon />} />
                                <Button size={"large"} icon={<ArrowIcon />} />
                                <Button size={"large"} icon={<BrainIcon />} />
                                <Button size={"large"} icon={<SettingsIcon />} />
                        </Flex>
                </div>
        );
}
