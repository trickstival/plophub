import fs from 'fs'

export function fileExists(filepath: string){
  return new Promise((resolve) => {
    fs.access(filepath, fs.constants.F_OK, error => {
      resolve(!error)
    })
  })
}
