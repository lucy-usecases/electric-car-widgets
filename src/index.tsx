import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, WidgetWrapper, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider
}

const Electric_car_widgetsWidget: React.FunctionComponent<IWidgetProps> = (props) => {

    let [selected, setSelected] = React.useState<string | null>('3');
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
                                    selected={selected+''}
                                    options={[
                                        { label: "3 Hours", value: ''+(3) },
                                        { label: "24 hours", value: ''+(24) },
                                        { label: "One Week", value: ''+(24*7) },
                                        { label: "30 Days", value: ''+(24*30) },
                                  
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

interface IChargeSession {
    station: string;
    charges: number;
    power: number;
    duration:number;
}
const EVDetails: React.FunctionComponent<IWidgetProps> = (props) => {
    let [selected, setSelected] = React.useState<string | null>('3');
    let [sessions,setSessions] = React.useState<IChargeSession[]>([]);

    let start = new Date();
    let end = new Date();
    start.setHours(start.getHours() - Number(selected));

    React.useEffect(()=>{
        props.uxpContext.executeAction('ElectricVehicleCharging','StationUsage',{start,end},{json:true}).then(data=>{
            setSessions(data);
        });
    },[selected]);

    let {power,charges,duration} = sessions.reduce((old,x) => (
        {power:old.power+x.power,charges:old.charges+x.charges,duration:old.duration+x.duration}
    ),{power:0,charges:0,duration:0});
    let energyPerCharge = charges==0?0:(power/charges);
    let totalEnergy = power;
    let chargingStationsUsed = sessions.filter(x => x.duration>0).length;
    let totalChargingStations = sessions.length;
   
    let totalDuration = (Number(end) - Number(start))/1000;
    let percentageUsed = (totalDuration==0 || totalChargingStations==0) ? 0: duration/(totalChargingStations*totalDuration);
    let percentageUsePerDay = 100*percentageUsed;

    let emissionReduction = 1616*power;
    let units = 'g';
    if (emissionReduction > 1000) {
        emissionReduction = emissionReduction/1000.0;
        units = 'kg';
    }
    const GridData = [
        {
            icon: "https://static.iviva.com/images/Car_widget/Car.svg",
            title: <h3 className="orange">{`${totalEnergy.toFixed(0)} Kw`}</h3>,
            subTitle: "Total Energy"
        },
        {
            icon: "https://static.iviva.com/images/Car_widget/metro-power.svg",
            // name: "Udhaya Kumar",
            title: <h3 className="green">{`${energyPerCharge.toFixed(2)} KwH`}</h3>,
            subTitle: " Average energy per charge"
        },
        {
            icon: "https://static.iviva.com/images/Car_widget/weather-smoke.svg",
            title: <h3 className="green">{`${emissionReduction.toFixed(1)}${units}`}</h3>,
            subTitle: "REDUCED EMISSIONS"
        },
        {
            icon: "https://static.iviva.com/images/Car_widget/plug.svg",
            title: <h3 className="orange">{chargingStationsUsed} <span className="white">{`/${totalChargingStations}`}</span></h3>,
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
                                    selected={selected+''}
                                    options={[
                                        { label: "3 Hours", value: ''+(3) },
                                        { label: "24 hours", value: ''+(24) },
                                        { label: "One Week", value: ''+(24*7) },
                                        { label: "30 Days", value: ''+(24*30) },
                                  
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
// registerWidget({
//     id: "electric_car_widgets",
//     name: "Electric_car_widgets",
//     widget: Electric_car_widgetsWidget,
//     configs: {
//         layout: {
        
//         }
//     }
// });


registerWidget({
    id: "ev-car-widget-details",
    name: "EV Charging Summary",
    widget: EVDetails,
    configs: {
        layout: {
       
        }
    }
});
