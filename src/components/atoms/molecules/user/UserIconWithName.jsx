import styled from "styled-components";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <img height={160} widht={160} src={image} alt={name} />
      <p>{name}</p>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
