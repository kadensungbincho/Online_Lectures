import { assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";

import { filterHabitablePlanets } from "./planets.ts";

const HABITABLE_PLANET = {
    koi_disposition: "CONFIRMED",
    koi_prad: "1",
    koi_srad: "1",
    koi_smass: "1",
}

const NOT_CONFIRMED = {
    koi_disposition: "FALSE_POSITIVE",
}

Deno.test("filterHabitablePlatnets", () => {
        const filteredPlanets = filterHabitablePlanets([
            HABITABLE_PLANET,
            NOT_CONFIRMED
        ]);
        assertEquals(filteredPlanets, [
            HABITABLE_PLANET
        ])
    }
)

// Deno.test({
//     name: "example test",
//     ignore: Deno.build.os !== "darwin",
//     fn() {
//         assertEquals("deno", "deno");
//     }
// });

// Deno.test({
//     name: "ops leak",
//     sanitizeOps: false,
//     fn() {
//         setTimeout(console.info, 10000);
//     }
// });

// Deno.test({
//     name: "resource leak",
//     sanitizeResources: false,
//     async fn() {
//         await Deno.open("./models/planets.ts")
//     }
// });