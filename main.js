const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

if (require('electron-squirrel-startup')) app.quit();

// default path
const default_path = app.getPath('documents');

const icon_path = path.join(__dirname, 'images', 'icon.png');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    icon: icon_path,
    webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		},
    devTools: false,
  });
  win.setMenuBarVisibility(false)
  win.setBackgroundColor('#1c1c1c')
  win.loadFile('./src/typewriter.html')

  ipcMain.handle('createFile', async (req, data) => {
    if (!data || !data.title || !data.text) {
      dialog.showMessageBox(null, {
        type: 'info',
        title: 'TypeWriter',
        message: 'No text to be saved',
        icon: icon_path,
      })
      return false;
    }
    
    const base_path = dialog.showOpenDialog(window=default_path, {properties: ['openDirectory'], default_path:default_path})
    let filePath =  path.join(base_path, `${data.title}.md`);
    if (fs.existsSync(filePath)) {
      const { response } = await dialog.showMessageBox(null, {
        type: 'question',
        buttons: ['Overwrite', 'Don\'t overwrite', 'Cancel'],
        defaultId: 1,
        title: 'TypeWriter',
        message: `There already exists a file with the name ${data.title}, do you want to overwrite it?`,
        detail: `By choosing "Don't overwrite" the current date will be added at the end to differentiate the new file.\nBy choosing "Cancel" no file will be created.`,
        icon: icon_path,
      });

      if (response == 0) {
        fs.unlinkSync(filePath);
      } else if (response == 1) {
        let date = new Date().toUTCString().replaceAll(':', '-')
        filePath = path.join(base_path, `${data.title} (${date}).md`);
      } else if (response == 2) {
        return false;
      }
    }

		fs.writeFileSync(filePath, data.text);
    dialog.showMessageBox(null, {
      type: 'info',
      title: 'TypeWriter',
      message: 'File saved succesfully',
      icon: icon_path,
    })
		return { success: true };
    })

  ipcMain.handle('checkDeleteAll', async (req) => {
    const { response } = await dialog.showMessageBox(null, {
        type: 'question',
        buttons: ['Delete all', 'Cancel'],
        defaultId: 1,
        title: 'TypeWriter',
        message: `Are you sure you want to delete everything?`,
        detail: 'Is there truly nothing worth it? Nothing at all?',
        icon: icon_path,
      }
    );

    if (response == 1) return false;
    else return true
  })
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})
