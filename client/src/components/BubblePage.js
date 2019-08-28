import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getColorList } from "../actions/itemActions";

import Bubbles from "./Bubbles";

const BubblePage = props => {
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
      {props.colors && props.colors.map(res => <Bubbles key={res.id} colors={res.data} />)}
    </>
  );
};

const mapStateToProps = state => {
  console.log("TCL: state", state);
  return {
    isLoading: state.isLoading,

    colors: state.colors
  };
};
export default connect(
  mapStateToProps,
  { getColorList }
)(BubblePage);
