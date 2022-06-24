export interface Options {
    subNavShow: string[];
    ignoreFolders: string[];
    ignoreFiles: string[];
    dirPrefix: string;
    filePrefix: string;
    useREADME: boolean;
    deep: number;
    childrenKey: childKeyType;
}
declare type childKeyType = 'items' | 'children';
export {};
