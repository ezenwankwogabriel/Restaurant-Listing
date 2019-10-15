import React from 'react';
import Range from './Range/index';

import './styles.scss';
import AppTextHeader from '../../common/AppTextHeader';
import Label from '../../common/Label';
import RadioButton from '../../common/RadioButton';

const Filters = (props) => {

    return (
        <div className="app-bg" data-testid="app-filter">
            <div className="row mb-2">
                <div className="col">
                    <div className="p-3">
                        <div className="row">
                            <div className="col">
                                <AppTextHeader appTextHeaderExtraCSS='h6 text-center' text='Filter'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <Label labelText="N100"/>
                                    </div>
                                    <div className="col">
                                        <Label labelExtraClass="float-right" labelText="N10,000"/>
                                    </div>
                                </div>
                                <Range />
                                <div className="row">
                                    <div className="col">
                                        <Label labelExtraClass="float-right" labelText="N2,000"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <Label labelText="N100"/>
                                    </div>
                                    <div className="col">
                                        <Label labelExtraClass="float-right" labelText="N10,000"/>
                                    </div>
                                </div>
                                <Range />
                                <div className="row">
                                    <div className="col">
                                        <Label labelExtraClass="float-right" labelText="N2,000"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RadioButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Filters;
