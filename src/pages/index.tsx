import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Output from "../components/Output";
import { FaGithub } from "react-icons/fa";
import { media } from "../components/GlobalStyle.css";

const Main = styled.main`
  display: flex;
  ${media["1050"]`flex-direction: column;`}
  margin: 45px auto 1rem !important;
  ${media["600"]`margin: 20px auto 1rem !important`};
  gap: clamp(0.5rem, 2.5vw, 4rem);
  ${media["1050"]`gap: 0.75rem`};
`;

const Footer = styled.footer`
  a {
    display: inline-flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
      width: 20px;
      height: 20px;
    }

    &:hover {
      color: #005bff;
    }
  }
`;

export default function Home() {
  const [selectedAlgo, setSelectedAlgo] = useState(null);
  const [arrivalTime, setArrivalTime] = useState<number[]>([]);
  const [burstTime, setBurstTime] = useState<number[]>([]);
  const [timeQuantum, setTimeQuantum] = useState<number>();
  const [priorities, setPriorities] = useState<number[]>([]);

  return (
    <div>
      <Head>
        <title>CPU Scheduler</title>
      </Head>

      <Main className="container">
        <Input
          selectedAlgo={selectedAlgo}
          setSelectedAlgo={setSelectedAlgo}
          setArrivalTime={setArrivalTime}
          setBurstTime={setBurstTime}
          setTimeQuantum={setTimeQuantum}
          setPriorities={setPriorities}
        />
        <Output
          selectedAlgo={selectedAlgo}
          arrivalTime={arrivalTime}
          burstTime={burstTime}
          timeQuantum={timeQuantum}
          priorities={priorities}
        />
      </Main>

      <Footer className="container">
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaGithub/>GitHub</a>
      </Footer>
    </div>
  );
}
