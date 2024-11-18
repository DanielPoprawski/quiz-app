import { useState } from "react";
import { Button, Flex, Space } from "antd";
import { Link } from "react-router-dom";
import { ArrowIcon, BrainIcon, HomeIcon, Logo, MenuIcon, SettingsIcon } from "../../assets/icons/CustomIcons";

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
                <Flex vertical align="center" gap="large">
                        <Space direction="vertical" size="large">
                                <Logo />
                                <Link to="/">
                                        <Button size={"large"} icon={<HomeIcon />} />
                                </Link>
                                <Link to="/learn/0">
                                        <Button size={"large"} icon={<ArrowIcon />} />
                                </Link>
                                <Link to="/memorize">
                                        <Button size={"large"} icon={<BrainIcon />} />
                                </Link>
                                <Link to="/settings">
                                        <Button size={"large"} icon={<SettingsIcon />} />
                                </Link>
                        </Space>
                </Flex>
        );
}
