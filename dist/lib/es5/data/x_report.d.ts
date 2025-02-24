import * as moment from "moment-timezone";
import { ProtocolXAnalogues } from "./modules/x_analogues";
import { ProtocolXAskollEs2ScooterData } from "./modules/x_askoll_es2_scooter_data";
import { ProtocolXAstraGenericCanData } from "./modules/x_astra_generic_can_data";
import { ProtocolXAstraGenericDebugData } from "./modules/x_astra_generic_debug_data";
import { ProtocolXBatteryUsageStatistics } from "./modules/x_battery_usage_statistics";
import { ProtocolXCar2Data } from "./modules/x_car2_data";
import { ProtocolXCarrierTwoWayAlarms } from "./modules/x_carrier_2_way_alarms";
import { ProtocolXCarrierTemperatureData } from "./modules/x_carrier_temperature_data";
import { ProtocolXCashInTransitStatus } from "./modules/x_cash_in_transit_status";
import { ProtocolXCm2010MobilityScooterController } from "./modules/x_cm2010_mobility_scooter_controller";
import { ProtocolXDevicePower } from "./modules/x_device_power";
import { ProtocolXDigitals } from "./modules/x_digitals";
import { ProtocolXDriverBehaviour } from "./modules/x_driver_behaviour";
import { ProtocolXDriverId } from "./modules/x_driver_id";
import { ProtocolXEcon3Byte } from "./modules/x_econ_3_byte";
import { ProtocolXEcooterScooterData } from "./modules/x_ecooter_scooter_data";
import { ProtocolXEcooterSerialNumbers } from "./modules/x_ecooter_serial_numbers";
import { ProtocolXFmsDriverId } from "./modules/x_fms_driver_id";
import { ProtocolXFmsDriverWorkingStates } from "./modules/x_fms_driver_working_states";
import { ProtocolXFmsInJourneyData } from "./modules/x_fms_in_journey_data";
import { ProtocolXFmsInJourneyHighRes } from "./modules/x_fms_in_journey_high_res";
import { ProtocolXFmsJourneyStartData } from "./modules/x_fms_journey_start_data";
import { ProtocolXFmsJourneyStopData } from "./modules/x_fms_journey_stop_data";
import { ProtocolXGeofences } from "./modules/x_geofences";
import { ProtocolXGnssExtendedData } from "./modules/x_gnss_extended_data";
import { ProtocolXGnssStopReportData } from "./modules/x_gnss_stop_report_data";
import { ProtocolXGoingGreenTheCoreBikeData } from "./modules/x_going_green_the_core_bike_data";
import { ProtocolXGpsData } from "./modules/x_gps_data";
import { ProtocolXGritterDataBsEn15430 } from "./modules/x_gritter_data_bs_en_15430";
import { ProtocolXGsmNetworkInfo } from "./modules/x_gsm_network_info";
import { ProtocolXNmea2000Data } from "./modules/x_nmea_2000_data";
import { ProtocolXObdDtcCodes } from "./modules/x_obd_dtc_codes";
import { ProtocolXObdInJourneyData } from "./modules/x_obd_in_journey_data";
import { ProtocolXObdJourneyStopData } from "./modules/x_obd_journey_stop_data";
import { ProtocolXOneWireTemperatureProbe } from "./modules/x_one_wire_temperature_probe";
import { ProtocolXRayvoltEBicycle } from "./modules/x_rayvolt_e_bicycle";
import { ProtocolXRedforgeWeight } from "./modules/x_redforge_weight";
import { ProtocolXSegwayNinebotEs4Sharing } from "./modules/x_segway_ninebot_es4_sharing";
import { ProtocolXSensors } from "./modules/x_sensors";
import { ProtocolXSignalQuality } from "./modules/x_signal_quality";
import { ProtocolXSimCardSerialNumber } from "./modules/x_sim_card_serial_number";
import { ProtocolXSimSubscriberId } from "./modules/x_sim_subscriber_id";
import { ProtocolXStarsAcimMotorControllerData } from "./modules/x_stars_acim_motor_controller_data";
import { ProtocolXTorrotMuviBatteryData } from "./modules/x_torrot_muvi_battery_data";
import { ProtocolXTorrotMuviScooterData } from "./modules/x_torrot_muvi_scooter_data";
import { ProtocolXTrailerId } from "./modules/x_trailer_id";
import { ProtocolXReason } from "./x_reason";
import { ProtocolXReportStatus } from "./x_report_status";
import { ProtocolXHeinzmannData } from "./modules/x_heinzmann";
export declare class ProtocolXReport {
    timestamp?: moment.Moment;
    sequenceNumber?: number;
    reasons: ProtocolXReason[];
    statusFlags?: number;
    status?: ProtocolXReportStatus;
    rawModuleMask: bigint;
    rawRtcTime: number;
    rawReasonFlags: number;
    rawStatusFlags: number;
    rawGpsTimeDateLastKnownGood: number;
    devicePower?: ProtocolXDevicePower;
    gpsData?: ProtocolXGpsData;
    digitals?: ProtocolXDigitals;
    analogues?: ProtocolXAnalogues;
    driverBehaviour?: ProtocolXDriverBehaviour;
    signalQuality?: ProtocolXSignalQuality;
    gsmNetworkInfo?: ProtocolXGsmNetworkInfo;
    geofences?: ProtocolXGeofences;
    driverId?: ProtocolXDriverId;
    trailerId?: ProtocolXTrailerId;
    fmsJourneyStartData?: ProtocolXFmsJourneyStartData;
    gnssStopReportData?: ProtocolXGnssStopReportData;
    fmsInJourneyData?: ProtocolXFmsInJourneyData;
    obdInJourneyData?: ProtocolXObdInJourneyData;
    obdDtcCodes?: ProtocolXObdDtcCodes;
    fmsJourneyStopData?: ProtocolXFmsJourneyStopData;
    obdJourneyStopData?: ProtocolXObdJourneyStopData;
    carrierTemperatureData?: ProtocolXCarrierTemperatureData;
    oneWireTemperatureProbe?: ProtocolXOneWireTemperatureProbe;
    carrierTwoWayAlarms?: ProtocolXCarrierTwoWayAlarms;
    rayvoltEBicycle?: ProtocolXRayvoltEBicycle;
    econ3Byte?: ProtocolXEcon3Byte;
    gritterDataBsEn15430?: ProtocolXGritterDataBsEn15430;
    redforgeWeight?: ProtocolXRedforgeWeight;
    nmea2000Data?: ProtocolXNmea2000Data;
    simSubscriberId?: ProtocolXSimSubscriberId;
    simCardSerialNumber?: ProtocolXSimCardSerialNumber;
    fmsDriverId?: ProtocolXFmsDriverId;
    fmsInJourneyHighRes?: ProtocolXFmsInJourneyHighRes;
    fmsDriverWorkingStates?: ProtocolXFmsDriverWorkingStates;
    segwayNinebotEs4Sharing?: ProtocolXSegwayNinebotEs4Sharing;
    sensors?: ProtocolXSensors;
    goingGreenTheCoreBikeData?: ProtocolXGoingGreenTheCoreBikeData;
    ecooterScooterData?: ProtocolXEcooterScooterData;
    torrotMuviScooterData?: ProtocolXTorrotMuviScooterData;
    ecooterSerialNumbers?: ProtocolXEcooterSerialNumbers;
    askollEs2ScooterData?: ProtocolXAskollEs2ScooterData;
    cashInTransitStatus?: ProtocolXCashInTransitStatus;
    torrotMuviBatteryData?: ProtocolXTorrotMuviBatteryData;
    batteryUsageStatistics?: ProtocolXBatteryUsageStatistics;
    starsAcimMotorControllerData?: ProtocolXStarsAcimMotorControllerData;
    car2Data?: ProtocolXCar2Data;
    gnssExtendedData?: ProtocolXGnssExtendedData;
    cm2010MobilityScooterController?: ProtocolXCm2010MobilityScooterController;
    astraGenericCanData?: ProtocolXAstraGenericCanData;
    heinzmannData?: ProtocolXHeinzmannData;
    astraGenericDebugData?: ProtocolXAstraGenericDebugData;
    constructor();
    static fromReader(reader: any): ProtocolXReport;
}
