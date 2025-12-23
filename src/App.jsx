import SlideContainer from "./components/SlideContainer";
import Intro from "./sections/Intro";
import "./App.css";
import FirstPage1  from "./sections/Firsts/firsts_p1";
import FirstPage2 from "./sections/Firsts/firsts_p2";
import FirstPage3 from './sections/Firsts/firsts_p3';
import StatsPage1 from './sections/Stats/stats_p1';

export default function App() {
    return (
        <SlideContainer>
            <Intro gradient="linear-gradient(135deg, #1DB954, #191414)" />
            <FirstPage1 />
            <FirstPage2 />
            <FirstPage3 />
            <StatsPage1 />
        </SlideContainer>
    );
}
