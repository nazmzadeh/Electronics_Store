/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./Menu.scss";

export interface IMenuItemProps {
  label: React.ReactNode;
  key: string;
  icon?: React.ReactNode;
}

export interface IMenuProps {
  items: IMenuItemProps[];
  className?: string;
  title?: React.ReactNode;
}
const Menu = ({ items, className, title }: IMenuProps) => {
  return (
    <Dropdown
      menu={{ items }}
      className={`${className} dropdown`}
      trigger={["hover"]}
    >
      <Space>
        {title ? title : (items[0].label as React.ReactElement).props.children}
        <DownOutlined className="down-arrow" />
      </Space>
    </Dropdown>
  );
};

export default Menu;
