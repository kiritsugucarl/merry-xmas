import SlideContainer from "./components/SlideContainer";
import Intro from "./sections/Intro";
import "./App.css";

export default function App() {
    return (
        <SlideContainer>
            <>Test</>
            <Intro gradient="linear-gradient(135deg, #1DB954, #191414)" />
        </SlideContainer>
    );
}
