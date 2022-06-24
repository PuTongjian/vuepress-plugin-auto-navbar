import { getNav } from './handleNav'
import { Options } from './custom'
import { resolve } from 'path'

import { defaultOptions, setOptions } from './defaultConfig'


export default function AutoNavPlugin (options: Partial<Options>){
	if (!options) options = defaultOptions
	const assignOptions = Object.assign({}, defaultOptions, options)
	const path = resolve(process.cwd(), 'docs')
	setOptions(assignOptions)
	
	return getNav(path, 0)
}