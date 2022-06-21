import React, { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../button/PrimaryButton";
import { Input } from "../input/input";

export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <div>
      <Scontainer>
        <Input placeholder="検索条件を入力" />
        <SButtonWrapper>
          <PrimaryButton>検索</PrimaryButton>
        </SButtonWrapper>
      </Scontainer>
    </div>
  );
});

const Scontainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
