import { Description, Details, MoreButton, MoreInfo, StyledInfo } from "./styles";
import useInfo from "./useInfo";

const Info = () => {

  const { 
    gameDetail,
    showMoreInfo,
    openAndHideMoreInfo,
    getReleaseDate,
  } = useInfo();

  return (
    <StyledInfo>
      <Description>
        <div>Description</div>
        {gameDetail?.description_raw}
      </Description>
      <MoreInfo>
        {showMoreInfo && (
          <Details>
            <li>
              Website:
              <a
                href={gameDetail?.website}
                target="_blank"
              >
                {gameDetail?.website}
              </a>
            </li>
            <li>
              Released: {getReleaseDate()}
            </li>
          </Details>
        )}
        <MoreButton
          $showMoreInfo={showMoreInfo}
          onClick={openAndHideMoreInfo}
        >
          More
        </MoreButton>
      </MoreInfo>
    </StyledInfo>
  )
}
export default Info;