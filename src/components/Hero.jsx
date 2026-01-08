import React, { useState } from 'react';
import styled from 'styled-components';
import heroBg from './img/dashbord.png'; 
import { getCurrentDateString } from './dateUtils';
import { FiSearch } from 'react-icons/fi';
const HeroSection = styled.section`
  background:
    linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url(${heroBg}) center / cover no-repeat;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 2rem;
`;

const MainTitle = styled.h1`
  font-weight: 600;
  margin-bottom: 3rem;
font-style: SemiBold;
font-size: 40px;
line-height: 100%;
letter-spacing: 0%;

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const LeftText = styled.p`
  max-width: 520px;
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Divider = styled.div`
  width: 2px;
  height: 90px;
  background: rgba(255, 255, 255, 0.7);

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightText = styled.div`
  font-size: 1.3rem;
  line-height: 1.6;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SearchForm = styled.form`
  margin: 4rem auto 0;
  max-width: 720px;
  display: flex;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1.2rem 1.5rem;
  border: none;
  font-size: 1rem;
  outline: none;
`;

const SearchButton = styled.button`
  width: 70px;
  background: #f4a261;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;

  &:hover {
    background: #e76f51;
  }
`;
const DateText = styled.p`
 font-family: Montserrat;
font-weight: 500;
font-style: Medium;
font-size: 24px;
leading-trim: NONE;
line-height: 100%;
letter-spacing: 0%;
position: super;


 
`;

const Hero = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const currentDate = getCurrentDateString();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    onSearch(searchTerm.trim());
    setSearchTerm('');
  };

  return (
    <HeroSection>
      <HeroContent>
        <MainTitle>Weather dashboard</MainTitle>

        <InfoRow>
          <LeftText>
            Create your personal list of favorite cities and always be aware of
            the weather.
          </LeftText>

          <Divider />

          <RightText>
            <DateText>{currentDate}</DateText>
          </RightText>
        </InfoRow>

        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Search location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton>  <FiSearch /></SearchButton>
        </SearchForm>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
