# astra-protocol-x-parser
An official lightweight NodeJS package for parsing data from Astra Telematics IoT devices.
This package has been written in TypeScript offering rich code-hinting and type safety.

This package is maintained by Astra Telematics and is currently up-to-date with Protocol X V2.8

#### Supports All Data Modules
- [x] Device Power
- [x] GPS Data
- [x] Digital I/O
- [x] Analogue Inputs
- [x] Driver Behaviour
- [x] Signal Quality
- [x] GSM Network Info
- [x] Geofences
- [x] Driver ID
- [x] Trailer ID
- [x] FMS Journey Start Data
- [x] FMS In-Journey Data
- [x] OBD In-Journey Data
- [x] OBD Diagnostic Trouble Codes
- [x] FMS Journey Stop Data
- [x] OBD Journey Stop Data
- [x] Carrier Temperature Data
- [x] 1-Wire Temperature Probe Data
- [x] Carrier 2-Way Alarms
- [x] Rayvolt E-Bicycle
- [x] ECON 3-Byte
- [x] Gritter Data (BS EN 15430)
- [x] Redforge Weight
- [x] ECON "1-Gram" Gritter Data
- [x] NMEA 2000 Data
- [x] SIM Card Subscriber ID
- [x] SIM Card Serial Number
- [x] FMS Driver ID
- [x] FMS In-Journey High-res
- [x] FMS Driver Working States
- [x] Segway Ninebot ES4 Sharing
- [x] Temperature + Humidity Sensors
- [x] Going Green "The Core" Bike Data
- [x] Ecooter E1/E2 Scooter Data
- [x] Torrot Muvi Scooter Data
- [x] Ecooter E1/E2 Serial Numbers
- [x] Askoll eS2 Scooter Data
- [x] Cash-in-transit Status
- [x] Torrot Muvi Battery Data
- [x] STARS ACIM Motor Controller Data
- [x] "CAR2" Data
- [x] GNSS Extended Data
- [x] CM2010 Mobility Scooter Controller Data
- [x] Astra Generic CAN Data
- [x] Astra Generic Debug Data

### Installation
Run the following command in the root of your project

`npm i astra-protocol-x-parser`

### Basic example

