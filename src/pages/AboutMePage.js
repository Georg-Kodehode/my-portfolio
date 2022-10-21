import SectionHeadline from "../components/SectionHeadline";
import Wrapper from "../components/Wrapper";
import {
  AboutMePageWrapper,
  AboutMeText,
  AboutMeParagraph,
  SelfPortrait,
} from "../components/styledAboutMePage";

const AboutMePage = () => {
  return (
    <Wrapper>
      <SectionHeadline>Om meg</SectionHeadline>
      <AboutMePageWrapper>
        <AboutMeText>
          <AboutMeParagraph>
            I 2020 tok jeg min andre bachelorgrad ved Universitetet i Stavanger.
            Jeg skiftet over fra bygg til data, da dette er noe jeg har mer
            interesse for. Nylig deltok jeg på et IT kurs kurs hos
            Gründerloftet, for å vedlikeholde kunnskaper jeg tilegnet meg i
            løpet av tiden min på universitetet.
          </AboutMeParagraph>
          <AboutMeParagraph>
            På fritiden liker jeg blant annet å se film og serier, og å spille
            brettspill. I tillegg liker jeg å spille videospill, lese bøker,
            programmere og både å spille og å se fotball.
          </AboutMeParagraph>
          <AboutMeParagraph>
            Før jeg begynte på universitetet så jobbet jeg noe på gård, en
            periode på lager, med restaurering av hus i en periode der jeg var
            hjelpearbeider, og nylig som frivillig hos Skattkammeret.
          </AboutMeParagraph>
          <AboutMeParagraph>
            Når jeg arbeider, så er jeg målrettet og systematisk. Som person er
            jeg pålitelig, og jeg liker godt å lære nye ting.
          </AboutMeParagraph>
        </AboutMeText>
        <SelfPortrait src={require("../images/self_portrait.PNG")} />
      </AboutMePageWrapper>
    </Wrapper>
  );
};

export default AboutMePage;
