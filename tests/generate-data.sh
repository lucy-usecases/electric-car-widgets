#!/bin/sh
APIKEY="$2"
URL="$1"

curl -X POST $URL/Lucy/ElectricVehicleCharging/charging -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{
  "sessions": [
      {"station":"station-1","chargeStartTime":"2021-07-17T18:00:00Z","duration":"1800","power":"18"},
      {"station":"station-1","chargeStartTime":"2021-07-17T19:00:00Z","duration":"1732","power":"14"},
      {"station":"station-1","chargeStartTime":"2021-07-17T20:05:00Z","duration":"500","power":"8"},
      {"station":"station-1","chargeStartTime":"2021-07-17T20:10:00Z","duration":"620","power":"7"},
      {"station":"station-1","chargeStartTime":"2021-07-17T21:06:00Z","duration":"570","power":"9"},
      {"station":"station-1","chargeStartTime":"2021-07-17T21:55:00Z","duration":"900","power":"9"},
      {"station":"station-1","chargeStartTime":"2021-07-17T22:00:00Z","duration":"98","power":"5"},
      {"station":"station-1","chargeStartTime":"2021-07-17T23:00:00Z","duration":"85","power":"8"},
  ]
}'


curl -X POST $URL/Lucy/ElectricVehicleCharging/charging -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{
  "sessions": [
      {"station":"station-2","chargeStartTime":"2021-07-17T18:00:00Z","duration":"900","power":"18"},
      {"station":"station-2","chargeStartTime":"2021-07-17T19:00:00Z","duration":"732","power":"14"},
      {"station":"station-2","chargeStartTime":"2021-07-17T20:05:00Z","duration":"1500","power":"8"},
      {"station":"station-2","chargeStartTime":"2021-07-17T20:10:00Z","duration":"2620","power":"7"}
      ]
}'


curl -X POST $URL/Lucy/ElectricVehicleCharging/charging -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{
  "sessions": [
      {"station":"station-3","chargeStartTime":"2021-07-01T18:00:00Z","duration":"900","power":"18"}
   
      ]
}'