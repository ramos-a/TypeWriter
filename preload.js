const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
	title: "TypeWriter",
	createNote: (data) => ipcRenderer.invoke('createFile', data),
    checkDeleteAll: () => ipcRenderer.invoke('checkDeleteAll'),
})