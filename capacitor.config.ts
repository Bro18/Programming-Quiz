import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vueproject.myquiz',
  appName: 'T&J Quiz',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
