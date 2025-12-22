import SlideContainer from "./components/SlideContainer";
import Intro from "./sections/Intro";
import "./App.css";
import { Firsts } from "./sections/Firsts";

export default function App() {
    return (
        <SlideContainer>
            <Intro gradient="linear-gradient(135deg, #1DB954, #191414)" />
            <Firsts />
            <Firsts />
        </SlideContainer>
    );
}
