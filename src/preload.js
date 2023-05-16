// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge,ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('connect', {
    searchAnime: (message) => ipcRenderer.invoke('search',message),
    getDetails: (link)=> ipcRenderer.invoke('get/details',link),
    downloadAnime:(details) => ipcRenderer.invoke('download/anime',details)
})