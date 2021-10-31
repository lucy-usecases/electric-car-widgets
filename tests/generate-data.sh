#!/bin/sh
APIKEY="$2"
URL="$1"
MONTH="$(date +%m)"
for i in $(seq 1 19);
  do
    DAY=`printf %02d $i`
    echo $DAY
    for h in $(seq 0 23)
    do
      HOUR=`printf %02d $h`
      POWER=$((1+ $RANDOM % 9000))
      curl -X POST "$URL/Lucy/ElectricVehicleCharging/charging" -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data "{\"sessions\": [ {\"station\":\"station-10\",\"chargeStartTime\":\"2021-$MONTH-${DAY}T${HOUR}:00:20Z\",\"duration\":\"923\",\"power\":\"$POWER\"}, ] }"
    done
done

