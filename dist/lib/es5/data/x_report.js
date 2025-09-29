"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolXReport = void 0;
var moment = require("moment-timezone");
var utils_1 = require("../utils");
var x_analogues_1 = require("./modules/x_analogues");
var x_askoll_es2_scooter_data_1 = require("./modules/x_askoll_es2_scooter_data");
var x_astra_generic_can_data_1 = require("./modules/x_astra_generic_can_data");
var x_astra_generic_debug_data_1 = require("./modules/x_astra_generic_debug_data");
var x_battery_usage_statistics_1 = require("./modules/x_battery_usage_statistics");
var x_car2_data_1 = require("./modules/x_car2_data");
var x_carrier_2_way_alarms_1 = require("./modules/x_carrier_2_way_alarms");
var x_carrier_temperature_data_1 = require("./modules/x_carrier_temperature_data");
var x_cash_in_transit_status_1 = require("./modules/x_cash_in_transit_status");
var x_device_power_1 = require("./modules/x_device_power");
var x_digitals_1 = require("./modules/x_digitals");
var x_driver_behaviour_1 = require("./modules/x_driver_behaviour");
var x_driver_id_1 = require("./modules/x_driver_id");
var x_econ_3_byte_1 = require("./modules/x_econ_3_byte");
var x_ecooter_scooter_data_1 = require("./modules/x_ecooter_scooter_data");
var x_ecooter_serial_numbers_1 = require("./modules/x_ecooter_serial_numbers");
var x_fms_driver_id_1 = require("./modules/x_fms_driver_id");
var x_fms_driver_working_states_1 = require("./modules/x_fms_driver_working_states");
var x_fms_in_journey_data_1 = require("./modules/x_fms_in_journey_data");
var x_fms_in_journey_high_res_1 = require("./modules/x_fms_in_journey_high_res");
var x_fms_journey_start_data_1 = require("./modules/x_fms_journey_start_data");
var x_fms_journey_stop_data_1 = require("./modules/x_fms_journey_stop_data");
var x_geofences_1 = require("./modules/x_geofences");
var x_gnss_extended_data_1 = require("./modules/x_gnss_extended_data");
var x_gnss_stop_report_data_1 = require("./modules/x_gnss_stop_report_data");
var x_going_green_the_core_bike_data_1 = require("./modules/x_going_green_the_core_bike_data");
var x_gps_data_1 = require("./modules/x_gps_data");
var x_gsm_network_info_1 = require("./modules/x_gsm_network_info");
var x_nmea_2000_data_1 = require("./modules/x_nmea_2000_data");
var x_obd_dtc_codes_1 = require("./modules/x_obd_dtc_codes");
var x_obd_in_journey_data_1 = require("./modules/x_obd_in_journey_data");
var x_obd_journey_stop_data_1 = require("./modules/x_obd_journey_stop_data");
var x_one_wire_temperature_probe_1 = require("./modules/x_one_wire_temperature_probe");
var x_rayvolt_e_bicycle_1 = require("./modules/x_rayvolt_e_bicycle");
var x_redforge_weight_1 = require("./modules/x_redforge_weight");
var x_segway_ninebot_es4_sharing_1 = require("./modules/x_segway_ninebot_es4_sharing");
var x_sensors_1 = require("./modules/x_sensors");
var x_signal_quality_1 = require("./modules/x_signal_quality");
var x_sim_card_serial_number_1 = require("./modules/x_sim_card_serial_number");
var x_sim_subscriber_id_1 = require("./modules/x_sim_subscriber_id");
var x_stars_acim_motor_controller_data_1 = require("./modules/x_stars_acim_motor_controller_data");
var x_torrot_muvi_battery_data_1 = require("./modules/x_torrot_muvi_battery_data");
var x_torrot_muvi_scooter_data_1 = require("./modules/x_torrot_muvi_scooter_data");
var x_driver_id_source_1 = require("./x_driver_id_source");
var x_reason_1 = require("./x_reason");
var x_reason_labels_1 = require("./x_reason_labels");
var x_report_status_1 = require("./x_report_status");
var x_heinzmann_1 = require("./modules/x_heinzmann");
var z_mod32_1 = require("./modules/z_mod32");
var z_mod33_1 = require("./modules/z_mod33");
var z_mod34_1 = require("./modules/z_mod34");
var z_mod35_1 = require("./modules/z_mod35");
var z_mod36_1 = require("./modules/z_mod36");
var z_mod37_1 = require("./modules/z_mod37");
var z_mod38_1 = require("./modules/z_mod38");
var z_mod39_1 = require("./modules/z_mod39");
var x_beacons_1 = require("./modules/x_beacons");
var x_gritter_data_bs_en_15430_1 = require("./modules/x_gritter_data_bs_en_15430");
var x_driver_alcohol_test_data_1 = require("./modules/x_driver_alcohol_test_data");
var binutils = require('binutils64');
var ProtocolXReport = /** @class */ (function () {
    function ProtocolXReport() {
        this.reasons = [];
    }
    ProtocolXReport.fromReader = function (reader, loginData) {
        var report = new ProtocolXReport();
        report.sequenceNumber = reader.ReadUInt8();
        var moduleMask = BigInt(0);
        for (var i = 0; i < 6; i++) {
            moduleMask |= BigInt(reader.ReadUInt8());
            if (i !== 5)
                moduleMask <<= BigInt(8);
        }
        report.rawModuleMask = moduleMask;
        var julianSecs = reader.ReadUInt32();
        report.rawRtcTime = julianSecs;
        report.timestamp = moment.tz('1980-01-06T00:00:00', 'UTC').add(julianSecs, 'seconds');
        var reasonFlags = reader.ReadUInt32();
        report.rawReasonFlags = reasonFlags;
        for (var i = 0; i < x_reason_labels_1.ProtocolXReasonLabel.COUNT; i++) {
            var mask = 1 << i;
            if ((reasonFlags & mask) === mask) {
                report.reasons.push(new x_reason_1.ProtocolXReason(i, x_reason_labels_1.ProtocolXReasonLabel[i]));
            }
        }
        report.statusFlags = reader.ReadUInt16();
        report.rawStatusFlags = report.statusFlags;
        report.status = new x_report_status_1.ProtocolXReportStatus();
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
        if ((moduleMask & x_device_power_1.ProtocolXDevicePower.mask) === x_device_power_1.ProtocolXDevicePower.mask) {
            report.devicePower = new x_device_power_1.ProtocolXDevicePower(reader.ReadUInt8() * 0.2, reader.ReadUInt8());
        }
        // GPS DATA
        if ((moduleMask & x_gps_data_1.ProtocolXGpsData.mask) === x_gps_data_1.ProtocolXGpsData.mask) {
            report.rawGpsTimeDateLastKnownGood = reader.ReadUInt32();
            report.gpsData = new x_gps_data_1.ProtocolXGpsData(reader.ReadInt32() / 1000000, reader.ReadInt32() / 1000000, reader.ReadUInt8() * 2, reader.ReadUInt8() * 2, reader.ReadUInt8() * 2, reader.ReadUInt8() * 20, reader.ReadUInt16() / 10);
        }
        // DIGITALS
        if ((moduleMask & x_digitals_1.ProtocolXDigitals.mask) === x_digitals_1.ProtocolXDigitals.mask) {
            report.digitals = new x_digitals_1.ProtocolXDigitals(reader.ReadUInt16(), reader.ReadUInt16());
        }
        // ANALOGUES
        if ((moduleMask & x_analogues_1.ProtocolXAnalogues.mask) === x_analogues_1.ProtocolXAnalogues.mask) {
            report.analogues = new x_analogues_1.ProtocolXAnalogues(reader.ReadUInt16(), reader.ReadUInt16());
        }
        // DRIVER BEHAVIOUR
        if ((moduleMask & x_driver_behaviour_1.ProtocolXDriverBehaviour.mask) === x_driver_behaviour_1.ProtocolXDriverBehaviour.mask) {
            report.driverBehaviour = new x_driver_behaviour_1.ProtocolXDriverBehaviour(reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt8() / 10, reader.ReadUInt16());
        }
        // SIGNAL QUALITY
        if ((moduleMask & x_signal_quality_1.ProtocolXSignalQuality.mask) === x_signal_quality_1.ProtocolXSignalQuality.mask) {
            var sqByte = reader.ReadUInt8();
            report.signalQuality = new x_signal_quality_1.ProtocolXSignalQuality(sqByte & 0x0F, -111 + (((sqByte >> 4) & 0x0F) * 4));
        }
        // GSM NETWORK INFO
        if ((moduleMask & x_gsm_network_info_1.ProtocolXGsmNetworkInfo.mask) === x_gsm_network_info_1.ProtocolXGsmNetworkInfo.mask) {
            report.gsmNetworkInfo = new x_gsm_network_info_1.ProtocolXGsmNetworkInfo(reader.ReadUInt16(), reader.ReadUInt16());
        }
        // GEOFENCES
        if ((moduleMask & x_geofences_1.ProtocolXGeofences.mask) === x_geofences_1.ProtocolXGeofences.mask) {
            report.geofences = new x_geofences_1.ProtocolXGeofences(reader.ReadUInt8());
        }
        // DRIVER ID
        if ((moduleMask & x_driver_id_1.ProtocolXDriverId.mask) === x_driver_id_1.ProtocolXDriverId.mask) {
            var src = x_driver_id_source_1.ProtocolXDriverIdSource.NONE;
            switch (reader.ReadUInt8()) {
                case 1:
                    src = x_driver_id_source_1.ProtocolXDriverIdSource.IBUTTON;
                    break;
                case 2:
                    src = x_driver_id_source_1.ProtocolXDriverIdSource.RFID;
                    break;
                case 3:
                    src = x_driver_id_source_1.ProtocolXDriverIdSource.BLUETOOTH;
                    break;
                case 4:
                    src = x_driver_id_source_1.ProtocolXDriverIdSource.CR002_CARD_READER;
                    break;
            }
            report.driverId = new x_driver_id_1.ProtocolXDriverId(src, reader.ReadBytes(8).toString('hex').toUpperCase());
        }
        // DRIVER ALCOHOL TEST DATA
        if ((moduleMask & x_driver_alcohol_test_data_1.ProtocolXDriverAlcoholTestData.mask) === x_driver_alcohol_test_data_1.ProtocolXDriverAlcoholTestData.mask) {
            var rawStatus = reader.ReadUInt8();
            report.driverAlcoholTestData = new x_driver_alcohol_test_data_1.ProtocolXDriverAlcoholTestData(rawStatus, (rawStatus & 0x01) === 0x01, reader.ReadUInt16());
            // skip reserved
            reader.ReadBytes(5);
        }
        // FMS JOURNEY-START DATA
        if ((moduleMask & x_fms_journey_start_data_1.ProtocolXFmsJourneyStartData.mask) === x_fms_journey_start_data_1.ProtocolXFmsJourneyStartData.mask) {
            report.fmsJourneyStartData = new x_fms_journey_start_data_1.ProtocolXFmsJourneyStartData(reader.ReadUInt16());
        }
        // GNSS STOP-REPORT DATA
        if ((moduleMask & x_gnss_stop_report_data_1.ProtocolXGnssStopReportData.mask) === x_gnss_stop_report_data_1.ProtocolXGnssStopReportData.mask) {
            var lifetimeOdoKm = reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            report.gnssStopReportData = new x_gnss_stop_report_data_1.ProtocolXGnssStopReportData(lifetimeOdoKm, reader.ReadUInt16());
        }
        // FMS IN-JOURNEY DATA
        if ((moduleMask & x_fms_in_journey_data_1.ProtocolXFmsInJourneyData.mask) === x_fms_in_journey_data_1.ProtocolXFmsInJourneyData.mask) {
            report.fmsInJourneyData = new x_fms_in_journey_data_1.ProtocolXFmsInJourneyData(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() * 32, reader.ReadUInt8() * 32, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16() / 10, reader.ReadUInt8() - 40, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt32() / 2);
        }
        // OBD IN-JOURNEY DATA
        if ((moduleMask & x_obd_in_journey_data_1.ProtocolXObdInJourneyData.mask) === x_obd_in_journey_data_1.ProtocolXObdInJourneyData.mask) {
            report.obdInJourneyData = new x_obd_in_journey_data_1.ProtocolXObdInJourneyData(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() * 32, reader.ReadUInt8() * 32, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16() / 10, reader.ReadUInt8() - 40, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt16() / 10);
        }
        // OBD DTC CODES
        if ((moduleMask & x_obd_dtc_codes_1.ProtocolXObdDtcCodes.mask) === x_obd_dtc_codes_1.ProtocolXObdDtcCodes.mask) {
            report.obdDtcCodes = new x_obd_dtc_codes_1.ProtocolXObdDtcCodes(reader.ReadBytes(5).toString('ascii'), reader.ReadBytes(5).toString('ascii'), reader.ReadBytes(5).toString('ascii'), reader.ReadBytes(5).toString('ascii'), reader.ReadBytes(5).toString('ascii'));
        }
        // FMS JOURNEY-STOP DATA
        if ((moduleMask & x_fms_journey_stop_data_1.ProtocolXFmsJourneyStopData.mask) === x_fms_journey_stop_data_1.ProtocolXFmsJourneyStopData.mask) {
            var lifetimeOdoKm = reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            report.fmsJourneyStopData = new x_fms_journey_stop_data_1.ProtocolXFmsJourneyStopData(lifetimeOdoKm, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16() / 10, reader.ReadUInt16(), reader.ReadUInt16() * 5);
        }
        // OBD JOURNEY-STOP DATA
        if ((moduleMask & x_obd_journey_stop_data_1.ProtocolXObdJourneyStopData.mask) === x_obd_journey_stop_data_1.ProtocolXObdJourneyStopData.mask) {
            var lifetimeOdoKm = reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            lifetimeOdoKm <<= 8;
            lifetimeOdoKm |= reader.ReadUInt8();
            report.obdJourneyStopData = new x_obd_journey_stop_data_1.ProtocolXObdJourneyStopData(lifetimeOdoKm, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16());
        }
        // CARRIER TEMPERATURE DATA
        if ((moduleMask & x_carrier_temperature_data_1.ProtocolXCarrierTemperatureData.mask) === x_carrier_temperature_data_1.ProtocolXCarrierTemperatureData.mask) {
            if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
                reader.ReadBytes(17);
            }
            else {
                report.carrierTemperatureData = new x_carrier_temperature_data_1.ProtocolXCarrierTemperatureData(reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt8() / 2, reader.ReadUInt8() / 2, reader.ReadUInt8() / 2, reader.ReadUInt8(), reader.ReadUInt16() * 2, reader.ReadUInt16() * 2, reader.ReadUInt16(), (0, utils_1.readU24)(reader));
            }
        }
        // ONE-WIRE TEMPERATURE PROBE
        if ((moduleMask & x_one_wire_temperature_probe_1.ProtocolXOneWireTemperatureProbe.mask) === x_one_wire_temperature_probe_1.ProtocolXOneWireTemperatureProbe.mask) {
            report.oneWireTemperatureProbe = new x_one_wire_temperature_probe_1.ProtocolXOneWireTemperatureProbe((reader.ReadUInt16() / 10) - 550, (reader.ReadUInt16() / 10) - 550, (reader.ReadUInt16() / 10) - 550, (reader.ReadUInt16() / 10) - 550);
        }
        // CARRIER TWO-WAY ALARMS
        if ((moduleMask & x_carrier_2_way_alarms_1.ProtocolXCarrierTwoWayAlarms.mask) === x_carrier_2_way_alarms_1.ProtocolXCarrierTwoWayAlarms.mask) {
            if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
                reader.ReadBytes(10);
            }
            else {
                report.carrierTwoWayAlarms = new x_carrier_2_way_alarms_1.ProtocolXCarrierTwoWayAlarms(reader.ReadUInt8(), reader.ReadBytes(16));
            }
        }
        // RAYVOLT E-BICYCLE
        if ((moduleMask & x_rayvolt_e_bicycle_1.ProtocolXRayvoltEBicycle.mask) === x_rayvolt_e_bicycle_1.ProtocolXRayvoltEBicycle.mask) {
            if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
                reader.ReadBytes(19);
            }
            else {
                report.rayvoltEBicycle = new x_rayvolt_e_bicycle_1.ProtocolXRayvoltEBicycle(reader.ReadUInt32(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt8() / 4, reader.ReadInt8(), reader.ReadUInt8() / 2, reader.ReadUInt16());
                // skip reserved bytes
                reader.ReadBytes(2);
            }
        }
        // ECON 3-BYTE
        if ((moduleMask & x_econ_3_byte_1.ProtocolXEcon3Byte.mask) === x_econ_3_byte_1.ProtocolXEcon3Byte.mask) {
            report.econ3Byte = new x_econ_3_byte_1.ProtocolXEcon3Byte((0, utils_1.readU24)(reader));
        }
        // GRITTER DATA (BS EN 15430)
        if ((moduleMask & x_gritter_data_bs_en_15430_1.ProtocolXGritterDataBsEn15430.mask) === x_gritter_data_bs_en_15430_1.ProtocolXGritterDataBsEn15430.mask) {
            report.gritterDataBsEn15430 = new x_gritter_data_bs_en_15430_1.ProtocolXGritterDataBsEn15430(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() / 10, reader.ReadUInt8());
        }
        // REDFORGE WEIGHT
        if ((moduleMask & x_redforge_weight_1.ProtocolXRedforgeWeight.mask) === x_redforge_weight_1.ProtocolXRedforgeWeight.mask) {
            report.redforgeWeight = new x_redforge_weight_1.ProtocolXRedforgeWeight(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8());
        }
        // NMEA 2000 DATA
        if ((moduleMask & x_nmea_2000_data_1.ProtocolXNmea2000Data.mask) === x_nmea_2000_data_1.ProtocolXNmea2000Data.mask) {
            if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
                reader.ReadBytes(6);
            }
            else {
                report.nmea2000Data = new x_nmea_2000_data_1.ProtocolXNmea2000Data(reader.ReadInt16() * 0.004, reader.ReadInt16() * 0.004, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16() * 10, reader.ReadUInt16(), reader.ReadUInt32(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt32() * 0.01, reader.ReadUInt16() * 0.001, reader.ReadUInt16() * 0.01, reader.ReadUInt16() * 0.01, reader.ReadBytes(16));
            }
        }
        // SIM SUBSCRIBER ID
        if ((moduleMask & x_sim_subscriber_id_1.ProtocolXSimSubscriberId.mask) === x_sim_subscriber_id_1.ProtocolXSimSubscriberId.mask) {
            report.simSubscriberId = new x_sim_subscriber_id_1.ProtocolXSimSubscriberId(reader.ReadBytes(7));
        }
        // SIM CARD SERIAL NUMBER
        if ((moduleMask & x_sim_card_serial_number_1.ProtocolXSimCardSerialNumber.mask) === x_sim_card_serial_number_1.ProtocolXSimCardSerialNumber.mask) {
            report.simCardSerialNumber = new x_sim_card_serial_number_1.ProtocolXSimCardSerialNumber(reader.ReadBytes(20).toString('ascii'));
        }
        // FMS DRIVER-ID
        if ((moduleMask & x_fms_driver_id_1.ProtocolXFmsDriverId.mask) === x_fms_driver_id_1.ProtocolXFmsDriverId.mask) {
            report.fmsDriverId = new x_fms_driver_id_1.ProtocolXFmsDriverId(reader.ReadBytes(19).toString('ascii'), reader.ReadBytes(19).toString('ascii'));
        }
        // FMS IN-JOURNEY HIGH-RES
        if ((moduleMask & x_fms_in_journey_high_res_1.ProtocolXFmsInJourneyHighRes.mask) === x_fms_in_journey_high_res_1.ProtocolXFmsInJourneyHighRes.mask) {
            report.fmsInJourneyHighRes = new x_fms_in_journey_high_res_1.ProtocolXFmsInJourneyHighRes(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() * 32, reader.ReadUInt8() * 32, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16() / 10, reader.ReadUInt8() - 40, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt32() / 1000);
        }
        // FMS DRIVER WORKING STATES
        if ((moduleMask & x_fms_driver_working_states_1.ProtocolXFmsDriverWorkingStates.mask) === x_fms_driver_working_states_1.ProtocolXFmsDriverWorkingStates.mask) {
            if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
                reader.ReadBytes(1);
            }
            else {
                report.fmsDriverWorkingStates = new x_fms_driver_working_states_1.ProtocolXFmsDriverWorkingStates(reader.ReadUInt32(), reader.ReadUInt8());
            }
        }
        // SEGWAY NINEBOT ES4 SHARING
        if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
            if ((moduleMask & z_mod32_1.ProtocolZModule32.mask) === z_mod32_1.ProtocolZModule32.mask) {
                report.zMod32 = new z_mod32_1.ProtocolZModule32(reader.ReadUInt8(), reader.ReadInt8(), reader.ReadUInt16() / 10, reader.ReadInt16() / 10, (0, utils_1.readU24)(reader), reader.ReadUInt16(), reader.ReadInt16(), reader.ReadInt8(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadUInt16(), reader.ReadUInt8());
            }
        }
        else if ((moduleMask & x_segway_ninebot_es4_sharing_1.ProtocolXSegwayNinebotEs4Sharing.mask) === x_segway_ninebot_es4_sharing_1.ProtocolXSegwayNinebotEs4Sharing.mask) {
            report.segwayNinebotEs4Sharing = new x_segway_ninebot_es4_sharing_1.ProtocolXSegwayNinebotEs4Sharing(reader.ReadUInt8() / 10, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8());
        }
        // SENSORS
        if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
            if ((moduleMask & z_mod33_1.ProtocolZModule33.mask) === z_mod33_1.ProtocolZModule33.mask) {
                report.zMod33 = new z_mod33_1.ProtocolZModule33(reader.ReadUInt8(), reader.ReadInt8(), reader.ReadInt8(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadUInt32(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadInt8(), reader.ReadUInt8(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadUInt8());
            }
        }
        else if ((moduleMask & x_sensors_1.ProtocolXSensors.mask) === x_sensors_1.ProtocolXSensors.mask) {
            report.sensors = new x_sensors_1.ProtocolXSensors();
            for (var i = 0; i < 6; i++) {
                var b1 = reader.ReadUInt8();
                var rawType = b1 & 0x0F;
                var sensor = new x_sensors_1.ProtocolXSensor(i, rawType === 1 ? x_sensors_1.ProtocolXSensorType.TEMPERATURE
                    : rawType === 2 ? x_sensors_1.ProtocolXSensorType.HUMIDITY
                        : rawType === 3 ? x_sensors_1.ProtocolXSensorType.LIGHT
                            : x_sensors_1.ProtocolXSensorType.UNASSIGNED, (b1 & 0xF0) !== 0);
                if (sensor.type !== x_sensors_1.ProtocolXSensorType.UNASSIGNED) {
                    switch (sensor.type) {
                        case x_sensors_1.ProtocolXSensorType.TEMPERATURE:
                            sensor.temperatureDeg = reader.ReadInt16() / 100;
                            break;
                        case x_sensors_1.ProtocolXSensorType.HUMIDITY:
                            sensor.humidityPercent = reader.ReadUInt16() / 100;
                            break;
                        default:
                            reader.ReadBytes(2);
                            break;
                    }
                    if (!report.sensors.sensors)
                        report.sensors.sensors = [];
                    report.sensors.sensors.push(sensor);
                }
                else {
                    reader.ReadBytes(2);
                }
            }
        }
        // GOING GREEN "THE CORE" BIKE DATA
        if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
            if ((moduleMask & z_mod34_1.ProtocolZModule34.mask) === z_mod34_1.ProtocolZModule34.mask) {
                report.zMod34 = new z_mod34_1.ProtocolZModule34(reader.ReadBytes(38));
            }
        }
        else if ((moduleMask & x_going_green_the_core_bike_data_1.ProtocolXGoingGreenTheCoreBikeData.mask) === x_going_green_the_core_bike_data_1.ProtocolXGoingGreenTheCoreBikeData.mask) {
            report.goingGreenTheCoreBikeData = new x_going_green_the_core_bike_data_1.ProtocolXGoingGreenTheCoreBikeData(reader.ReadUInt16() * 0.0015);
        }
        // ECOOTER E1/E2 SCOOTER DATA
        if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
            if ((moduleMask & z_mod35_1.ProtocolZModule35.mask) === z_mod35_1.ProtocolZModule35.mask) {
                report.zMod35 = new z_mod35_1.ProtocolZModule35(reader.ReadBytes(17).toString('ascii'), reader.ReadBytes(12), reader.ReadBytes(20), reader.ReadBytes(4), reader.ReadBytes(12), reader.ReadBytes(20), reader.ReadBytes(8).toString('ascii'), reader.ReadBytes(10).toString('ascii'), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8());
            }
        }
        else if ((moduleMask & x_ecooter_scooter_data_1.ProtocolXEcooterScooterData.mask) === x_ecooter_scooter_data_1.ProtocolXEcooterScooterData.mask) {
            report.ecooterScooterData = new x_ecooter_scooter_data_1.ProtocolXEcooterScooterData(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadInt8(), reader.ReadInt8(), reader.ReadInt16() * 10, reader.ReadUInt8());
            // skip reserved bytes
            reader.ReadBytes(2);
        }
        // TORROT MUVI SCOOTER DATA
        if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
            if ((moduleMask & z_mod36_1.ProtocolZModule36.mask) === z_mod36_1.ProtocolZModule36.mask) {
                report.zMod36 = new z_mod36_1.ProtocolZModule36(reader.ReadBytes(9));
            }
        }
        else if ((moduleMask & x_torrot_muvi_scooter_data_1.ProtocolXTorrotMuviScooterData.mask) === x_torrot_muvi_scooter_data_1.ProtocolXTorrotMuviScooterData.mask) {
            report.torrotMuviScooterData = new x_torrot_muvi_scooter_data_1.ProtocolXTorrotMuviScooterData(reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadInt16() / 10, reader.ReadInt16() / 10, reader.ReadInt16() / 10, reader.ReadInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16() / 10, reader.ReadUInt16() / 10, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16(), reader.ReadUInt32(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() / 0.22745, reader.ReadUInt8() / 0.3921, reader.ReadInt8(), reader.ReadInt32() * 100, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8());
            // skip reserved bytes
            reader.ReadBytes(2);
        }
        // ECOOTER SERIAL NUMBERS
        if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
            if ((moduleMask & z_mod37_1.ProtocolZModule37.mask) === z_mod37_1.ProtocolZModule37.mask) {
                report.zMod37 = new z_mod37_1.ProtocolZModule37(reader.ReadInt8(), reader.ReadInt8(), reader.ReadInt8(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16());
            }
        }
        else if ((moduleMask & x_ecooter_serial_numbers_1.ProtocolXEcooterSerialNumbers.mask) === x_ecooter_serial_numbers_1.ProtocolXEcooterSerialNumbers.mask) {
            report.ecooterSerialNumbers = new x_ecooter_serial_numbers_1.ProtocolXEcooterSerialNumbers(reader.ReadBytes(16).toString('ascii'), reader.ReadBytes(16).toString('ascii'));
        }
        // ASKOLL ES2 SCOOTER DATA
        if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
            if ((moduleMask & z_mod38_1.ProtocolZModule38.mask) === z_mod38_1.ProtocolZModule38.mask) {
                report.zMod38 = new z_mod38_1.ProtocolZModule38(reader.ReadBytes(26));
            }
        }
        else if ((moduleMask & x_askoll_es2_scooter_data_1.ProtocolXAskollEs2ScooterData.mask) === x_askoll_es2_scooter_data_1.ProtocolXAskollEs2ScooterData.mask) {
            var julianSecs_1 = reader.ReadUInt32();
            var timestamp = moment.utc('1980-01-06T00:00:00').add(julianSecs_1, 'seconds');
            report.askollEs2ScooterData = new x_askoll_es2_scooter_data_1.ProtocolXAskollEs2ScooterData(timestamp, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadInt8(), reader.ReadUInt16() * 100, reader.ReadUInt8() * 100, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt32() * 100, reader.ReadUInt16() * 100, reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16() * 10, reader.ReadUInt16(), reader.ReadUInt8() * 0.1, reader.ReadUInt8());
            // skip reserved bytes
            reader.ReadBytes(2);
        }
        // CASH IN TRANSIT STATUS
        if ((loginData === null || loginData === void 0 ? void 0 : loginData.protocolId) === 'Z') {
            if ((moduleMask & z_mod39_1.ProtocolZModule39.mask) === z_mod39_1.ProtocolZModule39.mask) {
                report.zMod39 = new z_mod39_1.ProtocolZModule39(reader.ReadBytes(71));
            }
        }
        else if ((moduleMask & x_cash_in_transit_status_1.ProtocolXCashInTransitStatus.mask) === x_cash_in_transit_status_1.ProtocolXCashInTransitStatus.mask) {
            report.cashInTransitStatus = new x_cash_in_transit_status_1.ProtocolXCashInTransitStatus(reader.ReadUInt8(), reader.ReadBytes(5));
        }
        // TORROT MUVI BATTERY DATA
        if ((moduleMask & x_torrot_muvi_battery_data_1.ProtocolXTorrotMuviBatteryData.mask) === x_torrot_muvi_battery_data_1.ProtocolXTorrotMuviBatteryData.mask) {
            report.torrotMuviBatteryData = new x_torrot_muvi_battery_data_1.ProtocolXTorrotMuviBatteryData(reader.ReadBytes(13).toString('ascii'), reader.ReadBytes(13).toString('ascii'), reader.ReadUInt16(), reader.ReadUInt16(), (0, utils_1.readU24)(reader) * 0.1, (0, utils_1.readU24)(reader) * 0.1, reader.ReadUInt8(), reader.ReadBytes(2));
        }
        // BATTERY USAGE STATISTICS
        if ((moduleMask & x_battery_usage_statistics_1.ProtocolXBatteryUsageStatistics.mask) === x_battery_usage_statistics_1.ProtocolXBatteryUsageStatistics.mask) {
            report.batteryUsageStatistics = new x_battery_usage_statistics_1.ProtocolXBatteryUsageStatistics((0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader), (0, utils_1.readU24)(reader));
        }
        // STARS ACIM MOTOR CONTROLLER DATA
        if ((moduleMask & x_stars_acim_motor_controller_data_1.ProtocolXStarsAcimMotorControllerData.mask) === x_stars_acim_motor_controller_data_1.ProtocolXStarsAcimMotorControllerData.mask) {
            report.starsAcimMotorControllerData = new x_stars_acim_motor_controller_data_1.ProtocolXStarsAcimMotorControllerData(reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16(), reader.ReadInt16() / 100, reader.ReadUInt8(), reader.ReadInt16() / 100, reader.ReadInt16() / 100, reader.ReadInt16(), reader.ReadInt16(), reader.ReadUInt8(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16());
            var julianSecs_2 = reader.ReadUInt32();
            var timestamp = moment.utc('1980-01-06T00:00:00').add(julianSecs_2, 'seconds');
            report.starsAcimMotorControllerData.canEventDateTime = timestamp;
            // skip reserved bytes
            reader.ReadBytes(4);
        }
        // "CAR2" DATA
        if ((moduleMask & x_car2_data_1.ProtocolXCar2Data.mask) === x_car2_data_1.ProtocolXCar2Data.mask) {
            report.car2Data = new x_car2_data_1.ProtocolXCar2Data(reader.ReadUInt16(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt16(), reader.ReadUInt16(), reader.ReadUInt16());
            var julianSecs_3 = reader.ReadUInt32();
            var timestamp = moment.utc('1980-01-06T00:00:00').add(julianSecs_3, 'seconds');
            report.car2Data.canEventDateTime = timestamp;
            report.car2Data.reserved = reader.ReadBytes(8);
        }
        // GNSS EXTENDED DATA
        if ((moduleMask & x_gnss_extended_data_1.ProtocolXGnssExtendedData.mask) === x_gnss_extended_data_1.ProtocolXGnssExtendedData.mask) {
            report.gnssExtendedData = new x_gnss_extended_data_1.ProtocolXGnssExtendedData(reader.ReadUInt32(), reader.ReadInt32(), reader.ReadInt32(), reader.ReadUInt8() * 2, reader.ReadUInt8() * 2, reader.ReadUInt8() * 2, reader.ReadUInt8() * 20, reader.ReadUInt16() * 100, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadUInt8() * 0.1, reader.ReadUInt8(), reader.ReadUInt8(), reader.ReadBytes(4));
        }
        // BEACONS (formerly CM2010 MOBILITY SCOOTER CONTROLLER)
        if ((moduleMask & x_beacons_1.ProtocolXBeacons.mask) === x_beacons_1.ProtocolXBeacons.mask) {
            var beacons = new x_beacons_1.ProtocolXBeacons();
            beacons.beacons = [];
            var beaconCount = reader.ReadUInt8();
            var beaconsBytesLength = reader.ReadUInt16();
            // skip reserved bytes
            reader.ReadBytes(4);
            var beaconsBytesUsed = 0;
            while (beaconsBytesUsed < beaconsBytesLength && beacons.beacons.length < beaconCount) {
                if ((beaconsBytesLength - beaconsBytesUsed) < 12) {
                    // not enough bytes available to read core beacon data
                    break;
                }
                var beacon = new x_beacons_1.ProtocolXBeacon();
                beacon.macAddress = reader.ReadBytes(6).toString('hex').toUpperCase();
                beacon.rssi = reader.ReadInt8();
                beacon.isCompanion = reader.ReadUInt8() === 1;
                beacon.lastSeenS = reader.ReadUInt16();
                beacon.type = reader.ReadUInt8();
                var beaconMetaDataBytesLength = reader.ReadUInt8();
                beaconsBytesUsed += 12;
                if ((beaconsBytesLength - beaconsBytesUsed) < beaconMetaDataBytesLength) {
                    // not enough bytes available for meta-data
                    break;
                }
                var rawMetadata = reader.ReadBytes(beaconMetaDataBytesLength);
                beaconsBytesUsed += beaconMetaDataBytesLength;
                var metadataReader = new binutils.BinaryReader(rawMetadata);
                switch (beacon.type) {
                    case x_beacons_1.ProtocolXBeaconType.HEIGHT:
                        beacon.heightCm = metadataReader.ReadUInt16();
                        break;
                }
                beacons.beacons.push(beacon);
            }
            if (beaconsBytesUsed !== beaconsBytesLength) {
                // did not consume all of the beacon bytes, skip anything unused and treat as invalid
                reader.ReadBytes(beaconsBytesLength - beaconsBytesUsed);
            }
            else {
                report.beacons = beacons;
            }
        }
        // ASTRA GENERIC CAN DATA
        if ((moduleMask & x_astra_generic_can_data_1.ProtocolXAstraGenericCanData.mask) === x_astra_generic_can_data_1.ProtocolXAstraGenericCanData.mask) {
            var byteCount = reader.ReadUInt16() - 6;
            if (byteCount >= 13 && (byteCount % 13) === 0) {
                report.astraGenericCanData = new x_astra_generic_can_data_1.ProtocolXAstraGenericCanData();
                // skip reserved
                reader.ReadBytes(4);
                var entryCount = byteCount / 13;
                for (var i = 0; i < entryCount; i++) {
                    if (!report.astraGenericCanData.entries)
                        report.astraGenericCanData.entries = [];
                    report.astraGenericCanData.entries.push(new x_astra_generic_can_data_1.ProtocolXAstraGenericCanDataEntry(reader.ReadUInt32(), reader.ReadBytes(8), reader.ReadUInt8()));
                }
            }
            else if (byteCount > 0) {
                reader.ReadBytes(byteCount);
            }
        }
        // HEINZMANN ED-DISPLAY
        if ((moduleMask & x_heinzmann_1.ProtocolXHeinzmannData.mask) === x_heinzmann_1.ProtocolXHeinzmannData.mask) {
            report.heinzmannData = new x_heinzmann_1.ProtocolXHeinzmannData(reader.ReadUInt8(), (reader.ReadUInt16() / 1000), reader.ReadUInt32(), reader.ReadUInt32(), reader.ReadBytes(2));
        }
        // ASTRA GENERIC DEBUG DATA
        if ((moduleMask & x_astra_generic_debug_data_1.ProtocolXAstraGenericDebugData.mask) === x_astra_generic_debug_data_1.ProtocolXAstraGenericDebugData.mask) {
            var payloadSize = reader.ReadUInt16() - 1;
            var payloadType = reader.ReadUInt8();
            switch (payloadType) {
                case x_astra_generic_debug_data_1.ProtocolXAstraDebugDataType.NV_DATA:
                    // skip type length
                    reader.ReadBytes(2);
                    report.astraGenericDebugData = new x_astra_generic_debug_data_1.ProtocolXAstraGenericDebugData();
                    report.astraGenericDebugData.nvData = new x_astra_generic_debug_data_1.ProtocolXAstraDebugNvData((0, utils_1.readU16BE)(reader), (0, utils_1.readU32BE)(reader), (0, utils_1.readU32BE)(reader));
                    report.astraGenericDebugData.nvData.watchdogLevels = [];
                    for (var i = 0; i < 15; i++) {
                        report.astraGenericDebugData.nvData.watchdogLevels.push((0, utils_1.readU16BE)(reader));
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
exports.ProtocolXReport = ProtocolXReport;
