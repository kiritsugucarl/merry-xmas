import SlideContainer from "./components/SlideContainer";
import Intro from "./sections/Intro";
import IntroMessage from './sections/IntroMessage';
import "./App.css";
import FirstPage1  from "./sections/Firsts/firsts_p1";
import FirstPage2 from "./sections/Firsts/firsts_p2";
import FirstPage3 from './sections/Firsts/firsts_p3';
import StatsPage1 from './sections/Stats/stats_p1';
import HighlightsP1 from './sections/Highlights/highlights_p1';
import HighlightsP2 from './sections/Highlights/highlights_p2';
import HighlightsP3 from './sections/Highlights/highlights_p3';
import HighlightsP4 from './sections/Highlights/highlights_p4';
import HighlightsP5 from './sections/Highlights/highlights_p5';

// Titles
import FirstsTitle from './sections/Firsts/firsts_title';
import HighlightsTitle from './sections/Highlights/highlights_title';

export default function App() {
    return (
        <SlideContainer>
            <Intro gradient="linear-gradient(135deg, #1DB954, #b76060ff)" />
            <IntroMessage gradient="linear-gradient(270deg, #6565d6ff, #d8599fff)"/>

            <FirstsTitle gradient="linear-gradient(405deg, #b76060ff, #1DB954)" /> 
            <FirstPage1 gradient="linear-gradient(135deg, #1DB954, #b76060ff)"/>
            <FirstPage2 gradient="linear-gradient(270deg, #6565d6ff, #d8599fff)"/>
            <FirstPage3 gradient="linear-gradient(405deg, #b76060ff, #1DB954)"/>
            
            <HighlightsTitle gradient="linear-gradient(135deg, #1DB954, #b76060ff)"/>
            <HighlightsP1 gradient="linear-gradient(270deg, #6565d6ff, #d8599fff)"/>
            <HighlightsP2 gradient="linear-gradient(405deg, #b76060ff, #1DB954)"/>
            <HighlightsP3 gradient="linear-gradient(135deg, #1DB954, #b76060ff)"/>
            <HighlightsP4 gradient="linear-gradient(270deg, #6565d6ff, #d8599fff)"/>
            <HighlightsP5 gradient="linear-gradient(405deg, #b76060ff, #1DB954)"/>
            
            <StatsPage1 gradient="linear-gradient(135deg, #1DB954, #b76060ff)"/>
        </SlideContainer>
    );
}
