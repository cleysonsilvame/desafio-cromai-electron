import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import prepareNext from 'electron-next';
import { join } from 'path';
import { format } from 'url';

app.on('ready', async () => {
  await prepareNext('./renderer');

  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: false,
      preload: join(__dirname, 'preload.js'),
    },
  });

  const url = isDev
    ? 'http://localhost:8000/'
    : format({
        pathname: join(__dirname, '../renderer/out/index.html'),
        protocol: 'file:',
        slashes: true,
      });

  mainWindow.loadURL(url);
});

app.on('window-all-closed', app.quit);
