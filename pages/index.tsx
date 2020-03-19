import Dashboard from "../components/Dashboard";
import {ApplicationState} from "../redux/store";
import {connect} from "react-redux";

const mapStateToProps = ( state: ApplicationState ) => {
    return {
        // FIXME: make this explicit for each property
        ...state,
    }
};

const mapDispatchToProps = () => {
    return {}
};

const Index = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default Index;
