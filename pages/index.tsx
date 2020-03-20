import { ApplicationState } from '../redux/store';
import { connect } from 'react-redux';
import { changeSelectedStates } from '../redux/actions/actions';

import dynamic from 'next/dynamic';
const Dashboard = dynamic(() => import('../components/Dashboard'), {
  ssr: false,
});

const mapStateToProps = (state: ApplicationState) => {
  return {
    // FIXME: make this explicit for each property
    ...state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeSelectedStates: (stateName: string, added: boolean) =>
      dispatch(changeSelectedStates(stateName, added)),
  };
};

const Index = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default Index;
