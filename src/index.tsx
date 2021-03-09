import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, WidgetWrapper, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider
}

const Electric_car_widgetsWidget: React.FunctionComponent<IWidgetProps> = (props) => {

    let [selected, setSelected] = React.useState<string | null>("op-1");
    // let [inputValue, setInputValue] = React.useState<string | null>("sample text");

    // let [defCheckState, setDefCheckState] = React.useState<boolean>(false);
    // const onChangeCheckboxDef = (checked: boolean) => {
    //     setDefCheckState(checked);
    // }

    let [toggleFilterValue, setToggleFilterValue] = React.useState<string>("month");

    let [toggleFilterValue1, setToggleFilterValue1] = React.useState<string>("month");

    return (
        <WidgetWrapper className="car_widget car_widget-battery"> 
            {/* Electric_car_widgets */}

            <TitleBar title="">   </TitleBar> 

          <div className="car_widget-header">

                <div className="car_widget_lft"> 
                    <div className="uti-sel-boxes">
                        <div className="uti-sel-box">
                            <FormField inline className="showcase-input">
                                <Select
                                    selected={selected}
                                    options={[
                                        { label: "24 hours", value: "op-1" },
                                        { label: "Central Square 1", value: "op-2" },
                                        { label: "Central Square 2", value: "op-3" },
                                    ]}
                                    onChange={(value) => { setSelected(value) }}
                                    placeholder=" -- select --"
                                />
                            </FormField>
                        </div> 
                    </div> 
                </div>

                <div className="car_widget_rht">
                    <div className="block_building">
                        <Label>LEVEL - 2, BUILDING 1</Label> 
                    </div>
                </div>

            </div>


            <div className="car_widget-body"> 

                <div className="car-battery">  
                   

                    <div className="widget-pict car"> 
                        <div className="car-battery-pict"> </div>
                    </div>

                    <h3 className="battery-value">45%</h3>

                    <p className="battery-status">Average charge</p>
                </div>
           </div>

           <div className="car_widget-battery-bg"></div>
           
            
        </WidgetWrapper>
    )
}; 


const Electric_car_widgetsWidget_Details: React.FunctionComponent<IWidgetProps> = (props) => {
    let [selected, setSelected] = React.useState<string | null>("op-1");

    const GridData = [
        {
            icon: "https://static.iviva.com/images/Car_widget/Car.svg",
            title: <h3 className="orange">56</h3>,
            subTitle: "% of charger usage per day"
        },
        {
            icon: "https://static.iviva.com/images/Car_widget/metro-power.svg",
            // name: "Udhaya Kumar",
            title: <h3 className="green">02 Kw/H</h3>,
            subTitle: " Average energy per charge"
        },
        {
            icon: "https://static.iviva.com/images/Car_widget/weather-smoke.svg",
            title: <h3 className="green">50%</h3>,
            subTitle: "REDUCED EMISSIONS"
        },
        {
            icon: "https://static.iviva.com/images/Car_widget/plug.svg",
            title: <h3 className="orange">11 <span className="white">/16</span></h3>,
            subTitle: "CHARGING STATIONS USED"
        }  
    ]  

    const renderGridItem = (item: any, key: number) => {
        return (<ItemCard
            item={item}
            imageField="icon"
            titleField="title"
            subTitleField="subTitle"
            nameField="name"
        />)
    }

    return (
        <WidgetWrapper className="car_widget car_widget-details"> 
         <TitleBar title="">   </TitleBar> 

         <div className="car_widget_rht"> 
                    <div className="uti-sel-boxes">
                        <div className="uti-sel-box">
                            <FormField inline className="showcase-input">
                                <Select
                                    selected={selected}
                                    options={[
                                        { label: "24 hours", value: "op-1" },
                                        { label: "Central Square 1", value: "op-2" },
                                        { label: "Central Square 2", value: "op-3" },
                                    ]}
                                    onChange={(value) => { setSelected(value) }}
                                    placeholder=" -- select --"
                                />
                            </FormField>
                        </div> 
                    </div> 
                </div>

                <div className="car_details" >
                    <DataGrid
                        data={GridData}
                        renderItem={renderGridItem}
                        columns={2}
                    />
                </div>
                
            
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "electric_car_widgets",
    name: "Electric_car_widgets",
    widget: Electric_car_widgetsWidget,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});


registerWidget({
    id: "car_widgets_Details",
    name: "Electric_car_widgets_Details",
    widget: Electric_car_widgetsWidget_Details,
    configs: {
        layout: {
            // w: 12,
            // h: 12,
            // minH: 12,
            // minW: 12
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "electric_car_widgets",
    label: "Electric_car_widgets",
    // click: () => alert("Hello"),
    component: Electric_car_widgetsWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"electric_car_widgets",
    component: Electric_car_widgetsWidget
});
*/