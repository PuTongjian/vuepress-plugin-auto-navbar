import { Options } from './custom'

let defaultOptions: Options = {
	subNavShow: [],
	ignoreFolders: ['node_modules'],
	ignoreFiles:[],
	dirPrefix : '📂  ',
	filePrefix :'✏️  ',
	useREADME: true,
	deep: 2,
	childrenKey:'children'
}

function setOptions(options: Options) {
	defaultOptions = options
}


function getOptions() {
	return defaultOptions || {}
}

export {
	defaultOptions,
	setOptions,
	getOptions
}