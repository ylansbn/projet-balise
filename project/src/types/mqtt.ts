export interface MeteoData {
  temperature: number;
  windSpeed: number;
  windDirection: string;
  humidity: number;
  pressure: number;
}

export interface MareeInfo {
  hauteur: number;
  prochaineMareeHaute: string;
  prochaineMareeBasse: string;
}

export interface PortInfo {
  placesDisponibles: number;
  alertes: string[];
}