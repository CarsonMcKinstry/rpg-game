import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

const rootHtml = path.resolve(app.getAppPath(), 'index.html');

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    width: Number(process.env.GAME_WIDTH) || 800,
    height: Number(process.env.GAME_HEIGHT) || 600,
    resizable: false,
    frame: false,
    movable: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(rootHtml);

  win.webContents.openDevTools({ mode: 'detach' });

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.on('quit', () => {
  app.quit();
});
