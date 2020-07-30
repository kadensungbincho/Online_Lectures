import * as log from "https://deno.land/std/log/mod.ts";
import * as _ from "https://raw.githubusercontent.com/lodash/lodash/4.17.15-es/lodash.js";

interface Launch {
    flightNumber: number;
    mission: string;
    rocket: string;
    customers: Array<string>;
}

const launches = new Map<number, Launch>();

async function downloadLaunchData() {
    log.info("download Launch Data ...");

    const response = await fetch("https://api.spacexdata.com/v3/launches", {
        method: "GET",
    });

    if (!response.ok) {
        log.warning("Something goes wrong ... failed to fetch data");
        throw new Error("Launch data download failed.");
    }

    const launchData = await response.json();
    for (const launch of launchData) {
        const payloads = launch["rocket"]["second_stage"]["payloads"];
        const customers = _.flatMap(payloads, (payload: any) => {
            return payload["customers"];
        })

        const flightData = {
            flightNumber: launch["flight_number"],
            mission: launch["mission_name"],
            rocket: launch["rocket"]["rocket_name"],
            customers
        };

        launches.set(flightData.flightNumber, flightData);
        log.info(JSON.stringify(flightData));
    }
}

if (import.meta.main) {
    await downloadLaunchData();
    log.info(import.meta);
    log.info(`Downloaded data for ${launches.size} SpaceX launches.`);
}
