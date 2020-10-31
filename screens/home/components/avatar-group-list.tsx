import { Avatar, AvatarGroup } from "@chakra-ui/core";
import members from "../members.json";

export function AvatarGroupList() {
  return (
    <AvatarGroup max={20} d={["none", "none", "flex", "flex"]}>
      {members.slice(10).map((member, i) => (
        <Avatar
          key={i}
          className="avatar-badge"
          width={"35px"}
          height="35px"
          borderColor="black"
          name={member.title}
          src={member.imageUrl}
        />
      ))}
    </AvatarGroup>
  );
}
