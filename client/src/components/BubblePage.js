import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getColorList } from "../actions/itemActions";

import Bubbles from "./Bubbles";

const BubblesList = props => {
  console.log("TCL: BubblesList props", props);
  return (
    <>
      <h1>Bubbles</h1>

      <button onClick={props.getColorList}>
        {props.isLoading ? (
          <Loader type="Puff" color="green" height={10} width={80} />
        ) : (
          "Get Bubbles"
        )}
      </button>
      {props.data && props.data.map(res => <Bubbles key={res.id} data={res} />)}
    </>
  );
};

const mapStateToProps = state => {
  console.log("TCL: state", state);
  return {
    isLoading: state.isLoading,

    data: state.data
  };
};
export default connect(
  mapStateToProps,
  { getColorList }
)(BubblesList);
