
// import Parent from './component/passing-data-in-component/PassingStateProp'
// import SiblingsData from './component/passing-data-in-component/SiblingsData'
// import ClassComponent from "./component/class-componenent/ClassComponent";
import Hero, {ErrorBoundary} from './component/error-boundaries/ErrorBoundaries'
function App() {
  return (
    <div className="app">
        {/* <Parent />
        <SiblingsData /> */}
        {/* <ClassComponent/> */}
        <Hero name="Rekha"/>
        <ErrorBoundary>
          <Hero name="Joker"/>
        </ErrorBoundary>
    </div>
  );
}

export default App
