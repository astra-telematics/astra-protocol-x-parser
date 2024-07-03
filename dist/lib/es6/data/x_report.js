import * as moment from "moment";
import { readU16BE, readU24, readU32BE } from "../utils";
import { ProtocolXAnalogues } from "./modules/x_analogues";
import { ProtocolXAskollEs2ScooterData } from "./modules/x_askoll_es2_scooter_data";
import { ProtocolXAstraGenericCanData, ProtocolXAstraGenericCanDataEntry } from "./modules/x_astra_generic_can_data";
import { ProtocolXAstraDebugDataType, ProtocolXAstraDebugNvData, ProtocolXAstraGenericDebugData } from "./modules/x_astra_generic_debug_data";
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
import { ProtocolXSensor, ProtocolXSensorType, ProtocolXSensors } from "./modules/x_sensors";
import { ProtocolXSignalQuality } from "./modules/x_signal_quality";
import { ProtocolXSimCardSerialNumber } from "./modules/x_sim_card_serial_number";
import { ProtocolXSimSubscriberId } from "./modules/x_sim_subscriber_id";
import { ProtocolXStarsAcimMotorControllerData } from "./modules/x_stars_acim_motor_controller_data";
import { ProtocolXTorrotMuviBatteryData } from "./modules/x_torrot_muvi_battery_data";
import { ProtocolXTorrotMuviScooterData } from "./modules/x_torrot_muvi_scooter_data";
import { ProtocolXTrailerId } from "./modules/x_trailer_id";
import { ProtocolXDriverIdSource } from "./x_driver_id_source";
import { ProtocolXReason } from "./x_reason";
import { ProtocolXReasonLabel } from "./x_reason_labels";
import { ProtocolXReportStatus } from "./x_report_status";
import { ProtocolXTrailerIdSource } from "./x_trailer_id_source";
var ProtocolXReport = /** @class */ (function () {
    function ProtocolXReport() {
        this.reasons = [];
    }
    ProtocolXReport.fromReader = function (reader) {
        var report = new ProtocolXReport();
        report.sequenceNumber = reader.ReadUInt8();
        var moduleMask = BigInt(0);
        for (var i = 0; i < 6; i++) {
            moduleMask |= BigInt(reader.ReadUInt8());
            if (i !== 5)
                moduleMask <<= BigInt(8);
        }
        var julianSecs = reader.ReadUInt32();
        report.timestamp = moment.utc('1980-01-06T00:00:00').add(julianSecs, 'seconds');
        var reasonFlags = reader.ReadUInt32();
        for (var i = 0; i < ProtocolXReasonLabel.COUNT; i++) {
            var mask = 1 << i;
            if ((reasonFlags & mask) === mask) {
                report.reasons.push(new ProtocolXReason(i, ProtocolXReasonLabel[i]));
            }
        }
        report.statusFlags = reader.ReadUInt16();
        report.status = new ProtocolXReportStatus();
        report.status.ignitionState = (report.statusFlags & 0x1) === 1;
        report.status.businessMode = (report.statusFlags & 0x2) === 0;
        report.status.gpsValid = (report.statusFlags & 0x4) === 0;
        report.status.networkRoaming = (report.statusFlags & 0x8) === 1;
        report.status.reportsToFollow = (report.statusFlags & 0x10) === 1;
        report.status.storedReport = (report.statusFlags & 0x20) === 1;
        report.status.immobilised = (report.statusFlags & 0x40) === 1;
        report.status.rs232ExternalDeviceReadError = (report.statusFlags & 0x80) === 1;
        report.status.gpsJammerDetected = (report.statusFlags & 0x100) === 1;
        report.status.luggageCompartmentUnlocked = (report.statusFlags & 0x200) === 0;
        report.status.backupBatteryCharging = (report.statusFlags & 0x400) === 1;
        // DEVICE POWER
        if ((moduleMask & ProtocolXDevicePower.mask) === ProtocolXDevicePower.mask) {
            report.devicePower = new ProtocolXDevicePower(reader.ReadUInt8() * 0.2, reader.ReadUInt8());
        }
        // GPS DATA
        if ((moduleMask & ProtocolXGpsData.mask) === ProtocolXGpsData.mask) {
            reader.ReadBytes(4);
            report.gpsData = new ProtocolXGpsData(reader.ReadInt32() / 1000000, reader.ReadInt32() / 1000000, reader.ReadUInt8() * 2, reader.ReadUInt8() * 2, reader.ReadUInt8() * 2, reader.ReadUInt8() * 20, reader.ReadUInt16() / 10);
        }
        // DIGITALS
        if ((moduleMask & ProtocolXDigitals.mask) === ProtocolXDigitals.mask) {
            report.digitals = new ProtocolXDigitals(reader.ReadUInt16(), reader.ReadUInt16());
        }
        // ANALOGUES
        if ((moduleMask & ProtocolXAnalogues.mask) === ProtocolXAnalogues.mask) {
            report.analogues = new ProtocolXAnalogues(reader.ReadUInt16(), reader.ReadUInt16());
        }
        // DRIVER BEHAVIOUR
        if ((moduleMask & ProtocolXDriverBehaviour.mask) === ProtocolXDriverBehaviour.mask) {
            report.driverBehaviour = new ProtocolXDriverBehaviour(reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt16());
        }
        // SIGNAL QUALITY
        if ((moduleMask & ProtocolXSignalQuality.mask) === ProtocolXSignalQuality.mask) {
            var sqByte = reader.ReadUInt8();
            report.signalQuality = new ProtocolXSignalQuality(sqByte & 0x0F, -111 + (((sqByte >> 4) & 0x0F) * 4));
        }
        // GSM NETWORK INFO
        if ((moduleMask & ProtocolXGsmNetworkInfo.mask) === ProtocolXGsmNetworkInfo.mask) {
            report.gsmNetworkInfo = new ProtocolXGsmNetworkInfo(reader.ReadUInt16(), reader.ReadUInt16());
        }
        // GEOFENCES
        if ((moduleMask & ProtocolXGeofences.mask) === ProtocolXGeofences.mask) {
            report.geofences = new ProtocolXGeofences(reader.ReadUInt8());
        }
        // DRIVER ID
        if ((moduleMask & ProtocolXDriverId.mask) === ProtocolXDriverId.mask) {
            var src = ProtocolXDriverIdSource.NONE;
            switch (reader.ReadUInt8()) {
                case 1:
                    ProtocolXDriverIdSource.IBUTTON;
                    break;
                case 2:
                    ProtocolXDriverIdSource.RFID;
                    break;
                case 3:
                    ProtocolXDriverIdSource.BLUETOOTH;
                    break;
                case 4:
                    ProtocolXDriverIdSource.CR002_CARD_READER;
                    break;
            }
            report.driverId = new ProtocolXDriverId(src, reader.ReadBytes(8).toString('hex').toUpperCase());
        }
        // TRAILER ID
        if ((moduleMask & ProtocolXTrailerId.mask) === ProtocolXTrailerId.mask) {
            report.trailerId = new ProtocolXTrailerId(reader.ReadUInt8() === 1 ? ProtocolXTrailerIdSource.HEGEMON : ProtocolXTrailerIdSource.NONE, reader.ReadBytes(10).toString('ascii'), reader.ReadUInt8());
        }
        // FMS JOURNEY-START DATA
        if ((moduleMask & ProtocolXFmsJourneyStartData.mask) === ProtocolXFmsJourneyStartData.mask) {
            report.fmsJourneyStartData = new ProtocolXFmsJourneyStartData(reader.ReadUInt16());
        }
        // GNSS STOP-REPORT DATA
        if ((moduleMask & ProtocolXGnssStopReportData.mask) === ProtocolXGnssStopReportData.mask) {
            var lifetimeOdoKm = reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            report.gnssStopReportData = new ProtocolXGnssStopReportData(lifetimeOdoKm, reader.ReadUInt16());
        }
        // FMS IN-JOURNEY DATA
        if ((moduleMask & ProtocolXFmsInJourneyData.mask) === ProtocolXFmsInJourneyData.mask) {
            report.fmsInJourneyData = new ProtocolXFmsInJourneyData(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() * 32, reader.ReadUInt8() * 32, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16() / 10, reader.ReadUInt8() + 40, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt32() / 2);
        }
        // OBD IN-JOURNEY DATA
        if ((moduleMask & ProtocolXObdInJourneyData.mask) === ProtocolXObdInJourneyData.mask) {
            report.obdInJourneyData = new ProtocolXObdInJourneyData(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() * 32, reader.ReadUInt8() * 32, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16() / 10, reader.ReadUInt8() + 40, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt16() / 10);
        }
        // OBD DTC CODES
        if ((moduleMask & ProtocolXObdDtcCodes.mask) === ProtocolXObdDtcCodes.mask) {
            report.obdDtcCodes = new ProtocolXObdDtcCodes(reader.ReadBytes(5).toString('ascii'), reader.ReadBytes(5).toString('ascii'), reader.ReadBytes(5).toString('ascii'), reader.ReadBytes(5).toString('ascii'), reader.ReadBytes(5).toString('ascii'));
        }
        // FMS JOURNEY-STOP DATA
        if ((moduleMask & ProtocolXFmsJourneyStopData.mask) === ProtocolXFmsJourneyStopData.mask) {
            var lifetimeOdoKm = reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            report.fmsJourneyStopData = new ProtocolXFmsJourneyStopData(lifetimeOdoKm, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16() / 10, reader.ReadUInt16(), reader.ReadUInt16() * 5);
        }
        // OBD JOURNEY-STOP DATA
        if ((moduleMask & ProtocolXObdJourneyStopData.mask) === ProtocolXObdJourneyStopData.mask) {
            var lifetimeOdoKm = reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            report.obdJourneyStopData = new ProtocolXObdJourneyStopData(lifetimeOdoKm, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16());
        }
        // CARRIER TEMPERATURE DATA
        if ((moduleMask & ProtocolXCarrierTemperatureData.mask) === ProtocolXCarrierTemperatureData.mask) {
            report.carrierTemperatureData = new ProtocolXCarrierTemperatureData(reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt8() / 2, reader.ReadUInt8() / 2, reader.ReadUInt8() / 2, reader.ReadUInt8(), reader.ReadUInt16() * 2, reader.ReadUInt16() * 2, reader.ReadUInt16(), readU24(reader));
        }
        // ONE-WIRE TEMPERATURE PROBE
        if ((moduleMask & ProtocolXOneWireTemperatureProbe.mask) === ProtocolXOneWireTemperatureProbe.mask) {
            report.oneWireTemperatureProbe = new ProtocolXOneWireTemperatureProbe((reader.ReadUInt16() / 10) - 550, (reader.ReadUInt16() / 10) - 550, (reader.ReadUInt16() / 10) - 550, (reader.ReadUInt16() / 10) - 550);
        }
        // CARRIER TWO-WAY ALARMS
        if ((moduleMask & ProtocolXCarrierTwoWayAlarms.mask) === ProtocolXCarrierTwoWayAlarms.mask) {
            report.carrierTwoWayAlarms = new ProtocolXCarrierTwoWayAlarms(reader.ReadUInt8(), reader.ReadBytes(16));
        }
        // RAYVOLT E-BICYCLE
        if ((moduleMask & ProtocolXRayvoltEBicycle.mask) === ProtocolXRayvoltEBicycle.mask) {
            report.rayvoltEBicycle = new ProtocolXRayvoltEBicycle(reader.ReadUInt32(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt8() / 4, reader.ReadInt8(), reader.ReadUInt8() / 2, reader.ReadUInt16());
            // skip reserved bytes
            reader.ReadBytes(2);
        }
        // ECON 3-BYTE
        if ((moduleMask & ProtocolXEcon3Byte.mask) === ProtocolXEcon3Byte.mask) {
            report.econ3Byte = new ProtocolXEcon3Byte(readU24(reader));
        }
        // GRITTER DATA (BS EN 15430)
        if ((moduleMask & ProtocolXGritterDataBsEn15430.mask) === ProtocolXGritterDataBsEn15430.mask) {
            report.gritterDataBsEn15430 = new ProtocolXGritterDataBsEn15430(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() / 10, reader.ReadUInt8());
        }
        // REDFORGE WEIGHT
        if ((moduleMask & ProtocolXRedforgeWeight.mask) === ProtocolXRedforgeWeight.mask) {
            report.redforgeWeight = new ProtocolXRedforgeWeight(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8());
        }
        // NMEA 2000 DATA
        if ((moduleMask & ProtocolXNmea2000Data.mask) === ProtocolXNmea2000Data.mask) {
            report.nmea2000Data = new ProtocolXNmea2000Data(reader.ReadInt16() * 0.004, reader.ReadInt16() * 0.004, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16() * 10, reader.ReadUInt16(), reader.ReadUInt32(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt32() * 0.01, reader.ReadUInt16() * 0.001, reader.ReadUInt16() * 0.01, reader.ReadUInt16() * 0.01, reader.ReadBytes(16));
        }
        // SIM SUBSCRIBER ID
        if ((moduleMask & ProtocolXSimSubscriberId.mask) === ProtocolXSimSubscriberId.mask) {
            report.simSubscriberId = new ProtocolXSimSubscriberId(reader.ReadBytes(7));
        }
        // SIM CARD SERIAL NUMBER
        if ((moduleMask & ProtocolXSimCardSerialNumber.mask) === ProtocolXSimCardSerialNumber.mask) {
            report.simCardSerialNumber = new ProtocolXSimCardSerialNumber(reader.ReadBytes(20).toString('ascii'));
        }
        // FMS DRIVER-ID
        if ((moduleMask & ProtocolXFmsDriverId.mask) === ProtocolXFmsDriverId.mask) {
            report.fmsDriverId = new ProtocolXFmsDriverId(reader.ReadBytes(19).toString('ascii'), reader.ReadBytes(19).toString('ascii'));
        }
        // FMS IN-JOURNEY HIGH-RES
        if ((moduleMask & ProtocolXFmsInJourneyHighRes.mask) === ProtocolXFmsInJourneyHighRes.mask) {
            report.fmsInJourneyHighRes = new ProtocolXFmsInJourneyHighRes(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() * 32, reader.ReadUInt8() * 32, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16() / 100, reader.ReadUInt8() + 40, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt32() / 1000);
        }
        // FMS DRIVER WORKING STATES
        if ((moduleMask & ProtocolXFmsDriverWorkingStates.mask) === ProtocolXFmsDriverWorkingStates.mask) {
            report.fmsDriverWorkingStates = new ProtocolXFmsDriverWorkingStates(reader.ReadUInt32(), reader.ReadUInt8());
        }
        // SEGWAY NINEBOT ES4 SHARING
        if ((moduleMask & ProtocolXSegwayNinebotEs4Sharing.mask) === ProtocolXSegwayNinebotEs4Sharing.mask) {
            report.segwayNinebotEs4Sharing = new ProtocolXSegwayNinebotEs4Sharing(reader.ReadUInt8() / 10, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8());
        }
        // SENSORS
        if ((moduleMask & ProtocolXSensors.mask) === ProtocolXSensors.mask) {
            report.sensors = new ProtocolXSensors();
            for (var i = 0; i < 6; i++) {
                var b1 = reader.ReadUInt8();
                var rawType = b1 & 0x0F;
                var sensor = new ProtocolXSensor(i, rawType === 1 ? ProtocolXSensorType.TEMPERATURE
                    : rawType === 2 ? ProtocolXSensorType.HUMIDITY
                        : rawType === 3 ? ProtocolXSensorType.LIGHT
                            : ProtocolXSensorType.UNASSIGNED, (b1 & 0xF0) !== 0);
                if (sensor.type !== ProtocolXSensorType.UNASSIGNED) {
                    switch (sensor.type) {
                        case ProtocolXSensorType.TEMPERATURE:
                            sensor.temperatureDeg = reader.ReadInt16() / 100;
                            break;
                        case ProtocolXSensorType.HUMIDITY:
                            sensor.humidityPercent = reader.ReadUInt16() / 100;
                            break;
                    }
                    if (!report.sensors.sensors)
                        report.sensors.sensors = [];
                    report.sensors.sensors.push(sensor);
                }
            }
        }
        // GOING GREEN "THE CORE" BIKE DATA
        if ((moduleMask & ProtocolXGoingGreenTheCoreBikeData.mask) === ProtocolXGoingGreenTheCoreBikeData.mask) {
            report.goingGreenTheCoreBikeData = new ProtocolXGoingGreenTheCoreBikeData(reader.ReadUInt16() * 0.0015);
        }
        // ECOOTER E1/E2 SCOOTER DATA
        if ((moduleMask & ProtocolXEcooterScooterData.mask) === ProtocolXEcooterScooterData.mask) {
            report.ecooterScooterData = new ProtocolXEcooterScooterData(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadInt8(), reader.ReadInt8(), reader.ReadInt16() * 10, reader.ReadUInt8());
            // skip reserved bytes
            reader.ReadBytes(2);
        }
        // TORROT MUVI SCOOTER DATA
        if ((moduleMask & ProtocolXTorrotMuviScooterData.mask) === ProtocolXTorrotMuviScooterData.mask) {
            report.torrotMuviScooterData = new ProtocolXTorrotMuviScooterData(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadInt16() / 10, reader.ReadInt16() / 10, reader.ReadInt16() / 10, reader.ReadInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16(), reader.ReadUInt32(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() / 0.22745, reader.ReadUInt8() / 0.3921, reader.ReadInt8(), reader.ReadInt32() * 100, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8());
            // skip reserved bytes
            reader.ReadBytes(2);
        }
        // ECOOTER SERIAL NUMBERS
        if ((moduleMask & ProtocolXEcooterSerialNumbers.mask) === ProtocolXEcooterSerialNumbers.mask) {
            report.ecooterSerialNumbers = new ProtocolXEcooterSerialNumbers(reader.ReadBytes(16).toString('ascii'), reader.ReadBytes(16).toString('ascii'));
        }
        // ASKOLL ES2 SCOOTER DATA
        if ((moduleMask & ProtocolXAskollEs2ScooterData.mask) === ProtocolXAskollEs2ScooterData.mask) {
            var julianSecs_1 = reader.ReadUInt32();
            var timestamp = moment.utc('1980-01-06T00:00:00').add(julianSecs_1, 'seconds');
            report.askollEs2ScooterData = new ProtocolXAskollEs2ScooterData(timestamp, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadInt8(), reader.ReadUInt16() * 100, reader.ReadUInt8() * 100, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt32() * 100, reader.ReadUInt16() * 100, reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16() * 10, reader.ReadUInt16(), reader.ReadUInt8() * 0.1, reader.ReadUInt8());
            // skip reserved bytes
            reader.ReadBytes(2);
        }
        // CASH IN TRANSIT STATUS
        if ((moduleMask & ProtocolXCashInTransitStatus.mask) === ProtocolXCashInTransitStatus.mask) {
            report.cashInTransitStatus = new ProtocolXCashInTransitStatus(reader.ReadUInt8(), reader.ReadBytes(5));
        }
        // TORROT MUVI BATTERY DATA
        if ((moduleMask & ProtocolXTorrotMuviBatteryData.mask) === ProtocolXTorrotMuviBatteryData.mask) {
            report.torrotMuviBatteryData = new ProtocolXTorrotMuviBatteryData(reader.ReadBytes(13).toString('ascii'), reader.ReadBytes(13).toString('ascii'), reader.ReadUInt16(), reader.ReadUInt16(), readU24(reader) * 0.1, readU24(reader) * 0.1, reader.ReadUInt8(), reader.ReadBytes(2));
        }
        // BATTERY USAGE STATISTICS
        if ((moduleMask & ProtocolXBatteryUsageStatistics.mask) === ProtocolXBatteryUsageStatistics.mask) {
            report.batteryUsageStatistics = new ProtocolXBatteryUsageStatistics(readU24(reader), readU24(reader), readU24(reader), readU24(reader), readU24(reader), readU24(reader), readU24(reader), readU24(reader), readU24(reader), readU24(reader), readU24(reader), readU24(reader), readU24(reader));
        }
        // STARS ACIM MOTOR CONTROLLER DATA
        if ((moduleMask & ProtocolXStarsAcimMotorControllerData.mask) === ProtocolXStarsAcimMotorControllerData.mask) {
            report.starsAcimMotorControllerData = new ProtocolXStarsAcimMotorControllerData(reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16() / 100, reader.ReadUInt8(), reader.ReadInt16() / 100, reader.ReadInt16() / 100, reader.ReadInt16(), reader.ReadInt16(), reader.ReadUInt8(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16());
            var julianSecs_2 = reader.ReadUInt32();
            var timestamp = moment.utc('1980-01-06T00:00:00').add(julianSecs_2, 'seconds');
            report.starsAcimMotorControllerData.canEventDateTime = timestamp;
            // skip reserved bytes
            reader.ReadBytes(4);
        }
        // "CAR2" DATA
        if ((moduleMask & ProtocolXCar2Data.mask) === ProtocolXCar2Data.mask) {
            report.car2Data = new ProtocolXCar2Data(reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16());
            var julianSecs_3 = reader.ReadUInt32();
            var timestamp = moment.utc('1980-01-06T00:00:00').add(julianSecs_3, 'seconds');
            report.car2Data.canEventDateTime = timestamp;
            report.car2Data.reserved = reader.ReadBytes(8);
        }
        // GNSS EXTENDED DATA
        if ((moduleMask & ProtocolXGnssExtendedData.mask) === ProtocolXGnssExtendedData.mask) {
            report.gnssExtendedData = new ProtocolXGnssExtendedData(reader.ReadUInt32(), reader.ReadInt32(), reader.ReadInt32(), reader.ReadUInt8() * 2, reader.ReadUInt8() * 2, reader.ReadUInt8() * 2, reader.ReadUInt8() * 20, reader.ReadUInt16() * 100, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() * 0.1, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadBytes(4));
        }
        // CM2010 MOBILITY SCOOTER CONTROLLER
        if ((moduleMask & ProtocolXCm2010MobilityScooterController.mask) === ProtocolXCm2010MobilityScooterController.mask) {
            report.cm2010MobilityScooterController = new ProtocolXCm2010MobilityScooterController(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16() / 100, reader.ReadUInt16() / 100, reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadBytes(2));
        }
        // ASTRA GENERIC CAN DATA
        if ((moduleMask & ProtocolXAstraGenericCanData.mask) === ProtocolXAstraGenericCanData.mask) {
            var byteCount = reader.ReadUInt16() - 2;
            if (byteCount >= 12 && (byteCount % 12) === 0) {
                report.astraGenericCanData = new ProtocolXAstraGenericCanData();
                var entryCount = byteCount / 12;
                for (var i = 0; i < entryCount; i++) {
                    if (!report.astraGenericCanData.entries)
                        report.astraGenericCanData.entries = [];
                    report.astraGenericCanData.entries.push(new ProtocolXAstraGenericCanDataEntry(reader.ReadUInt32(), reader.ReadBytes(8)));
                }
            }
            else if (byteCount > 0) {
                reader.ReadBytes(byteCount);
            }
        }
        // ASTRA GENERIC DEBUG DATA
        if ((moduleMask & ProtocolXAstraGenericDebugData.mask) === ProtocolXAstraGenericDebugData.mask) {
            var payloadSize = reader.ReadUInt16() - 1;
            var payloadType = reader.ReadUInt8();
            switch (payloadType) {
                case ProtocolXAstraDebugDataType.NV_DATA:
                    // skip type length
                    reader.ReadBytes(2);
                    report.astraGenericDebugData = new ProtocolXAstraGenericDebugData();
                    report.astraGenericDebugData.nvData = new ProtocolXAstraDebugNvData(readU16BE(reader), readU32BE(reader), readU32BE(reader));
                    report.astraGenericDebugData.nvData.watchdogLevels = [];
                    for (var i = 0; i < 15; i++) {
                        report.astraGenericDebugData.nvData.watchdogLevels.push(readU16BE(reader));
                    }
                    var wdgServiceName = reader.ReadBytes(8);
                    if (wdgServiceName[0] !== 0) {
                        report.astraGenericDebugData.nvData.watchdogServiceName = wdgServiceName.toString('ascii');
                    }
                    break;
                default:
                    // skip payload
                    if (payloadSize > 0) {
                        reader.ReadBytes(payloadSize);
                    }
                    break;
            }
        }
        return report;
    };
    return ProtocolXReport;
}());
export { ProtocolXReport };
