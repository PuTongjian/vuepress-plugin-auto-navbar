import { NavItem } from '@vuepress/types';

export interface Options {
	subNavShow: string[]
	ignoreFolders: string[]
	ignoreFiles: string[]
	dirPrefix: string
	filePrefix: string
	useREADME: boolean
	deep: number
	childrenKey: childKeyType
}

export ype childKeyType = 'items' | 'children'