```js
const net = require('net');
const {ProtocolXParser} = require('astra-protocol-x-parser');

let server = net.createServer((c) => {
    console.log('client connected');

    c.on('end', () => {
        console.log('client disconnected');
    });

    c.on('data', (data) => {
        console.log(data.length+' bytes rxd');

        try
        {
            let parser = new ProtocolXParser(data);

            if (parser.isLogin)
            {
                console.log(parser.loginData);
                /*
                    EXAMPLE OUTPUT:

                    ProtocolXLoginData {
                        imei: '860873045366969',
                        model: 'AT402',
                        vin: '',
                        firmwareVersion: '7.0.70.3',
                        hardwareRevision: '1',
                        settingsChecksum: '8A1B'
                    }
                */
            }
            else if (parser.packet?.reports)
            {
                parser.packet.reports.forEach((report) => {
                    console.log(report);
                    /*
                        EXAMPLE OUTPUT:

                        ProtocolXReport {
                            reasons: [
                                ProtocolXReason { index: 7, label: 'JOURNEY_STOP' },
                                ProtocolXReason { index: 29, label: 'ENTERING_SLEEP_MODE' }
                            ],
                            sequenceNumber: 204,
                            timestamp: 2024-06-25T22:02:04.000Z,
                            statusFlags: 72,
                            status: ProtocolXReportStatus {
                                ignitionState: false,
                                businessMode: true,
                                gpsValid: true,
                                networkRoaming: false,
                                reportsToFollow: false,
                                storedReport: false,
                                immobilised: false,
                                rs232ExternalDeviceReadError: false,
                                gpsJammerDetected: false,
                                luggageCompartmentUnlocked: true,
                                backupBatteryCharging: false
                            },
                            devicePower: ProtocolXDevicePower { externalVoltageV: 0, batteryLevelPercent: 85 },
                            gpsData: ProtocolXGpsData {
                                latitude: 53.471953,
                                longitude: -2.260216,
                                speedKph: 4,
                                maxSpeedSinceLastReportKph: 22,
                                journeyDistanceKm: 8.6,
                                headingDeg: 172,
                                altitudeM: 0
                            },
                            digitals: ProtocolXDigitals {
                                inState: [Function (anonymous)],
                                outState: [Function (anonymous)],
                                inChanged: [Function (anonymous)],
                                outChanged: [Function (anonymous)],
                                applyMasks: [Function (anonymous)],
                                statesMask: 512,
                                changesMask: 0,
                                digin1_state: 0,
                                digin2_state: 0,
                                digin3_state: 0,
                                digin4_state: 0,
                                digin5_state: 0,
                                digin6_state: 0,
                                digin7_state: 0,
                                digin8_state: 0,
                                digout1_state: 0,
                                digout2_state: 1,
                                digout3_state: 0,
                                digout4_state: 0,
                                digout5_state: 0,
                                digout6_state: 0,
                                digout7_state: 0,
                                digout8_state: 0,
                                digin1_changed: false,
                                digin2_changed: false,
                                digin3_changed: false,
                                digin4_changed: false,
                                digin5_changed: false,
                                digin6_changed: false,
                                digin7_changed: false,
                                digin8_changed: false,
                                digout1_changed: false,
                                digout2_changed: false,
                                digout3_changed: false,
                                digout4_changed: false,
                                digout5_changed: false,
                                digout6_changed: false,
                                digout7_changed: false,
                                digout8_changed: false
                            },
                            driverBehaviour: ProtocolXDriverBehaviour {
                                accelXMaxMss: 8.5,
                                accelXMinMss: 4.4,
                                accelYMaxMss: 3.1,
                                accelYMinMss: 3.3,
                                accelZMaxMss: 5.3,
                                accelZMinMss: 0.3,
                                idleTimeS: 2961
                            },
                            signalQuality: ProtocolXSignalQuality {
                                gnssSatellitesInUse: 5,
                                gsmSignalStrength: -59
                            },
                            gnssStopReportData: ProtocolXGnssStopReportData {
                                lifetimeOdometerKm: 9,
                                engineRunningHours: 31
                            }
                            }
                    */
                });

                // easily serialize a packet for storage or forwarding
                console.log(JSON.stringify(parser.packet));
                /*
                    EXAMPLE OUTPUT:

                    {"reports":[{"reasons":[{"index":5,"label":"EXTERNAL_IO"},{"index":10,"label":"EXTERNAL_POWER"},{"index":29,"label":"ENTERING_SLEEP_MODE"}],"sequenceNumber":210,"timestamp":"2024-06-25T22:08:38.000Z","statusFlags":72,"status":{"ignitionState":false,"businessMode":true,"gpsValid":true,"networkRoaming":false,"reportsToFollow":false,"storedReport":false,"immobilised":false,"rs232ExternalDeviceReadError":false,"gpsJammerDetected":false,"luggageCompartmentUnlocked":true,"backupBatteryCharging":false},"devicePower":{"externalVoltageV":0.2,"batteryLevelPercent":95},"gpsData":{"latitude":53.472127,"longitude":-2.259839,"speedKph":0,"maxSpeedSinceLastReportKph":0,"journeyDistanceKm":0,"headingDeg":322,"altitudeM":0},"digitals":{"statesMask":512,"changesMask":0,"digin1_state":0,"digin2_state":0,"digin3_state":0,"digin4_state":0,"digin5_state":0,"digin6_state":0,"digin7_state":0,"digin8_state":0,"digout1_state":0,"digout2_state":1,"digout3_state":0,"digout4_state":0,"digout5_state":0,"digout6_state":0,"digout7_state":0,"digout8_state":0,"digin1_changed":false,"digin2_changed":false,"digin3_changed":false,"digin4_changed":false,"digin5_changed":false,"digin6_changed":false,"digin7_changed":false,"digin8_changed":false,"digout1_changed":false,"digout2_changed":false,"digout3_changed":false,"digout4_changed":false,"digout5_changed":false,"digout6_changed":false,"digout7_changed":false,"digout8_changed":false},"signalQuality":{"gnssSatellitesInUse":4,"gsmSignalStrength":-59}}],"length":48}
                */
            }
        }
        catch (e)
        {
            console.log('error parsing: ',e);
        }

        // ack
        c.write(Buffer.from([0x06]));
    });
});

server.listen(2010, () => {console.log('server listening on port 2010')});
```