// projects
import { screenshots } from './constants';
import Description from './Description';
import QuickNavigation from './QuickNavigation';
import { 
  Image, 
  Main, 
  SlidesContainer,
  Banner,
  ArrowButton
} from './styles';


/**
 * Home page
 */
export const Home = () => {

  const prevButton = (
    <ArrowButton>
      {'<'}
    </ArrowButton>
  );

  const nextButton = (
    <ArrowButton>
      {'>'}
    </ArrowButton>
  )

  return (
    <>
      <Main>
        <Banner>
          <SlidesContainer
            prevButton={prevButton}
            nextButton={nextButton}
          >
            {screenshots.map((screenshot) => (
              <Image 
                key={screenshot.id}
                src={screenshot.image} 
              />
            ))}
          </SlidesContainer>
          <Description />
        </Banner>
        <QuickNavigation />
      </Main>
    </>
  );
};
