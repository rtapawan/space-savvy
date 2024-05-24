export interface Launches {
  flight_number?: number;
  launch_date_local?: Date;
  rocket?: Rocket;
  telemetry?: Telemetry;
  core_serial?: string;
  cap_serial?: string;
  launch_site?: LaunchSite;
  payloads?: Payload[];
  landing_type?: string;
  landing_vehicle?: string;
  links?: Links;
  details?: string;
  launch_success?: boolean;
  reused?: boolean;
  land_success?: boolean;
}

export interface LaunchSite {
  site_id?: string;
  site_name?: string;
}

export interface Links {
  mission_patch?: string;
  article_link?: string;
  video_link?: string;
  presskit?: string;
  reddit_campaign?: string;
  reddit_launch?: string;
  reddit_recovery?: string;
  reddit_media?: string;
}

export interface Payload {
  payload_id?: string;
  customers?: string[];
  payload_type?: string;
  payload_mass_kg?: number;
  payload_mass_lbs?: number;
  orbit?: string;
  mass_returned_kg?: number;
  mass_returned_lbs?: number;
  flight_time_sec?: number;
  cargo_manifest?: string;
}

export interface Rocket {
  rocket_id?: string;
  rocket_name?: string;
  rocket_type?: string;
}

export interface Telemetry {
  flight_club?: string;
}

export interface Launchpads {
  id?: string;
  full_name?: string;
  status?: string;
  location?: Location;
  vehicles_launched?: string;
  details?: string;
}

export interface Location {
  name?: string;
  region?: string;
  latitude?: number;
  longitude?: number;
}

export interface APIResponse {
  launches?: Launches[];
  launchpads?: Launchpads[];
}

export const Constants = {
  DEFAULT_KEYWORDS: "",
  DEFAULT_LAUNCH_PAD: "Any",
  DEFAULT_MIN_YEAR: -1,
  DEFAULT_MAX_YEAR: 9999,
};
