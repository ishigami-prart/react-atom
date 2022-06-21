import React, { useContext } from "react";
import styled from "styled-components";
import { SearchInput } from "../molecules/Searchinput";
import { UserCard } from "../../organisms/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../button/SecondaryButton";
import { useRecoilState } from "recoil";

import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけえ${val}`,
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "12345@ex.jp",
    phone: "000-0000-0000",
    company: {
      name: "nikonikoCompany"
    },
    website: "http://aaaa.jp"
  };
});

const user = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/Mv9hjnEUHR4",
  email: "12345@ex.jp",
  phone: "000-0000-0000",
  company: {
    name: "nikonikoCompany"
  },
  website: "http://aaaa.jp"
};
export const Users = () => {
  //const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
