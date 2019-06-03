import React from 'react';
import styles from '../Render/RenderProp.module.scss';
import {
  addRenderProp,
  deleteRenderProp,
  updateRenderProp,
} from '../../../context/testCaseActions';
const minusIcon = require('../../../assets/images/minus-box-outline.png');
const plusIcon = require('../../../assets/images/plus-box.png');

const RenderProp = ({ dispatchToTestCase, renderId, propId, propKey, propValue }) => {
  const handleClickAddProp = () => {
    dispatchToTestCase(addRenderProp());
  };

  const handleClickDeleteProp = e => {
    e.stopPropagation();
    dispatchToTestCase(deleteRenderProp(renderId, propId));
  };

  const handleChangeUpdatePropKey = e => {
    e.stopPropagation();
    dispatchToTestCase(updateRenderProp(renderId, propId, e.target.value, propValue));
  };

  const handleChangeUpdatePropValue = e => {
    e.stopPropagation();
    dispatchToTestCase(updateRenderProp(renderId, propId, propKey, e.target.value));
  };

  return (
    <div id={styles.renderProp}>
      <div id={styles.renderPropHeader}>
        <h4>Props</h4>
        <img src={plusIcon} onClick={handleClickAddProp} />
      </div>
      <div id={styles.renderProps}>
        <label htmlFor='prop-key'>key</label>
        <label htmlFor='prop-value'>value</label>
        <img src={minusIcon} onClick={handleClickDeleteProp} />
        <input type='text' id='propKey' onChange={handleChangeUpdatePropKey} />
        <input type='text' id='propValue' onChange={handleChangeUpdatePropValue} />
      </div>
    </div>
  );
};

export default RenderProp;
