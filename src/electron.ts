import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow | null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      devTools: process.env.NODE_ENV !== 'production',
      preload: './react.js'
    }
  })

  mainWindow.loadFile('index.html')
  mainWindow.on('closed', () => mainWindow = null) 
}

app.on('ready', createWindow)
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())
app.on('activate', () => mainWindow === null && createWindow())

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
