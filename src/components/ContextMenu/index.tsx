import { Content, Item, Separator } from "@radix-ui/react-context-menu";
import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

interface ActionProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  destructive?: boolean;
}

const Action: FC<ActionProps> = ({ destructive, ...props }) => (
  <Item
    className={clsx("py-2 px-3 outline-none focus:text-white", {
      "text-red-ui focus:bg-red-ui": destructive,
      "focus:bg-black-ui": !destructive,
    })}
  >
    <button {...props} />
  </Item>
);

const ContextMenu: FC = () => {
  return (
    <Content className="text-grey-ui text-sm bg-white w-40 rounded-sm py-1 absolute z-10">
      <Action>Dummy Item</Action>
      <Action>This does nothing</Action>
      <Separator className="h-[1px] bg-light-grey-ui my-1" />
      <Action>Fake News</Action>
      <Separator className="h-[1px] bg-light-grey-ui my-1" />
      <Action destructive>Delete Frame</Action>
    </Content>
  );
};

export default ContextMenu;
