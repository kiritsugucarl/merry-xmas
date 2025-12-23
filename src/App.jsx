import SlideContainer from "./components/SlideContainer";
import Intro from "./sections/Intro";
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

export default function App() {
    return (
        <SlideContainer>
            <Intro gradient="linear-gradient(135deg, #1DB954, #191414)" />
            <FirstPage1 />
            <FirstPage2 />
            <FirstPage3 />
            <StatsPage1 />
            <HighlightsP1 />
            <HighlightsP2 />
            <HighlightsP3 />
            <HighlightsP4 />
            <HighlightsP5 />
        </SlideContainer>
    );
}
