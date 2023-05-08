import SectionHeadline from "../components/SectionHeadline";
import Wrapper from "../components/Wrapper";
import StyledAboutMePage from "../components/aboutMePageComponents/StyledAboutMePage";
import Push from "../components/Push";

const AboutMePage = () => {
  return (
    <Wrapper>
      <div className="main-content-wrapper">
        <SectionHeadline>Om meg</SectionHeadline>
        <StyledAboutMePage>
          <div className="about-me-text">
            <p className="about-me-paragraph">
              I 2020 tok jeg min andre bachelorgrad ved Universitetet i
              Stavanger. Jeg skiftet over fra bygg til data, da dette er noe jeg
              har mer interesse for. Etter tiden min på universitetet har jeg jobbet med å vedlikeholde
              tidligere tilegnet kunnskap, både gjennom selvstudium og kurs arrangert av JobLoop.
              I løpet av denne tiden har jeg også tilegnet meg ny kunnskap.
              {/* I 2020 tok jeg min andre bachelorgrad ved Universitetet i
              Stavanger. Jeg skiftet over fra bygg til data, da dette er noe jeg
              har mer interesse for. Nylig deltok jeg på et IT kurs hos
              Gründerloftet, for å vedlikeholde kunnskaper jeg tilegnet meg i
              løpet av tiden min på universitetet. */}
            </p>
            <p className="about-me-paragraph">
              På fritiden liker jeg blant annet å se film og serier, og å spille
              brettspill. I tillegg liker jeg å spille videospill, lese bøker,
              programmere og både å spille og å se på fotball.
            </p>
            {/* <p className="about-me-paragraph">
            Før jeg begynte på universitetet så jobbet jeg noe på gård, en
            periode på lager, med restaurering av hus i en periode der jeg var
            hjelpearbeider, og nylig som frivillig hos Skattkammeret.
            </p>*/}
            <p className="about-me-paragraph">
              Når jeg arbeider, så er jeg målrettet og systematisk. Som person
              er jeg pålitelig, og jeg liker godt å lære nye ting.
            </p>
          </div>
          <img className="self-portrait" alt="self portrait" src={require("../images/self_portrait.PNG")} />
        </StyledAboutMePage>
      </div>
      <Push></Push>
    </Wrapper>
  );
};

export default AboutMePage;
