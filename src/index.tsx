import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { DataList, WidgetWrapper, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter, useMessageBus, useUpdateWidgetProps, useToast, Button } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider;
    duration: string;
	instanceId: string;
    totalenergy:boolean;
    averagepercharge:boolean;
    emissions:boolean;
    stations:boolean;
    averagecostpercharge:boolean;

}

const Electric_car_widgetsWidget: React.FunctionComponent<IWidgetProps> = (props) => {

    let [selected, _setSelected] = React.useState<string | null>(props.duration||'3');
    let updater = useUpdateWidgetProps();
    function setSelected(x:string) {
        _setSelected(x);
        updater(props.instanceId,{duration:x});
    }
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
function fixed(n:number) {
    if (n==0) return '0';
    if (n > 999) {
        return new Intl.NumberFormat().format(Number(n.toFixed(2)));
    }
    if (n > 99) {
        return n.toFixed(2);
    }
    return n.toFixed(2);
}

interface IChargeSession {
    station: string;
    charges: number;
    power: number;
    duration:number;
}

function useEffectWithPolling(context: any, channel: string, interval: number, callback: () => Promise<void>, deps: any[]) {
	let [tick, setTick] = React.useState(0);
	let [timer, setTimer] = React.useState(null);

	let newDeps = deps.slice();
	newDeps.push(tick);

	function startTimer() {
		clearTimeout(timer);
		setTimer(setTimeout(() => {
			setTick((x) => x + 1);
		}, interval));
	}

	React.useEffect(() => {
		clearTimeout(timer);
		console.log('running poll job');
		callback().then(() => {
			startTimer();
		}).catch(e => {
			console.log('Error in useEffectWithPolling', channel, e);
			startTimer();
		})
		return () => timer && clearTimeout(timer);
	}, newDeps);

	useMessageBus(context, channel, (p, ch) => {
		setTick((x) => x + 1);
		return "";
	});

}

const EVDetails: React.FunctionComponent<IWidgetProps> = (props) => {
    let [selected, _setSelected] = React.useState<string | null>(props.duration||'3');
    let [sessions,setSessions] = React.useState<IChargeSession[]>([]);
    let [cost,setCost] = React.useState(0);
    let updater = useUpdateWidgetProps();
    function setSelected(x:string) {
        _setSelected(x);
        updater(props.instanceId,{duration:x});
    }
    let start = new Date();
    let end = new Date();
    start.setHours(start.getHours() - Number(selected));

    useEffectWithPolling(props.uxpContext,'lxp/ev',30000,async ()=>{
        let data = await props.uxpContext.executeAction('ElectricVehicleCharging','StationUsage',{start,end},{json:true});
        setSessions(data);
       
    },[selected]);

    React.useEffect(()=>{
        props.uxpContext.executeAction('ElectricVehicleCharging','GetSettings',{},{json:true}).then((data:any)=>{
            let cost = Number(data.price || 0);
            setCost(cost);
        });
    },[]);
   

    let {power,charges,duration} = sessions.reduce((old,x) => (
        {power:old.power+x.power,charges:old.charges+x.charges,duration:old.duration+x.duration}
    ),{power:0,charges:0,duration:0});
    let energyPerCharge = charges==0?0:(power/charges);
    let totalEnergy = power;
    let chargingStationsUsed = sessions.filter(x => x.power>0).length;
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
    const GridData = [];
    if (props.totalenergy) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/Car.svg",
            title: <h3 className="orange">{`${fixed(totalEnergy)} WH`}</h3>,
            subTitle: "Total Energy"
        });
    }
    if (props.averagepercharge) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/metro-power.svg",
            title: <h3 className="green">{`${fixed(energyPerCharge)} WH`}</h3>,
            subTitle: " Average energy per charge"
        });
    }
    if (props.emissions) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/weather-smoke.svg",
            title: <h3 className="green">{`${fixed(emissionReduction)}${units}`}</h3>,
            subTitle: "REDUCED EMISSIONS"
        });
    }
    if (props.stations) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/plug.svg",
            title: <h3 className="orange">{chargingStationsUsed} <span className="white">{`/${totalChargingStations}`}</span></h3>,
            subTitle: "CHARGING STATIONS USED"
        });
    } 
    if (props.averagecostpercharge) {
        GridData.push({
            icon: "https://static.iviva.com/images/Car_widget/plug.svg",
            title: <h3 className="orange">{'$'  + fixed(energyPerCharge*cost)}</h3>,
            subTitle: "AVERAGE COST PER CHARGE"
        });
    } 
    

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
                                        { label: "60 Days", value: ''+(24*60) },
                                        { label: "90 Days", value: ''+(24*90) },
                                  
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
export interface IConfigPanelProps {
    configs:{ [key: string]: any },
    onSubmit: (data: { [key: string]: any }) => void
    onCancel?: () => void
}
const EVConfigPanel: React.FunctionComponent<IConfigPanelProps> = (props) => {

	let { onSubmit, onCancel, configs } = props
	let toast = useToast();
    let [totalEnergy,setTotalEnergy] = React.useState(true);
    let [averageEnergy,setAverageEnergy] = React.useState(true);
    let [emissions,setEmissions] = React.useState(true);
    let [stations,setStations] = React.useState(true);
    let [averageCost,setAverageCost] = React.useState(false);

	// React.useEffect(() => {

	// 	if (configs) {
    //         setTotalEnergy(configs.totalenergy||true);
    //         setAverageEnergy(configs.averagepercharge||true);
    //         setEmissions(configs.emissions||true);
    //         setAverageCost(configs.averagecostpercharge||false);
    //         setStations(configs.stations||true);

			
	// 	}
	// }, [configs])

	// validate 
	function isValid() {
		let isValid = true
		
		return isValid
	}

	function save() {
		let valid = isValid()
		if (valid) {
			onSubmit({
                emissions,
                averagecostpercharge:averageCost,
                stations,
                totalenergy:totalEnergy,
                averagepercharge:averageEnergy,
			})
		}
		else {
			toast.error("Please complete the form. All fields are required")
		}
	}

	function cancel() {
		onCancel()
	}

	return <div className="energy-budget-widget-config-panel">
		<h4>Enabled Sections (Pick 4)</h4>
		<div className="row">
			<FormField>
                <Checkbox label='Total Energy'  checked={totalEnergy} onChange={setTotalEnergy}  />
			</FormField>
			<FormField>
                <Checkbox label='Emissions Reduced'  checked={emissions} onChange={setEmissions}  />
			</FormField>
			<FormField>
                <Checkbox label='Average Energy Per Charge'  checked={averageEnergy} onChange={setAverageEnergy}  />
			</FormField>
		
			<FormField>
                <Checkbox label='Stations'  checked={stations} onChange={setStations}  />
			</FormField>
            <FormField>
                <Checkbox label='Average Cost Per Charge'  checked={averageCost} onChange={setAverageCost}  />
			</FormField>
		
		</div>


		<FormField className="button-row">
			<Button className="cancel" title="Cancel" onClick={cancel} />
			<Button className="save" title="Save" onClick={save} active={isValid()} />
		</FormField>
	</div>
}
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
       
        },
        props: [
			{
				name: "totalenergy",
				label: "Total Energy",
				type: "string"
			},
			{
				name: "averagepercharge",
				label: "Average Energy Per Charge",
				type: "string"
			},
            {
				name: "emissions",
				label: "Reduced Emissions",
				type: "string"
			},
            {
				name: "stations",
				label: "Charging Stations Used",
				type: "string"
			},
            {
				name: "averagecostpercharge",
				label: "Average Cost Per Charge",
				type: "string"
			},
		],
        configPanel: EVConfigPanel
    }
});
