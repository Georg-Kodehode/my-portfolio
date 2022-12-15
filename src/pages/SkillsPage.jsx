import Wrapper from "../components/Wrapper";
import SectionHeadline from "../components/SectionHeadline";
import SkillsPageWrapper from "../components/skillsPageComponents/SkillsPageWrapper";
import Skill from "../components/skillsPageComponents/Skill";
import SkillsCategory from "../components/skillsPageComponents/SkillsCategory";
import SkillList from "../components/skillsPageComponents/SkillList";
import ProjectLink from "../components/ProjectLink";
import Push from "../components/Push";

import cv from "../documents/CV_Georg_Stava.pdf";

const SkillsPage = () => {
  return (
    <Wrapper>
      <div className="main-content-wrapper">
        <SkillsPageWrapper>
          <SectionHeadline>Kompetanse</SectionHeadline>
          <Skill>
            <SkillsCategory>Programmering / utvikling / web:</SkillsCategory>
            <SkillList>
              HTML, CSS, JavaScript, C#, Golang, Java, PHP, Python, SQL,
              TypeScript, Node.js, arbeid med tredjeparts API-er
            </SkillList>
          </Skill>
          <Skill>
            <SkillsCategory>Rammeverk:</SkillsCategory>
            <SkillList>
              Flask, jQuery, Bootstrap, Vue.js, React, Express.js
            </SkillList>
          </Skill>
          <Skill>
            <SkillsCategory>DevOps Automation Tools:</SkillsCategory>
            <SkillList>Git</SkillList>
          </Skill>
          <Skill>
            <SkillsCategory>Databaser:</SkillsCategory>
            <SkillList>MongoDB</SkillList>
          </Skill>
          <Skill>
            <SkillsCategory>Software:</SkillsCategory>
            <SkillList>
              Visual Studio Code, Figma, GitHub, AutoCAD, Microsoft Office,
              Revit
            </SkillList>
          </Skill>
          <Skill>
            <SkillsCategory>Språk:</SkillsCategory>
            <SkillList>Norsk, engelsk, tysk</SkillList>
          </Skill>
          <Skill>
            <SkillsCategory>Sertifiseringer:</SkillsCategory>
            <SkillList>
              Førerkort klasse B, Kompetansebevis truck T1, T4
            </SkillList>
          </Skill>
          <Skill>
            <SkillsCategory>Annen kompetanse:</SkillsCategory>
            <SkillList>
              Gårdsarbeid, lagerarbeid, hjelpearbeider bygg, frivillig arbeid
            </SkillList>
          </Skill>
          <Skill>
            <SkillsCategory>Fritidsinteresser:</SkillsCategory>
            <SkillList>
              Programmering, data, film og serier, brettspill, videospill, lese
              bøker, fotball
            </SkillList>
          </Skill>
        </SkillsPageWrapper>
        <ProjectLink href={cv} target={"_blank"}>
          <svg
            height={"24px"}
            width={"24px"}
            fill={"#dff6ff"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            {/* ! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
          </svg>
          &nbsp;&nbsp;CV
        </ProjectLink>
      </div>
      <Push></Push>
    </Wrapper>
  );
};

export default SkillsPage;
