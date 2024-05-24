import "@testing-library/jest-dom";
import { Constants, Launches } from "@/app/constants";
import { filterMainList } from "@/app/utils/listUtils";

const sampleLaunches: Launches[] = [
  {
    flight_number: 1,
    launch_date_local: new Date("2006-03-25T10:30:00+12:00"),
    rocket: {
      rocket_id: "falcon1",
      rocket_name: "Falcon 1",
      rocket_type: "Merlin A",
    },
    telemetry: {
      flight_club: "",
    },
    core_serial: "Merlin 1A",
    cap_serial: "",
    launch_site: {
      site_id: "kwajalein_atoll",
      site_name: "Kwajalein Atoll",
    },
    payloads: [
      {
        payload_id: "FalconSAT-2",
        customers: ["DARPA"],
        payload_type: "Satellite",
        payload_mass_kg: 20,
        payload_mass_lbs: 43,
        orbit: "LEO",
      },
    ],
    landing_type: "",
    landing_vehicle: "",
    links: {
      mission_patch:
        "http://spacexpatchlist.space/images/thumbs/falcon_1_flight_1.png",
      article_link:
        "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
      video_link: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
    },
    details: "Engine failure at 33 seconds and loss of vehicle",
  },
  {
    flight_number: 2,
    launch_date_local: new Date("2007-03-21T13:10:00+12:00"),
    rocket: {
      rocket_id: "falcon1",
      rocket_name: "Falcon 1",
      rocket_type: "Merlin A",
    },
    telemetry: {
      flight_club: "",
    },
    core_serial: "Merlin 1A",
    cap_serial: "",
    launch_site: {
      site_id: "kwajalein_atoll",
      site_name: "Kwajalein Atoll",
    },
    payloads: [
      {
        payload_id: "DemoSAT",
        customers: ["DARPA"],
        payload_type: "Satellite",
        payload_mass_kg: 0,
        payload_mass_lbs: 0,
        orbit: "LEO",
      },
    ],
    launch_success: false,
    reused: false,
    land_success: false,
    landing_type: "",
    landing_vehicle: "",
    links: {
      mission_patch:
        "http://spacexpatchlist.space/images/thumbs/falcon_1_flight_2.png",
      article_link:
        "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
      video_link: "https://www.youtube.com/watch?v=YMvQsmLv44o",
    },
    details:
      "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
  },
  {
    flight_number: 21,
    launch_date_local: new Date("2015-03-02T23:50:00-04:00"),
    rocket: {
      rocket_id: "falcon9",
      rocket_name: "Falcon 9",
      rocket_type: "v1.1",
    },
    telemetry: {
      flight_club: "",
    },
    core_serial: "B1014",
    cap_serial: "",
    launch_site: {
      site_id: "ccafs_slc_40",
      site_name: "CCAFS SLC 40",
    },
    payloads: [
      {
        payload_id: "ABS-3A",
        customers: ["ABS"],
        payload_type: "Satellite",
        payload_mass_kg: 4159,
        payload_mass_lbs: 9169,
        orbit: "GTO",
      },
      {
        payload_id: "Eutelsat 115 West B",
        customers: ["Eutelsat"],
        payload_type: "Satellite",
        payload_mass_kg: 4159,
        payload_mass_lbs: 9169,
        orbit: "GTO",
      },
    ],
    launch_success: true,
    reused: false,
    land_success: false,
    landing_type: "",
    landing_vehicle: "",
    links: {
      mission_patch: "http://i.imgur.com/c03WXXA.png",
      reddit_campaign: "",
      reddit_launch: "http://www.reddit.com/r/spacex/comments/2x81fc",
      reddit_recovery: "",
      reddit_media: "https://www.reddit.com/r/spacex/comments/2xmumx",
      presskit:
        "http://www.spacex.com/sites/spacex/files/abs-eutelsatfactsheet.pdf",
      article_link:
        "https://www.space.com/28702-spacex-rocket-launches-satellites-video.html",
      video_link: "https://www.youtube.com/watch?v=mN7lyaCBzT8",
    },
    details:
      "The launch was Boeing's first-ever conjoined launch of a lighter-weight dual-commsat stack that was specifically designed to take advantage of the lower-cost SpaceX Falcon 9 launch vehicle. Per satellite, launch costs were less than $30 million. The ABS satellite reached its final destination ahead of schedule and started operations on September 10.",
  },
];

describe("filterMainList", () => {
  it("filters by keyword", () => {
    const result = filterMainList(
      "Falcon 1",
      Constants.DEFAULT_LAUNCH_PAD,
      Constants.DEFAULT_MIN_YEAR,
      Constants.DEFAULT_MAX_YEAR,
      sampleLaunches
    );
    expect(result).toHaveLength(2);
    expect(result[0].flight_number).toBe(1);
    expect(result[1].flight_number).toBe(2);
  });

  it("filters by launch pad", () => {
    const result = filterMainList(
      "",
      "ccafs_slc_40",
      Constants.DEFAULT_MIN_YEAR,
      Constants.DEFAULT_MAX_YEAR,
      sampleLaunches
    );
    expect(result).toHaveLength(1);
    expect(result[0].flight_number).toBe(21);
  });

  it("filters by min year", () => {
    const result = filterMainList(
      "",
      Constants.DEFAULT_LAUNCH_PAD,
      2010,
      Constants.DEFAULT_MAX_YEAR,
      sampleLaunches
    );
    expect(result).toHaveLength(1);
    expect(result[0].flight_number).toBe(21);
  });

  it("filters by max year", () => {
    const result = filterMainList(
      "",
      Constants.DEFAULT_LAUNCH_PAD,
      Constants.DEFAULT_MIN_YEAR,
      2010,
      sampleLaunches
    );
    expect(result).toHaveLength(2);
    expect(result[0].flight_number).toBe(1);
    expect(result[1].flight_number).toBe(2);
  });

  it("filters by year range", () => {
    const result = filterMainList(
      "",
      Constants.DEFAULT_LAUNCH_PAD,
      2006,
      2007,
      sampleLaunches
    );
    expect(result).toHaveLength(2);
    expect(result[0].flight_number).toBe(1);
    expect(result[1].flight_number).toBe(2);
  });

  it("filters by multiple criteria", () => {
    const result = filterMainList(
      "Falcon",
      "ccafs_slc_40",
      2000,
      2020,
      sampleLaunches
    );
    expect(result).toHaveLength(1);
    expect(result[0].flight_number).toBe(21);
  });

  it("returns the full list when no filters are applied", () => {
    const result = filterMainList(
      "",
      Constants.DEFAULT_LAUNCH_PAD,
      Constants.DEFAULT_MIN_YEAR,
      Constants.DEFAULT_MAX_YEAR,
      sampleLaunches
    );
    expect(result).toHaveLength(sampleLaunches.length);
  });
});
