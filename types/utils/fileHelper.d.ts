declare const getCurDirs: (dir?: string) => string[];
declare const createREADME: (dir: string) => void;
declare const getMdFiles: (path: string, prefix?: string) => string[];
export { getCurDirs, getMdFiles, createREADME };
