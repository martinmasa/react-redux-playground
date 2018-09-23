import React from 'react';
import styled from 'styled-components';

const User = ({ user }) => {
  const { name, profile_pic, status } = user;

  return (
    <UserContainer>
      <ProfilePic src={profile_pic} alt={name} />
      <UserName>{name}</UserName>
      <UserStatus>{status}</UserStatus>
    </UserContainer>
  );
};

export default User;


const UserContainer = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-areas: 
    "pic";

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  @media (min-width: 576px) {
    grid-gap: 0.5rem 1rem;
    grid-template-areas: 
      "pic name"
      "pic status";
  }
`;

const ProfilePic = styled.img`
  width: 50px;
  border-radius: 50%;
  grid-area: pic;
`;

const UserName = styled.p`
  display: none;

  @media (min-width: 576px) {
    grid-area: name;
    display: block;
    margin: 0;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const UserStatus = styled.p`
  display: none;

  @media (min-width: 576px) {
    grid-area: status;
    display: block;
    font-size: 1rem;
    margin-top: 0;
  }
`;
