import mqtt from 'mqtt';
import { MeteoData, MareeInfo, PortInfo } from '../types/mqtt';

class MQTTService {
  private client: mqtt.Client | null = null;
  private static instance: MQTTService;

  private constructor() {}

  static getInstance(): MQTTService {
    if (!MQTTService.instance) {
      MQTTService.instance = new MQTTService();
    }
    return MQTTService.instance;
  }

  connect(url: string) {
    this.client = mqtt.connect(url);
    
    this.client.on('connect', () => {
      console.log('Connecté au serveur MQTT');
      this.subscribe('capitainerie/meteo');
      this.subscribe('capitainerie/marees');
      this.subscribe('capitainerie/port');
    });

    this.client.on('error', (error) => {
      console.error('Erreur MQTT:', error);
    });
  }

  private subscribe(topic: string) {
    this.client?.subscribe(topic, (err) => {
      if (err) {
        console.error('Erreur de souscription:', err);
      }
    });
  }

  onMessage(callback: (topic: string, message: any) => void) {
    this.client?.on('message', (topic, message) => {
      callback(topic, JSON.parse(message.toString()));
    });
  }
}