
// import Parent from './component/passing-data-in-component/PassingStateProp'
// import SiblingsData from './component/passing-data-in-component/SiblingsData'
// import ClassComponent from "./component/class-componenent/ClassComponent";
// import Hero, {ErrorBoundary} from './component/error-boundaries/ErrorBoundaries'
// import UseRefComponent from "./component/useRef/UseRefComponent";
// import UseMemoComponent from "./component/useMemo-useCallback/useMemoComponent";
// import UseCallbackComponent from "./component/useMemo-useCallback/UseCallbackComponent";

import ClickHocCounter from "./component/higher-order-component/ClickHocCounter";
import HoverHocCounter from './component/higher-order-component/HoverHocCounter'
function App() {
  return (
    <div className="app">
        {/* <Parent /> */}

        {/* <SiblingsData />  */}

        {/* <ClassComponent/> */}


        {/* <Hero name="Rekha"/>
        <ErrorBoundary>
          <Hero name="Joker"/>
        </ErrorBoundary> */}

        {/* <UseRefComponent/> */}

        {/* <UseMemoComponent /> */}

        {/* <UseCallbackComponent /> */}

        <ClickHocCounter />
        <HoverHocCounter/>

    </div>
  );
}


class ClassRoom {
  constructor(){
    this.state = {studentCount: 0}
  }
 
  
  addStudent(){
    this.setState((prev)=> {
      return {studentCount : ++ prev.studentCount}
    })
  }

  render(){
  return <div>
    <button onClick={this.addStudent}>Add Student</button>
  </div>
  }
}

export default App
