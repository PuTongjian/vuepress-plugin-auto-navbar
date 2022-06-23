import path from 'path'
import { readdirSync, statSync} from 'fs'
import { getOptions } from '../defaultConfig';



/**
 * @description: 判断是否是README文件
 * @param {string} filename
 * @return {*}
 */
const isNotReadme = (filename: string) => filename.toLocaleLowerCase() !== "readme.md"


/**
 * @description: 获取当前目录下的文件
 * @param {String} dir 目录路径
 * @param {Array} SuffixIncludes 需要处理的文件后缀
 * @returns
 */
const getCurFiles = (dir: string, SuffixIncludes: string[]=[], unFileIncludes: string[]=[]) => {
		// readdirSync 仅返回当前这层的数据
		const filenameList = readdirSync(dir).sort().filter((filename: string) => {
			// statSync() 用来获取文件信息 stat => status
			const fileInfo = statSync(path.join(dir, filename))
			//获取后缀
			const suffix = filename.slice(filename.lastIndexOf(".") + 1)
			return fileInfo.isFile() && SuffixIncludes.includes(suffix) && isNotReadme(filename) && !unFileIncludes.includes(filename)
	})
	return filenameList;
}


/**
 * @description: 获取当前目录下的子目录
 * @param {String} dir 当前的目录路径
 * @returns {Array} 子目录列表
 */
const getCurDirs = (dir = "."): string[] => {
	const options = getOptions()
	// 获取目录数据
	const items = readdirSync(dir)
	const allCurDirs: string[] = []
	// 递归遍历目录中所有文件夹
	items.forEach((item: string) => {
		const dirName = path.join(dir, item)
		if (statSync(dirName).isDirectory() && !options.ignoreFolders.includes(item)) {
			allCurDirs.push(dirName)
		}
	})
	return allCurDirs;
}

/**
 * @description: 获取子目录文件
 * @param {string} path 目录路径
 * @param {string} prefix 文件前缀
 * @return {array} 返回带前缀的文件名列表
 */
const getMdFiles = (path: string, prefix = '') => {
	const options = getOptions()
	const files = getCurFiles(path, ['md'], options.ignoreFiles)
	return files.map((item: string) => prefix + item)
}

export {
	// getCurFiles,
	getCurDirs,
	getMdFiles
}