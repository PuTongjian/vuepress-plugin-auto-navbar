import { getOptions } from './defaultConfig'
import { getCurDirs, getMdFiles } from './utils/fileHelper'


const getNav = (path: string, depth: number, prefix='/'): any[] => {
	const options = getOptions()
	const arr: any[] = []

	getCurDirs(path).sort().forEach((dir: string) => {
		const text = dir.substring(dir.lastIndexOf('/') + 1)
		const link = prefix + text + '/'
		const subNav = getNav(dir, depth+1, link)
		arr.push({
			text: `${options.dirPrefix}${text}`,
			link: options.useREADME ? link : (subNav[0]?.link ?? link),
			[options.childrenKey]: (depth < options.deep || options.subNavShow.includes(text)) ? subNav : []
		})
	})
	// 获取当前目录的文件
	let files = getMdFiles(path, prefix)
	if(files.length > 0) {
		files.sort().
		filter((item => !options.ignoreFiles.includes(item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.'))))).
		forEach((item) => {
			arr.push(item)
		})
		
		// createREADME(path)
	}
	return arr
}


export { 
	getNav 
}